"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, CheckCircle2, ChevronRight, Layers, Cpu, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import projectsData from "@/data/projects.json"

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug

  const project = projectsData.find((p: any) => p.slug === slug)

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <Button onClick={() => router.push("/")}>Back to Portfolio</Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Button variant="ghost" size="sm" asChild className="group">
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back
            </Link>
          </Button>
          <div className="flex gap-3">
            {project.github && (
              <Button size="sm" variant="outline" asChild>
                <Link href={project.github} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
            )}
            {project.link && (
              <Button size="sm" asChild>
                <Link href={project.link} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-16 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4" variant="secondary">Case Study</Badge>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight lg:text-6xl">
              {project.title}
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-muted-foreground">
              {project.longDescription || project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill: string) => (
                <Badge key={skill} variant="outline" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] w-full overflow-hidden rounded-2xl border bg-muted shadow-2xl"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* Gallery Section */}
        {project.gallery && (
          <section className="mb-20">
            <h2 className="mb-8 text-3xl font-bold">Project Gallery</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-xl border bg-muted shadow-sm hover:shadow-md transition-all"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={item.url}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                      <span className="text-white font-medium">{item.title}</span>
                    </div>
                  </div>
                  <div className="p-4 bg-background">
                    <p className="text-sm font-semibold">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Features & Achievements */}
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            {project.features && (
              <section>
                <h3 className="mb-6 flex items-center text-2xl font-bold">
                  <Layers className="mr-3 h-6 w-6 text-primary" />
                  Key Features
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 rounded-lg border p-4 bg-muted/30">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h3 className="mb-6 flex items-center text-2xl font-bold">
                <Cpu className="mr-3 h-6 w-6 text-primary" />
                Impact & Achievements
              </h3>
              <div className="space-y-4">
                {project.achievements.map((achievement: string, i: number) => (
                  <div key={i} className="flex items-start gap-4 rounded-xl border p-6 hover:bg-muted/30 transition-colors">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                      {i + 1}
                    </div>
                    <p className="text-lg text-muted-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl border p-6 bg-muted/30">
              <h4 className="mb-4 flex items-center font-bold uppercase tracking-wider text-muted-foreground text-sm">
                <ShieldCheck className="mr-2 h-4 w-4" />
                Technical Implementation
              </h4>
              <ul className="space-y-4">
                {project.skills.map((skill: string) => (
                  <li key={skill} className="flex items-center text-sm font-medium">
                    <ChevronRight className="mr-2 h-4 w-4 text-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border p-6 bg-primary text-primary-foreground">
              <h4 className="mb-2 text-xl font-bold">Interested in the tech?</h4>
              <p className="mb-4 opacity-90">Check out the full source code on GitHub for implementation details.</p>
              <Button variant="secondary" className="w-full" asChild>
                <Link href={project.github || "#"}>View Repository</Link>
              </Button>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer Nav */}
      <footer className="border-t py-12 mt-20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-muted-foreground">© 2026 Osele Adeoye</p>
          <Button variant="link" asChild>
            <Link href="/#projects">View all projects</Link>
          </Button>
        </div>
      </footer>
    </div>
  )
}

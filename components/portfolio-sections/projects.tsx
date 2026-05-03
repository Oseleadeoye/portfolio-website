"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, PlusIcon, X, CheckCircle2 } from "lucide-react"
import projectsData from "@/data/projects.json"

interface Project {
  title: string;
  description: string;
  skills: string[];
  image: string;
  link: string | null;
  github: string | null;
  achievements?: string[];
}

export function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(6)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const showMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projectsData.length))
  }

  return (
    <section id="projects" className="bg-muted py-20">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold tracking-tight"
        >
          Projects
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(projectsData as Project[]).slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-xl">
                <div 
                  className="relative h-48 w-full cursor-pointer overflow-hidden bg-slate-100 dark:bg-slate-900"
                  onClick={() => setSelectedProject(project)}
                >
                  <Image 
                    src={project.image || "/logo.png"} 
                    alt={project.title} 
                    fill 
                    className="object-contain p-4 transition-transform duration-500 hover:scale-110" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity hover:opacity-100">
                    <Button variant="secondary" size="sm">View Details</Button>
                  </div>
                </div>
                <CardContent className="flex-1 p-6">
                  <h3 className="mb-2 text-xl font-semibold leading-tight">{project.title}</h3>
                  <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">{project.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.skills.slice(0, 4).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-[10px]">
                        {skill}
                      </Badge>
                    ))}
                    {project.skills.length > 4 && <Badge variant="outline" className="text-[10px]">+{project.skills.length - 4}</Badge>}
                  </div>
                </CardContent>
                <CardFooter className={`flex gap-2 p-6 pt-0 ${project.link ? "justify-between" : "justify-end"}`}>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                        <Link href={project.github} target="_blank" rel="noopener noreferrer" title="View Source">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                    {project.link && (
                      <Button asChild variant="outline" size="sm" className="h-8">
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 text-xs" onClick={() => setSelectedProject(project)}>
                    Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {visibleProjects < projectsData.length && (
          <div className="mt-10 flex justify-center">
            <Button onClick={showMoreProjects} variant="outline" className="group">
              <PlusIcon className="mr-2 h-4 w-4 transition-transform group-hover:rotate-90" />
              Load More Projects
            </Button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-background p-0 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-background/80 p-4 backdrop-blur-md">
                <h3 className="text-xl font-bold">{selectedProject.title}</h3>
                <Button variant="ghost" size="icon" onClick={() => setSelectedProject(null)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="p-6">
                <div className="relative mb-6 h-64 w-full overflow-hidden rounded-xl bg-muted">
                  <Image 
                    src={selectedProject.image || "/logo.png"} 
                    alt={selectedProject.title} 
                    fill 
                    className="object-contain p-4" 
                  />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">Description</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">{selectedProject.description}</p>
                  </div>
                  
                  {selectedProject.achievements && (
                    <div>
                      <h4 className="mb-3 text-lg font-semibold">Key Achievements</h4>
                      <ul className="space-y-3">
                        {selectedProject.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="mb-3 text-lg font-semibold">Technical Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    {selectedProject.link && (
                      <Button asChild className="flex-1">
                        <Link href={selectedProject.link} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                    {selectedProject.github && (
                      <Button asChild variant="outline" className="flex-1">
                        <Link href={selectedProject.github} target="_blank">
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}


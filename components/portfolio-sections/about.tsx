"use client"

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"
import { FileText, GraduationCap } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold tracking-tight text-white"
        >
          About Me
        </motion.h2>
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-xl font-semibold text-white">Who I Am</h3>
            <p className="mb-4 text-muted-foreground">
              I'm an AI and Machine Learning student passionate about building intelligent systems that solve real-world problems. With hands-on experience in computer vision, NLP, and predictive analytics, I enjoy turning complex datasets into actionable insights and developing AI pipelines that actually work in production.
            </p>
            <p className="mb-4 text-muted-foreground">
              Whether I'm engineering computer vision models, building predictive systems that improve business efficiency, or teaching the next generation of coders, I'm driven by curiosity and the challenge of making technology work better.
            </p>
            <p className="mb-4 text-muted-foreground">
              I believe in continuous learning and collaborating effectively to drive innovation. Currently completing my AI diploma at SAIT while gaining real-world experience through projects and leadership roles.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you'll find me leading workshops as VP of SAIT's AI Club, playing chess, or watching NBA games.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-6"
          >
            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Post-Diploma Certificate, Integrated Artificial Intelligence</h4>
                  <p className="text-sm text-muted-foreground">Southern Alberta Institute of Technology (SAIT)</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">B.Sc. (Hons) Computer Science | Minor in Data Science</h4>
                  <p className="text-sm text-muted-foreground">Landmark University</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


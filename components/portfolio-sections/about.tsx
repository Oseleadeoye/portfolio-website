"use client"

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold tracking-tight"
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
            <h3 className="mb-4 text-xl font-semibold">Who I Am</h3>
            <p className="mb-4 text-muted-foreground">
              I'm an AI engineer currently building LLM and RAG-based solutions at Alberta Health Services, contributing to AI infrastructure that supports real-world clinical and operational use cases in a regulated enterprise environment.
            </p>
            <p className="mb-4 text-muted-foreground">
              My work spans the full AI stack, from training YOLO computer vision models for industrial defect detection, to designing multi-agent governance platforms with LLM-as-a-Judge pipelines, to building RAG-based chatbots with Pinecone and LangChain. I'm drawn to problems where AI can make a measurable difference and take pride in systems that are not just accurate, but safe, auditable, and production-ready.
            </p>
            <p className="mb-4 text-muted-foreground">
              I care about responsible AI, applying governance, compliance, and data integrity practices that make AI trustworthy in high-stakes environments. Whether architecting a safety pipeline or optimizing a retrieval system, I build with the end user and the risk in mind.
            </p>
            <p className="text-muted-foreground">
              Outside of work, you'll find me playing chess or watching NBA games.
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


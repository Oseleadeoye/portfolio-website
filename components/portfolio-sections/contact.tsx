"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

export function Contact() {
  const { toast } = useToast()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email!",
        description: "Please enter a valid email address.",
      })
      return
    }
    setIsSubmitting(true)

    try {
      // Direct mailto configuration since the backend api is not set up
      const subject = encodeURIComponent("New Portfolio Contact from " + formData.name);
      const body = encodeURIComponent(formData.message + "\n\nReply to: (" + formData.email + ")");
      const mailtoStr = `mailto:oseleadeoye@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoStr;

      setFormData({ name: "", email: "", message: "" })
      toast({
        title: "Message action triggered!",
        description: "Your default email client should open to send the message.",
      })
    } catch (error) {
      toast({
        title: "Error!",
        description: 'Failed to connect to the server',
      })
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold tracking-tight text-white"
        >
          Contact Me
        </motion.h2>

        <div className="justify-center grid gap-12 md:grid-cols-2">
          <Image
            src="/contact-img.svg"
            alt="Contact Image"
            width={500}
            height={500}
            className="mx-auto max-w-md"
          />
          <div className="max-w-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}


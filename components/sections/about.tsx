"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {"I'm an enthusiastic Computer Science student at SRM Institute of Science and Technology, pursuing my B.Tech with a specialization in Software Engineering. My journey in technology is driven by a deep curiosity and passion for creating impactful solutions."}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                With a strong foundation in programming languages like Python, Java, and modern web technologies, I actively contribute to technical communities and lead robotics initiatives. I believe in the power of technology to transform ideas into reality.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {"When I'm not coding, you'll find me exploring new technologies, participating in hackathons, or working on innovative robotics projects."}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-card border border-border rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <GraduationCap className="size-6 text-primary" />
                  Education
                </h3>

                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="text-lg font-medium text-foreground">
                      SRM Institute of Science and Technology
                    </h4>
                    <p className="text-primary font-medium">
                      B.Tech in Computer Science Engineering
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Specialization: Software Engineering
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-4" />
                        2024 – 2028
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="size-4" />
                        Chennai, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

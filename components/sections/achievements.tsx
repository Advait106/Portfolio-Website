"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Trophy, Users } from "lucide-react"

const achievements = [
  {
    title: "NPTEL Certification in Java Programming",
    description: "Successfully completed the NPTEL certification course in Java Programming, demonstrating proficiency in core Java concepts and object-oriented programming.",
    icon: Award,
  },
  {
    title: "NPTEL Certification in Object-Oriented Programming",
    description: "Earned certification in Object-Oriented Programming, mastering fundamental OOP concepts including encapsulation, inheritance, and polymorphism.",
    icon: Award,
  },
  {
    title: "Robotics Team Leadership",
    description: "Leading the robotics domain at Next Gen AI Club, coordinating team efforts and driving innovative robotics projects forward.",
    icon: Users,
  },
  {
    title: "MERN full Stack Development",
    description: "Completed training in full-stack web development covering React, Node.js, Express, MongoDB, REST APIs, authentication (JWT), TailwindCSS, and built projects including an Expense Tracker and E-commerce platform.",
    icon: Award,
  },
]

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-3">
              <Trophy className="size-8 text-primary" />
              Achievements
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-card border border-border rounded-xl p-6 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <achievement.icon className="size-6 text-primary" />
                    </div>
                    <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

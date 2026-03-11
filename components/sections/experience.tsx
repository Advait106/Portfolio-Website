"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Team Lead – Robotics Domain",
    organization: "Next Gen AI Club",
    icon: Bot,
    points: [
      "Leading a robotics team in developing innovative solutions",
      "Coordinating technical activities and project timelines",
      "Working on cutting-edge robotics implementations",
    ],
  },
  {
    title: "Technical Team Member",
    organization: "E-Cell SRM",
    icon: Briefcase,
    points: [
      "Contributing to development and maintenance of technical solutions",
      "Supporting technical infrastructure for entrepreneurship events",
      "Collaborating with cross-functional teams",
    ],
  },
  {
    title: "Technical Team Member",
    organization: "SRM Insiders Club",
    icon: Briefcase,
    points: [
      "Recently joined the technical team and actively learning the club’s development workflow.",
      "Collaborating with team members to understand ongoing technical projects.",
      "Exploring web development tools and technologies used within the club.",
    ],
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Experience
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-6 z-10 ring-4 ring-background" />

                  {/* Content */}
                  <div
                    className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                  >
                    <div
                      className={`bg-card border border-border rounded-xl p-6 backdrop-blur-sm hover:border-primary/50 transition-colors ${index % 2 === 0 ? "md:ml-auto" : ""}`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                      >
                        <div className="p-2 rounded-lg bg-primary/10">
                          <exp.icon className="size-5 text-primary" />
                        </div>
                        <div className={index % 2 === 0 ? "md:text-right" : ""}>
                          <h3 className="text-lg font-semibold text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-primary text-sm">
                            {exp.organization}
                          </p>
                        </div>
                      </div>
                      <ul
                        className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}
                      >
                        {exp.points.map((point) => (
                          <li
                            key={point}
                            className="text-muted-foreground text-sm flex items-start gap-2"
                          >
                            <span
                              className={`text-primary mt-1.5 ${index % 2 === 0 ? "md:order-2" : ""}`}
                            >
                              •
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

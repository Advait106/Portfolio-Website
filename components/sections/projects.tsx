"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics: string[];
}

const featuredProjects = [
  {
    name: "CIFAR10 Image Classification",
    description:
      "Designed and trained CNN models on the CIFAR-10 dataset. Improved model accuracy by 13.7%. Performed error analysis using confusion matrix and classification metrics.",
    techStack: ["Python", "TensorFlow", "Matplotlib", "Jupyter Notebook"],
    github: "https://github.com/Advait106",
    category: "Machine Learning",
  },
  {
    name: "COA Calculator",
    description:
      "Web application to calculate COA (Cost of Attendance) using Python Flask with an intuitive user interface.",
    techStack: ["Python Flask", "HTML"],
    github: "https://github.com/Advait106",
    category: "Web",
  },
  {
    name: "PDF DOCX Reader",
    description:
      "A powerful tool to read and process PDF and DOCX files with support for text extraction and parsing.",
    techStack: ["TypeScript"],
    github: "https://github.com/Advait106",
    category: "Tools",
  },
  {
    name: "Instagram Scraper",
    description:
      "Tool for scraping and collecting Instagram data for analysis and research purposes.",
    techStack: ["HTML", "JavaScript"],
    github: "https://github.com/Advait106",
    category: "Tools",
  },
  {
    name: "Cafe Website",
    description:
      "Responsive website for a cafe with modern UI/UX design, featuring menu display and contact information.",
    techStack: ["HTML", "CSS"],
    github: "https://github.com/Advait106",
    category: "Web",
  },
];

const categories = ["All", "Web", "Machine Learning", "Tools"];

// Excluded repositories
const excludedRepos = ["hospital-dashboard", "advait106"];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          "https://api.github.com/users/Advait106/repos?sort=updated&per_page=10",
        );
        if (response.ok) {
          const repos: GitHubRepo[] = await response.json();
          // Filter out excluded repositories
          const filteredRepos = repos.filter(
            (repo) => !excludedRepos.includes(repo.name.toLowerCase()),
          );
          setGithubRepos(filteredRepos);
        }
      } catch (error) {
        console.error("Failed to fetch GitHub repos:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchRepos();
  }, []);

  const filteredProjects =
    selectedCategory === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Projects
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-primary"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Projects */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.name}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-card border border-border rounded-xl p-6 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 flex flex-col"
              >
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Folder className="size-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="size-5" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* GitHub Repositories */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
              <Github className="size-5 text-primary" />
              Recent GitHub Activity
            </h3>

            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-card border border-border rounded-lg p-4 animate-pulse"
                  >
                    <div className="h-4 bg-secondary rounded w-3/4 mb-3" />
                    <div className="h-3 bg-secondary rounded w-full mb-2" />
                    <div className="h-3 bg-secondary rounded w-2/3" />
                  </div>
                ))}
              </div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {githubRepos.slice(0, 6).map((repo) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="group bg-card/50 border border-border rounded-lg p-4 hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                        {repo.name}
                      </h4>
                      <ExternalLink className="size-4 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                      {repo.description || "No description available"}
                    </p>
                    {repo.language && (
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <span className="size-2 rounded-full bg-primary" />
                        {repo.language}
                      </span>
                    )}
                  </motion.a>
                ))}
              </motion.div>
            )}

            <div className="mt-8 text-center">
              <Button
                asChild
                variant="outline"
                className="border-border hover:border-primary"
              >
                <a
                  href="https://github.com/Advait106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Github className="size-4" />
                  View All Repositories
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import tadaImg from "../assets/projects/projects/tada.jpg";
import kustagiImg from "../assets/projects/projects/kustagi.jpg";
import naydupetImg from "../assets/projects/projects/naydupet.jpg";

type Project = {
  title: string;
  image: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "132/33kV Substation - TADA",
    image: tadaImg,
    description: "132/33kV substation for Daikin India Ltd, Tada site, Andhra Pradesh.",
  },
  {
    title: "220/132kV Substation - KUSTAGI",
    image: kustagiImg,
    description:
      "220/33kV pooling substation for Vena Energy India Pvt Ltd, Kustagi, Karnataka.",
  },
  {
    title: "400kV Substation - NAYDUPET",
    image: naydupetImg,
    description:
      "110/33kV test lab bay work for Meiden T and D India Ltd, Naydupet, Andhra Pradesh.",
  },
];

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
};

const ProjectPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="projects" className="bg-white py-20 text-gray-800 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <h2 className="text-3xl font-bold text-orange-600 sm:text-4xl md:text-5xl">Projects</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Delivering excellence through innovative and reliable engineering solutions.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
          {projects.map((project, index) => (
            <motion.button
              key={project.title}
              type="button"
              {...fadeIn}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="min-h-[44px] overflow-hidden rounded-lg border border-gray-200 bg-gray-50 text-left shadow-sm transition-colors hover:border-orange-200"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[320px]"
                loading="lazy"
              />
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                  {project.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedProject(null);
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-3 top-3 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/95 text-gray-800 shadow-sm transition-colors hover:bg-gray-100"
                aria-label="Close project modal"
              >
                <X className="h-5 w-5" />
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[420px]"
              />

              <div className="p-6 text-left sm:p-8">
                <h3 className="text-2xl font-bold text-gray-800 sm:text-3xl">{selectedProject.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectPage;

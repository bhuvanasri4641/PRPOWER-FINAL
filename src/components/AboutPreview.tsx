import { motion } from "framer-motion";
import { Users, Award, Shield, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import engineersImage from "@/assets/engineers-team.jpg";

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Delivering excellence with unwavering quality control and engineering standards.",
  },
  {
    icon: Users,
    title: "Expert Teama and good ",
    description: "Led by 30+ years of leadership in high-voltage and renewable infrastructure.",
  },
  {
    icon: Target,
    title: "Timely Delivery",
    description: "Reliable project execution with defined timelines and transparent communication.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Zero-accident track record with disciplined, site-first safety protocols.",
  },
];

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
};

const AboutSection = () => {
  return (
    <section id="about-section" className="bg-white py-20 text-gray-800 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <h2 className="text-3xl font-bold text-[#F26B1D] sm:text-4xl md:text-5xl">About Us</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Building India&apos;s power future one project at a time.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.article {...fadeIn} transition={{ duration: 0.6 }} className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <header>
              <h3 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
                Driven by Vision.
                <span className="mt-1 block bg-gradient-to-r from-[#F26B1D] to-yellow-400 bg-clip-text text-transparent">
                  Powered by Expertise.
                </span>
              </h3>
            </header>

            <p className="mt-6 text-base leading-relaxed text-gray-700 sm:text-lg">
              Since 2018, <strong>PR Power and Infrastructures</strong> has delivered turnkey power solutions
              across South India. Headquartered in Chennai, our reputation is built on executional precision.
            </p>

            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Under <strong>CEO Mr. P. Sakthivel</strong>, our team of seasoned engineers has commissioned
              100+ AIS/GIS substations, solar farms, and wind infrastructure projects.
            </p>

            <div className="mt-8 w-full space-y-6">
              <div className="rounded-lg border-l-4 border-[#F26B1D] bg-[#fff8f2] p-6 sm:p-8">
                <h4 className="text-lg font-semibold text-[#F26B1D]">Our Mission</h4>
                <p className="mt-2 text-base leading-relaxed text-gray-700 sm:text-lg">
                  To engineer future-ready power infrastructure that is reliable, scalable, and safe.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-yellow-400 bg-[#fffdf2] p-6 sm:p-8">
                <h4 className="text-lg font-semibold text-yellow-700">Our Vision</h4>
                <p className="mt-2 text-base leading-relaxed text-gray-700 sm:text-lg">
                  To lead India&apos;s energy future with sustainable and smart grid innovations.
                </p>
              </div>
            </div>

            <Button
              size="lg"
              className="mt-8 inline-flex w-full justify-center rounded-md bg-[#F26B1D] px-6 py-3 text-white transition-colors hover:bg-orange-600 sm:w-auto"
            >
              <Users className="mr-2 h-5 w-5" />
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.article>

          <motion.div {...fadeIn} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={engineersImage}
                alt="PR Power Team"
                loading="lazy"
                className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F26B1D]/55 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-md bg-black/25 p-3 text-left text-white backdrop-blur-sm">
                <h4 className="text-lg font-semibold sm:text-xl">Our Expert Team</h4>
                <p className="mt-1 text-sm text-white/90 sm:text-base">Dedicated, experienced, and future-driven.</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:gap-12">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    {...fadeIn}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.06 }}
                    className="rounded-lg border border-gray-200 bg-gray-50 p-6 sm:p-8"
                  >
                    <Icon className="h-7 w-7 text-[#F26B1D]" />
                    <h4 className="mt-3 text-lg font-semibold text-gray-800">{value.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

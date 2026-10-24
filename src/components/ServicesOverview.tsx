import { motion } from "framer-motion";
import {
  Zap,
  Settings,
  Package,
  TestTube,
  Wrench,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Zap,
    title: "Engineering Services",
    description:
      "Complete electrical engineering including SLDs, layouts, cable designs, and protection coordination.",
    features: ["System Design", "Foundation Engineering", "Relay Settings", "Cable Scheduling"],
  },
  {
    icon: Settings,
    title: "Installation Services",
    description:
      "Expert installation of AIS/GIS substations and renewable energy infrastructure projects.",
    features: ["AIS/GIS Substations", "Solar EPC", "Wind EPC", "Up to 400kV Capability"],
  },
  {
    icon: TestTube,
    title: "Testing and Commissioning",
    description: "Comprehensive testing and commissioning of high-voltage electrical systems.",
    features: ["CT/PT Testing", "Isolator Testing", "CVT Testing", "Relay Coordination"],
  },
  {
    icon: Package,
    title: "Supply Services",
    description:
      "Procurement and delivery of transformers, control panels, and protection equipment.",
    features: ["Transformers", "Control Panels", "Cable Trays", "Protection Equipment"],
  },
  {
    icon: Wrench,
    title: "O and M Services",
    description:
      "Operations and Maintenance support with preventive and predictive strategies.",
    features: ["24/7 Operations", "Preventive Maintenance", "Predictive Analysis", "Emergency Support"],
  },
];

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
};

const ServicesSection = () => {
  return (
    <section id="services-section" className="bg-[#f8fafc] py-20 text-[#1f2f45] sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Our Services</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
            Comprehensive Infrastructure Solutions
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
            End-to-end electrical infrastructure solutions delivered with technical precision and
            execution excellence.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                {...fadeIn}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-lg border border-[#e5e9ef] bg-white p-6 shadow-sm sm:p-8"
              >
                <Icon className="h-8 w-8 text-[#F26B1D]" />

                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>

                <p className="mt-4 text-base leading-relaxed text-gray-600">{service.description}</p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-[#F26B1D]" />
                      <span className="text-sm leading-relaxed text-gray-700 sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-center text-center lg:items-start lg:text-left">
          <Button
            size="lg"
            className="inline-flex w-full justify-center rounded-md bg-[#F26B1D] px-8 py-3 text-white transition-colors hover:bg-[#d85c17] sm:w-auto"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

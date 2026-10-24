import CountUp from "react-countup";
import { motion } from "framer-motion";

import DaikinLogo from "../assets/pr-logo/pr-logo/DAIKIN.jpeg";
import LTLogo from "../assets/pr-logo/pr-logo/L&T.jpeg";
import MahindraLogo from "../assets/pr-logo/pr-logo/MAHINDRA.jpeg";
import VenaEnergyLogo from "../assets/pr-logo/pr-logo/vena energy.png";
import SterlingWilsonLogo from "../assets/pr-logo/pr-logo/sterling & wilson.png";
import PGCILLogo from "../assets/pr-logo/pr-logo/PGCIL.jpeg";
import TNEBLogo from "../assets/pr-logo/pr-logo/TNEB.jpeg";
import TVSLogo from "../assets/pr-logo/pr-logo/TVS.png";
import IndoLogo from "../assets/pr-logo/pr-logo/indo.jpg";
import MeidenLogo from "../assets/pr-logo/pr-logo/meiden.jpg";

const logos = [
  { src: DaikinLogo, alt: "Daikin" },
  { src: LTLogo, alt: "L&T" },
  { src: MahindraLogo, alt: "Mahindra" },
  { src: VenaEnergyLogo, alt: "Vena Energy" },
  { src: SterlingWilsonLogo, alt: "Sterling & Wilson" },
  { src: PGCILLogo, alt: "PGCIL" },
  { src: TNEBLogo, alt: "TNEB" },
  { src: TVSLogo, alt: "TVS" },
  { src: IndoLogo, alt: "Indo" },
  { src: MeidenLogo, alt: "Meiden" },
];

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
};

const ClientsSection = () => {
  return (
    <section id="clients-section" className="bg-gray-50 py-20 text-gray-800 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <h2 className="text-3xl font-bold text-orange-600 sm:text-4xl md:text-5xl">Our Clients</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Trusted by leaders across infrastructure, energy, and engineering sectors.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-3 sm:gap-10 md:grid-cols-4 lg:grid-cols-5 lg:gap-12">
          {logos.map((logo, index) => (
            <motion.img
              key={logo.alt}
              {...fadeIn}
              transition={{ duration: 0.45, delay: index * 0.03 }}
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto max-w-full object-contain sm:h-12 md:h-14"
              loading="lazy"
            />
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.5 }}
            className="rounded-lg border border-orange-200 bg-white p-6 text-center shadow-sm sm:p-8 lg:text-left"
          >
            <p className="text-3xl font-bold text-orange-600 sm:text-4xl md:text-5xl">
              <CountUp end={100} duration={2} />+
            </p>
            <p className="mt-3 text-base font-medium text-gray-700 sm:text-lg">Happy Clients</p>
          </motion.div>

          <motion.div
            {...fadeIn}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-lg border border-orange-200 bg-white p-6 text-center shadow-sm sm:p-8 lg:text-left"
          >
            <p className="text-3xl font-bold text-orange-600 sm:text-4xl md:text-5xl">
              <CountUp end={250} duration={2} />+
            </p>
            <p className="mt-3 text-base font-medium text-gray-700 sm:text-lg">Projects Completed</p>
          </motion.div>

          <motion.div
            {...fadeIn}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-lg border border-orange-200 bg-white p-6 text-center shadow-sm sm:p-8 lg:text-left"
          >
            <p className="text-3xl font-bold text-orange-600 sm:text-4xl md:text-5xl">
              <CountUp end={20} duration={2} />+
            </p>
            <p className="mt-3 text-base font-medium text-gray-700 sm:text-lg">Years of Excellence</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

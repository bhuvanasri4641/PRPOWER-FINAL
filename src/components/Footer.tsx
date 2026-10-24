import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUp, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
};

const GlassFooter = () => {
  return (
    <footer className="relative border-t border-white/10 bg-neutral-950/95 py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-neutral-900/55 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:items-start lg:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-orange-500 shadow-lg">
              <span className="text-2xl font-extrabold text-white">PR</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">PR Power and Infrastructures</h3>
              <p className="mt-1 text-sm text-white/75">
                Engineering tomorrow&apos;s energy infrastructure today
              </p>
            </div>
          </div>

          <a
            href="/PR-POWER-BROCHURE.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              className="inline-flex w-full justify-center rounded-md border-orange-500 px-5 py-2 text-orange-500 transition-colors hover:bg-orange-500 hover:text-white sm:w-auto"
            >
              <Download className="h-4 w-4" />
              Download Brochure
            </Button>
          </a>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
          <motion.div {...fadeIn} transition={{ duration: 0.5 }}>
            <h4 className="text-lg font-semibold text-orange-400">Contact</h4>
            <p className="mt-3 flex min-h-[44px] items-center gap-2 text-sm text-white/85 sm:text-base">
              <Phone className="h-4 w-4 text-orange-300" />
              +91 9080537672
            </p>
            <p className="mt-2 flex min-h-[44px] items-center gap-2 text-sm text-white/85 sm:text-base">
              <Phone className="h-4 w-4 text-orange-300" />
              +91 9445257630
            </p>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.05 }}>
            <h4 className="text-lg font-semibold text-orange-400">Email</h4>
            <p className="mt-3 flex min-h-[44px] items-center gap-2 text-sm text-white/85 sm:text-base">
              <Mail className="h-4 w-4 text-orange-300" />
              prpowerinfra@gmail.com
            </p>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
            <h4 className="text-lg font-semibold text-orange-400">Location</h4>
            <p className="mt-3 flex min-h-[44px] items-center gap-2 text-sm text-white/85 sm:text-base">
              <MapPin className="h-4 w-4 text-orange-300" />
              Avadi, Chennai, Tamil Nadu
            </p>
          </motion.div>
        </div>

        <div className="my-8 border-t border-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
          <motion.p {...fadeIn} transition={{ duration: 0.5 }} className="text-sm text-white/60">
            © 2026 PR Power and Infrastructures. All rights reserved.
          </motion.p>

          <motion.button
            {...fadeIn}
            transition={{ duration: 0.5, delay: 0.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex min-h-[44px] items-center gap-2 text-sm text-white/70 transition-colors hover:text-orange-400"
          >
            <ArrowUp className="h-4 w-4" />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default GlassFooter;

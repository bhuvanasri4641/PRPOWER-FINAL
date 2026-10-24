import { ArrowRight, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-power-infrastructure.jpg";

const HERO_METRICS = [
  { value: "30+", label: "Years Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "400kV", label: "Turnkey Capability" },
];

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section role="banner" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Power transmission and renewable infrastructure"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.58)_50%,rgba(0,0,0,0.35)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_88%_46%,rgba(242,107,29,0.24),rgba(242,107,29,0)_58%)]" />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center pb-20 pt-32 text-center sm:pb-24 sm:pt-36 lg:items-start lg:pb-32 lg:pt-40 lg:text-left">
          <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block">Powering Tomorrow with</span>
            <span className="mt-1 block">
              Trusted <span className="text-[#F26B1D]">Infrastructure</span>
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
            Delivering AIS/GIS substations, high-voltage transmission systems, and renewable energy
            infrastructure backed by over three decades of engineering excellence.
          </p>

          <div className="mt-9 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row lg:items-start">
            <button
              type="button"
              onClick={() => navigate("/projects")}
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-md bg-[#F26B1D] px-6 py-3 text-base font-semibold text-white shadow-[0_10px_20px_rgba(242,107,29,0.24)] transition-colors duration-300 hover:bg-[#d85c17] sm:w-auto"
            >
              View Our Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>

            <a
              href="/PR-POWER-BROCHURE.pdf"
              download
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-base font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#1f2f45] sm:w-auto"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Brochure
            </a>
          </div>

          <div className="mt-14 w-full border-t border-white/30 pt-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
              {HERO_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="flex flex-col items-center rounded-lg bg-white/[0.08] px-6 py-6 text-center backdrop-blur-[2px] lg:items-start lg:text-left"
                >
                  <p className="text-3xl font-bold leading-none text-[#F26B1D] sm:text-4xl md:text-5xl">
                    {metric.value}
                  </p>
                  <span className="mt-3 h-px w-14 bg-white/45" />
                  <p className="mt-3 text-sm font-medium uppercase tracking-[1.2px] text-white/80 sm:text-base">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

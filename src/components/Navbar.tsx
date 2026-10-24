import { useEffect, useState, type MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const SECTION_IDS = ["home", "about", "services", "clients", "contact"] as const;
type SectionId = (typeof SECTION_IDS)[number];
const NAV_SCROLL_OFFSET = 96;

const NAV_ITEMS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Clients", href: "/#clients" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const updateActiveSection = () => {
      const position = window.scrollY + NAV_SCROLL_OFFSET;
      let current: SectionId = "home";

      for (const id of SECTION_IDS) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= position) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    const timer = window.setTimeout(updateActiveSection, 400);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) {
      return;
    }

    const section = location.hash.replace("#", "");
    if ((SECTION_IDS as readonly string[]).includes(section)) {
      setActiveSection(section as SectionId);
    }
  }, [location.pathname, location.hash]);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    const top = Math.max(0, element.getBoundingClientRect().top + window.scrollY - 80);
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleNavigation = (href: string) => {
    setIsMobileOpen(false);

    if (href.startsWith("/#")) {
      const section = href.replace("/#", "") as SectionId;
      setActiveSection(section);

      if (location.pathname !== "/") {
        navigate(`/#${section}`);
        window.setTimeout(() => scrollToSection(section), 140);
        return;
      }

      navigate(`/#${section}`);
      window.setTimeout(() => scrollToSection(section), 0);
      return;
    }

    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    handleNavigation("/#home");
  };

  const isActive = (href: string) => {
    if (href === "/projects") {
      return location.pathname === "/projects";
    }

    if (href.startsWith("/#")) {
      const section = href.replace("/#", "");
      return location.pathname === "/" && activeSection === section;
    }

    return false;
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-white/95 backdrop-blur-md transition-all duration-300",
          isScrolled
            ? "h-[72px] border-[#e5ebf2] shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
            : "h-[84px]"
        )}
      >
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
          <Link to="/" onClick={handleLogoClick} aria-label="PR Power Home" className="shrink-0">
            <img
              src={logo}
              alt="PR Power"
              className={cn(
                "w-auto transition-all duration-300",
                isScrolled ? "h-8 sm:h-9" : "h-9 sm:h-10"
              )}
            />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex xl:gap-11">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className={cn(
                  "group relative min-h-[44px] text-[15px] font-medium transition-colors duration-300",
                  isActive(item.href)
                    ? "text-[#F26B1D]"
                    : "text-[#233248] hover:text-[#F26B1D]"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute left-0 top-full h-[2px] w-full origin-left transition-transform duration-300",
                    isActive(item.href)
                      ? "scale-x-100 bg-[#F26B1D]"
                      : "scale-x-0 bg-[#F26B1D] group-hover:scale-x-100"
                  )}
                />
              </button>
            ))}
          </nav>

          <button
            onClick={() => handleNavigation("/#contact")}
            className="hidden min-h-[44px] rounded-md bg-[#F26B1D] px-6 py-2.5 text-[15px] font-medium text-white shadow-[0_6px_16px_rgba(242,107,29,0.25)] transition-colors duration-300 hover:bg-[#d85c17] lg:inline-flex"
          >
            Get a Quote
          </button>

          <button
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-[#dce3ea] text-[#1f2f45] lg:hidden"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {isMobileOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        >
          <div
            className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white px-6 pb-8 pt-6 shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <img src={logo} alt="PR Power" className="h-9 w-auto" />
              <button
                onClick={() => setIsMobileOpen(false)}
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-[#dce3ea] text-[#1f2f45]"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className={cn(
                    "min-h-[44px] w-full rounded-md px-3 text-left text-base font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-[#fff3eb] text-[#F26B1D]"
                      : "text-[#1f2f45] hover:bg-[#f6f8fb] hover:text-[#F26B1D]"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNavigation("/#contact")}
              className="mt-6 inline-flex min-h-[44px] w-full items-center justify-center rounded-md bg-[#F26B1D] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#d85c17]"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, HelpCircle } from "lucide-react";

const officeDetails = [
  {
    icon: MapPin,
    title: "Our Office",
    lines: ["Chennai (Avadi)", "Tamil Nadu, India"],
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    lines: ["+91 9080537672", "+91 9445257630"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: ["prpowerinfra@gmail.com"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon - Sat", "9:00 AM - 7:00 PM"],
    color: "from-purple-500 to-indigo-500",
  },
];

const faqs = [
  {
    q: "What services do you offer?",
    a: "We provide engineering, installation, testing, commissioning, and maintenance for power infrastructure projects.",
  },
  {
    q: "How quickly can I get a quote?",
    a: "We typically respond within 24 hours with project-specific details.",
  },
  {
    q: "Do you work across India?",
    a: "Yes. We deliver turnkey solutions across multiple states.",
  },
  {
    q: "Can I schedule a site visit?",
    a: "Yes. Our engineers can conduct site visits upon request.",
  },
];

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
};

const ContactPreview = () => {
  return (
    <section id="contact-section" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <h2 className="text-3xl font-bold text-orange-600 sm:text-4xl md:text-5xl">Contact Us</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
            We&apos;re here to support your project planning, execution, and operational needs.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
          {officeDetails.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                {...fadeIn}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col items-start gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${card.color} shadow-sm`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                <div className="space-y-1">
                  {card.lines.map((line) => (
                    <p key={line} className="text-sm leading-relaxed text-gray-600 sm:text-base">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <motion.h3
            {...fadeIn}
            transition={{ duration: 0.5 }}
            className="text-left text-3xl font-bold text-orange-600 sm:text-4xl md:text-5xl"
          >
            Frequently Asked Questions
          </motion.h3>

          <div className="mt-8 space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.q}
                {...fadeIn}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-left sm:p-8"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-1 h-6 w-6 shrink-0 text-orange-600" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{faq.q}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;

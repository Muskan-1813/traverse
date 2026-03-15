"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import LazyHydrate from "react-lazy-hydration";
const WorksWherever = dynamic(
  () => import("@/Components/Workwherever/WorksWherever"),
  {
    ssr: true,
  },
);
const HeroSection = dynamic(() => import("@/Components/Hero/HeroSection"), {
  loading: () => <div style={{ height: 500 }} />,
  ssr: true,
});

const FeaturesSection = dynamic(
  () => import("@/Components/Feature/FeaturesSection"),
);
const ServerCoverage = dynamic(
  () => import("@/Components/Servers/ServerCoverage"),
  {
    ssr: true,
  },
);
const PricingSection = dynamic(
  () => import("@/Components/Pricecards/PricingSection"),
);
const InstantConnectionSection = dynamic(
  () => import("@/Components/InstantConnection/InstantConnectionSection"),
  {
    ssr: true,
  },
);
const FAQSection = dynamic(() => import("@/Components/FAQs/FAQSection"));
const CTASection = dynamic(() => import("@/Components/Footer/Footer"), {
  ssr: true,
});

export default function LandingPageContent() {
  return (
    <div className="text-white overflow-x-hidden min-h-screen space-y-0 lg:px-4">
      <div className="fixed inset-0 -z-10 ">
        <Image
          src="/bg.avif"
          alt="Background"
          fill
          sizes="100vw"
          quality={80}
          className="object-cover "
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <HeroSection />
      <div className="lg:pt-[200px]">
        <LazyHydrate whenVisible>
          <FeaturesSection />
        </LazyHydrate>
      </div>
      <ServerCoverage />

      <PricingSection />
      <InstantConnectionSection />
      <WorksWherever />
      <FAQSection />

      <CTASection />
    </div>
  );
}

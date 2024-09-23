import About from "@/components/About";
import LandingPage from "@/components/AutoScroll/LandingPage";
import CompanyMotto from "@/components/CompanyMotto";
import Features from "@/components/Features/Features";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <CompanyMotto />
      <About />
      <Features />
      <Testimonials />
    </div>
  );
}

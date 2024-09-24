import About from "@/components/About";
import LandingPage from "@/components/AutoScroll/LandingPage";
import CompanyMotto from "@/components/CompanyMotto";
import Features from "@/components/Features/Features";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <section id="landing-page">
        <LandingPage />
      </section>

      <section id="about">
        <CompanyMotto />
      </section>
      <section id="about">
        <About />
      </section>

      <section id="services">
        <Features />
      </section>

      <section id="#testimonials">
        <Testimonials />
      </section>
    </div>
  );
}

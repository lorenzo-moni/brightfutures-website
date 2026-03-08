import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import HowItWorks from "@/components/HowItWorks";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <HowItWorks />
        <Testimonials />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

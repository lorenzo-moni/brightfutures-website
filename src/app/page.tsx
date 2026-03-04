import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CompanyForm from "@/components/CompanyForm";
import StudentForm from "@/components/StudentForm";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Testimonials />
        <CompanyForm />
        <StudentForm />
        <Team />
      </main>
      <Footer />
    </>
  );
}

import MainLayout from "../layouts/MainLayout";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";

const AboutPage = () => {
  return (
    <MainLayout>
      <div className="pt-16">
        <About />
        <Skills />
        <Experience />
      </div>
    </MainLayout>
  );
};

export default AboutPage;


import MainLayout from "../layouts/MainLayout";
import Projects from "../components/sections/Projects";
import Certificates from "../components/sections/Certificates";

const ProjectsPage = () => {
  return (
    <MainLayout>
      <div className="pt-16">
        <Projects />
        <Certificates />
      </div>
    </MainLayout>
  );
};

export default ProjectsPage;


import MainLayout from "../layouts/MainLayout";
import Contact from "../components/sections/Contact";

const ContactPage = () => {
  return (
    <MainLayout>
      <div className="pt-16">
        <Contact />
      </div>
    </MainLayout>
  );
};

export default ContactPage;


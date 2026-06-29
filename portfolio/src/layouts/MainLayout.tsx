import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
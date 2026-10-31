import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white dark:bg-slate-950 dark:text-slate-100">
      {/* Ambient Background Glows & Grid */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-pattern" />
      <div className="pointer-events-none fixed -top-40 -left-40 -z-10 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl dark:bg-blue-600/15" />
      <div className="pointer-events-none fixed top-1/3 -right-40 -z-10 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl dark:bg-cyan-500/10" />

      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

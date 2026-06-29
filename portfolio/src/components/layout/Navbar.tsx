import { FaGithub } from "react-icons/fa";
import { navigation } from "../../data/navigation";

const Navbar = () => {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          YR Portfolio
        </h1>

        {/* Menu */}
        <nav>
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  className="font-medium text-gray-700 transition hover:text-blue-600"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* GitHub & Download CV */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ramatullah12"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 transition hover:text-blue-600"
          >
            <FaGithub size={28} />
          </a>

          <button className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
            Download CV
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
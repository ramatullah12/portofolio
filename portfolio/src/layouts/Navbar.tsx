const Navbar = () => {
  return (
    <nav className="w-full border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <h1 className="text-xl font-bold">YR Portfolio</h1>

        <ul className="flex gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
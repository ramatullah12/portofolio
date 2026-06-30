import profile from "../../assets/images/profile.png";
const Hero = () => {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-7xl items-center justify-between px-6"
    >
      {/* Bagian Kiri */}
      <div className="max-w-xl">
        <p className="text-lg text-blue-600 font-semibold">
          Halo, Saya 👋
        </p>
        <h1 className="mt-3 text-5xl font-bold">
          Yuan Ramatullah
        </h1>
        <h2 className="mt-4 text-2xl text-gray-600">
          Frontend Developer
        </h2>
        <p className="mt-6 leading-8 text-gray-500">
          Saya adalah mahasiswa Sistem Informasi Universitas multi data palembang yang memiliki minat pada Frontend Development,
          React, Laravel, Flutter, dan UI/UX.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
            Download CV
          </button>
          <button className="rounded-lg border border-blue-600 px-6 py-3 text-blue-600 hover:bg-blue-50">
            Hubungi Saya
          </button>
        </div>

      </div>

      {/* Bagian Kanan */}
      <div>

        <img
          src={profile}
          alt="Profile"
          className="w-96 rounded-full shadow-lg"
        />

      </div>

    </section>
  );
};

export default Hero;
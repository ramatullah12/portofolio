import SectionTitle from "../common/SectionTitle";
import CertificateCard from "../ui/CertificateCard";
import { certificates } from "../../data/certificates";

const Certificates = () => {
  return (
    <section id="certificates" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Lisensi & Kompetensi"
          title="Sertifikasi &"
          highlight="Pencapaian Teknis"
          subtitle="Bukti komitmen pembelajaran berkelanjutan di bidang Frontend Engineering, Backend Laravel, Mobile Flutter, dan UI/UX Design."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;


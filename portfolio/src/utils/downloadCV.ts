import { personalInfo } from "../data/socials";
import { skills } from "../data/skills";
import { projects } from "../data/projects";
import { certificates } from "../data/certificates";

export function downloadCV() {
  const printWindow = window.open("", "_blank", "width=900,height=1000");
  if (!printWindow) {
    alert("Izinkan pop-up browser untuk melihat dan mengunduh CV Yuan Ramatullah.");
    return;
  }

  const skillList = skills.map((s) => `${s.name} (${s.category})`).join(" • ");
  const projectListHtml = projects
    .slice(0, 4)
    .map(
      (p) => `
      <div style="margin-bottom: 14px;">
        <div style="display:flex; justify-content:space-between; align-items:baseline;">
          <strong style="font-size:14px; color:#0f172a;">${p.title}</strong>
          <span style="font-size:12px; color:#475569;">${p.year} — ${p.role}</span>
        </div>
        <div style="font-size:12px; color:#2563eb; margin: 2px 0 4px 0;">Tech: ${p.technologies.join(", ")}</div>
        <p style="font-size:12.5px; color:#334155; margin:0; line-height:1.5;">${p.description}</p>
      </div>
    `
    )
    .join("");

  const certListHtml = certificates
    .map(
      (c) => `
      <li style="margin-bottom: 6px; font-size:12.5px; color:#334155;">
        <strong>${c.title}</strong> — ${c.issuer} (${c.date})
      </li>
    `
    )
    .join("");

  const html = `
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8" />
      <title>CV - ${personalInfo.name}</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #0f172a;
          background: #f8fafc;
          margin: 0;
          padding: 32px 16px;
        }
        .toolbar {
          max-width: 800px;
          margin: 0 auto 20px auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #0f172a;
          color: #fff;
          padding: 12px 20px;
          border-radius: 12px;
        }
        .btn {
          background: #2563eb;
          color: #fff;
          border: none;
          padding: 8px 18px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 13px;
        }
        .btn:hover { background: #1d4ed8; }
        .page {
          max-width: 800px;
          margin: 0 auto;
          background: #fff;
          padding: 44px 48px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          box-sizing: border-box;
        }
        h1 { margin: 0; font-size: 28px; color: #0f172a; }
        h2.role { margin: 4px 0 10px 0; font-size: 16px; color: #2563eb; font-weight: 600; }
        .meta { font-size: 12.5px; color: #475569; line-height: 1.6; }
        .section { margin-top: 22px; }
        .section-title {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: #2563eb;
          font-weight: 700;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 5px;
          margin-bottom: 12px;
        }
        p { font-size: 13px; line-height: 1.6; color: #334155; margin: 0; }
        @media print {
          body { background: #fff; padding: 0; }
          .toolbar { display: none; }
          .page { box-shadow: none; padding: 16px 24px; max-width: 100%; }
        }
      </style>
    </head>
    <body>
      <div class="toolbar">
        <span><strong>Curriculum Vitae</strong> — ${personalInfo.name}</span>
        <button class="btn" onclick="window.print()">Cetak / Simpan sebagai PDF</button>
      </div>
      <div class="page">
        <div style="border-bottom: 2px solid #0f172a; padding-bottom: 16px;">
          <h1>${personalInfo.name}</h1>
          <h2 class="role">${personalInfo.role}</h2>
          <div class="meta">
            ${personalInfo.location} &bull; Email: ${personalInfo.email} &bull; GitHub: ${personalInfo.github}
          </div>
        </div>

        <div class="section">
          <div class="section-title">Profil Singkat</div>
          <p>${personalInfo.bio}</p>
        </div>

        <div class="section">
          <div class="section-title">Pendidikan</div>
          <div style="display:flex; justify-content:space-between; align-items:baseline;">
            <strong style="font-size:14px;">${personalInfo.university}</strong>
            <span style="font-size:12px; color:#475569;">2023 — Sekarang</span>
          </div>
          <div style="font-size:13px; color:#2563eb; font-weight:600; margin-top:2px;">${personalInfo.major}</div>
          <p style="margin-top:4px;">Fokus studi: Rekayasa Perangkat Lunak, Pengembangan Web & Mobile, Analisis & Desain Sistem Informasi, Basis Data Relasional, dan Desain UI/UX.</p>
        </div>

        <div class="section">
          <div class="section-title">Keahlian Teknis</div>
          <p>${skillList}</p>
        </div>

        <div class="section">
          <div class="section-title">Proyek Pilihan</div>
          ${projectListHtml}
        </div>

        <div class="section">
          <div class="section-title">Sertifikasi & Kompetensi</div>
          <ul style="margin:0; padding-left:18px;">
            ${certListHtml}
          </ul>
        </div>
      </div>
    </body>
    </html>
  `;

  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
}


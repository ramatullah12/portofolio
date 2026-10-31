import { personalInfo } from "../data/socials";

export function downloadCV() {
  const printWindow = window.open("", "_blank", "width=920,height=1050");
  if (!printWindow) {
    alert("Izinkan pop-up browser untuk melihat dan mencetak CV Yuan Ramatullah.");
    return;
  }

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>CV - YUAN RAMATULLAH</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #111827;
          background: #f1f5f9;
          margin: 0;
          padding: 28px 16px;
        }
        .toolbar {
          max-width: 820px;
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
          padding: 9px 18px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 13px;
        }
        .btn:hover { background: #1d4ed8; }
        .page {
          max-width: 820px;
          margin: 0 auto;
          background: #fff;
          padding: 44px 52px;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          box-sizing: border-box;
        }
        .header {
          text-align: center;
          border-bottom: 1.5px solid #9ca3af;
          padding-bottom: 14px;
        }
        h1 {
          margin: 0 0 8px 0;
          font-size: 28px;
          letter-spacing: 0.5px;
          font-weight: 800;
          color: #111827;
        }
        .contact-line {
          font-size: 12.5px;
          color: #1f2937;
          line-height: 1.6;
        }
        .contact-line a {
          color: #1f2937;
          text-decoration: none;
        }
        .section {
          margin-top: 16px;
          border-bottom: 1.5px solid #9ca3af;
          padding-bottom: 14px;
        }
        .section:last-child {
          border-bottom: none;
        }
        .section-title {
          font-size: 14px;
          text-transform: uppercase;
          font-weight: 700;
          color: #111827;
          margin-bottom: 8px;
        }
        p {
          font-size: 12.5px;
          line-height: 1.55;
          color: #1f2937;
          margin: 0;
          text-align: justify;
        }
        .row-between {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-size: 13px;
          font-weight: 700;
          color: #111827;
          margin-top: 8px;
        }
        ul {
          margin: 6px 0 10px 0;
          padding-left: 20px;
        }
        li {
          font-size: 12.5px;
          line-height: 1.55;
          color: #1f2937;
          margin-bottom: 4px;
        }
        @media print {
          body { background: #fff; padding: 0; }
          .toolbar { display: none; }
          .page { box-shadow: none; padding: 12px 20px; max-width: 100%; }
        }
      </style>
    </head>
    <body>
      <div class="toolbar">
        <span><strong>CV Resmi</strong> — ${personalInfo.name}</span>
        <button class="btn" onclick="window.print()">Cetak / Simpan PDF</button>
      </div>
      <div class="page">
        <div class="header">
          <h1>YUAN RAMATULLAH</h1>
          <div class="contact-line">${personalInfo.phone} | ${personalInfo.email}</div>
          <div class="contact-line"><a href="${personalInfo.linkedin}">${personalInfo.linkedin}</a></div>
          <div class="contact-line"><a href="${personalInfo.github}">${personalInfo.github}</a></div>
        </div>

        <div class="section">
          <div class="section-title">SUMMARY</div>
          <p>${personalInfo.summaryEn}</p>
        </div>

        <div class="section">
          <div class="section-title">EDUCATION</div>
          <div class="row-between">
            <span>Universitas Multi Data Palembang | Information System (S1)</span>
            <span>Sep 2022 – Aug 2026</span>
          </div>
          <ul>
            <li>IPK: 3.47 / 4.00</li>
          </ul>
        </div>

        <div class="section">
          <div class="section-title">WORK EXPERIENCE</div>

          <div class="row-between">
            <span>Fullstack Web Developer - Internship | PT Kedaton Sejahtera Abadi</span>
            <span>Sep 2025 – Jan 2026</span>
          </div>
          <ul>
            <li><strong>Full-Stack Architecture:</strong> Developed a real estate platform using Laravel (MVC), ensuring clean separation of logic for an optimized user experience.</li>
            <li><strong>Database Management:</strong> Designed optimized MySQL schemas with Eloquent ORM to manage complex property data, unit availability, and buyer leads.</li>
            <li><strong>API & Security:</strong> Built RESTful APIs to integrate with Angular frontend, implementing robust data validation and CSRF protection.</li>
            <li><strong>Advanced Search:</strong> Implemented high-performance filtering logic for instant property searches based on price range, land area, and specifications.</li>
          </ul>

          <div class="row-between">
            <span>Fullstack Web Developer - Internship | PT Rachmat Kelantan Sakti</span>
            <span>Jan 2026 – Jun 2026</span>
          </div>
          <ul>
            <li><strong>Integrated Fleet Reservation:</strong> Developed a real-time heavy equipment booking module to optimize fleet allocation across multiple construction sites.</li>
            <li><strong>Maintenance & Repair Tracking:</strong> Built a comprehensive repair management system to document equipment downtime, service history, and routine maintenance schedules.</li>
            <li><strong>Inventory & Spare Parts Control:</strong> Implemented an inventory tracking system to manage repair stocks, ensuring spare part availability and reducing operational delays.</li>
            <li><strong>Automated Data Synchronization:</strong> Integrated the repair module with inventory databases to automate stock deduction and procurement alerts during maintenance activities.</li>
          </ul>
        </div>

        <div class="section">
          <div class="section-title">SKILL & LANGUAGE</div>
          <ul>
            <li><strong>Technical Skills:</strong> HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript (ES6+), PHP, Laravel, React.js, Redux, TanStack Query (React Query), Express.js, MySQL, REST API, Git, GitHub, Visual Studio Code, Postman, XAMPP, Tableau, Figma, MVC Architecture, Database Design, Responsive Web Design, CRUD Application Development, Eloquent ORM.</li>
            <li><strong>Soft Skills:</strong> Problem Solving, Teamwork, Communication, Critical Thinking, Adaptability, Time Management, Fast Learner, Attention to Detail.</li>
            <li><strong>Languages:</strong> Indonesian (Native), English (Intermediate)</li>
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

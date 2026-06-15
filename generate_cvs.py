#!/usr/bin/env python3
"""
Genera los CVs en PDF usando WeasyPrint con el salto de página correcto
antes de la sección de Educación/Education.
"""

import os
from weasyprint import HTML, CSS

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_DIR = os.path.join(BASE_DIR, "public", "cv")

COMMON_CSS = """
@page {
    size: A4;
    margin: 0;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
    font-family: Helvetica, Arial, sans-serif;
    background-color: #0d1210;
    color: #a8b8ae;
    font-size: 9pt;
    line-height: 1.4;
}
.page-wrap {
    background-color: #0d1210;
    width: 595pt;
}
/* ---- HEADER ---- */
.cv-header {
    padding: 22pt 51pt 16pt 51pt;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.header-left { flex: 1; }
.cv-name {
    font-size: 26pt;
    font-weight: bold;
    color: #ffffff;
    line-height: 1.1;
    margin-bottom: 5pt;
}
.cv-role {
    font-size: 11pt;
    color: #6dbf82;
    font-weight: normal;
}
.header-right {
    font-size: 8.5pt;
    color: #a8b8ae;
    text-align: right;
    line-height: 1.7;
    padding-top: 4pt;
}
/* ---- SEPARATOR ---- */
.separator {
    height: 1.5pt;
    background-color: #6dbf82;
    margin: 0 51pt;
}
/* ---- CONTENT ---- */
.cv-content {
    padding: 18pt 51pt 0 51pt;
}
/* ---- SECTION ---- */
.section {
    margin-bottom: 16pt;
}
.section-label {
    font-size: 7pt;
    font-weight: bold;
    color: #6dbf82;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 3pt;
}
.section-title {
    font-size: 14pt;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 10pt;
}
/* ---- PROFILE TEXT ---- */
.profile-text {
    font-size: 9pt;
    color: #a8b8ae;
    line-height: 1.5;
}
/* ---- JOB ENTRY ---- */
.job-entry {
    margin-bottom: 14pt;
}
.job-date {
    font-size: 8pt;
    color: #6b7d74;
    margin-bottom: 2pt;
}
.job-title {
    font-size: 11pt;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 2pt;
}
.job-company {
    font-size: 9pt;
    margin-bottom: 4pt;
}
.company-blue { color: #5b8db8; }
.company-green { color: #6dbf82; }
.job-bullets {
    list-style: none;
    padding: 0;
    margin: 0;
}
.job-bullets li {
    font-size: 9pt;
    color: #a8b8ae;
    padding-left: 10pt;
    margin-bottom: 2pt;
    position: relative;
}
.job-bullets li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #a8b8ae;
}
/* ---- EDUCATION ENTRY ---- */
.edu-entry {
    margin-bottom: 12pt;
}
.edu-date {
    font-size: 8pt;
    color: #6b7d74;
    margin-bottom: 2pt;
}
.edu-degree {
    font-size: 11pt;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 2pt;
}
.edu-institution {
    font-size: 9pt;
    color: #6dbf82;
    margin-bottom: 4pt;
}
.edu-bullets {
    list-style: none;
    padding: 0;
    margin: 0;
}
.edu-bullets li {
    font-size: 9pt;
    color: #a8b8ae;
    padding-left: 10pt;
    margin-bottom: 2pt;
    position: relative;
}
.edu-bullets li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #a8b8ae;
}
/* ---- PROJECTS ---- */
.project-entry {
    margin-bottom: 10pt;
}
.project-title {
    font-size: 9pt;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 2pt;
}
.project-desc {
    font-size: 9pt;
    color: #a8b8ae;
    padding-left: 10pt;
    position: relative;
}
.project-desc::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #a8b8ae;
}
/* ---- SKILLS ---- */
.skills-group {
    margin-bottom: 8pt;
}
.skills-label {
    font-size: 8pt;
    color: #6b7d74;
    margin-bottom: 2pt;
}
.skills-list-green {
    font-size: 8pt;
    font-weight: bold;
    color: #6dbf82;
}
.skills-list-blue {
    font-size: 8pt;
    font-weight: bold;
    color: #5b8db8;
}
.soft-skills {
    font-size: 9pt;
    color: #a8b8ae;
    margin-top: 4pt;
}
/* ---- LANGUAGES TABLE ---- */
.lang-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 8pt;
    font-size: 9pt;
}
.lang-table th {
    font-size: 8pt;
    font-weight: bold;
    color: #6dbf82;
    padding: 5pt 8pt;
    text-align: left;
    border: 1pt solid #1e2e28;
    background-color: #141f1b;
}
.lang-table td {
    padding: 5pt 8pt;
    color: #a8b8ae;
    border: 1pt solid #1e2e28;
}
.lang-table tr:nth-child(odd) td {
    background-color: #0f1a16;
}
.lang-table tr:nth-child(even) td {
    background-color: #0d1210;
}
/* ---- PAGE BREAK ---- */
.break-before {
    break-before: page;
    padding-top: 22pt;
}
"""

HTML_ES = """<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"/></head>
<body>
<div class="page-wrap">

  <!-- CABECERA -->
  <div class="cv-header">
    <div class="header-left">
      <div class="cv-name">Asier González Medina</div>
      <div class="cv-role">Administrador de Sistemas / Desarrollador Full Stack</div>
    </div>
    <div class="header-right">
      Bilbao, Bizkaia, España<br/>
      +34 655 732 425<br/>
      asiermedinalaboral@gmail.com<br/>
      linkedin.com/in/asiermedinalaboral<br/>
      github.com/asier-Medina
    </div>
  </div>

  <div class="separator"></div>

  <div class="cv-content">

    <!-- PERFIL -->
    <div class="section">
      <div class="section-label">PERFIL</div>
      <div class="section-title">Sobre mí</div>
      <div class="profile-text">
        Profesional en transición al sector tecnológico con base sólida en ciencias de la salud. Combino mi formación como
        Nutricionista (UPV/EHU) y 10 años de experiencia clínica, en cooperación internacional y gestión comercial con
        estudios actuales de ASIR (BirtLH) y Desarrollo Web Full Stack (The Bridge). Aporto capacidad analítica,
        adaptabilidad y visión multidisciplinar a equipos de tecnología.
      </div>
    </div>

    <!-- TRAYECTORIA -->
    <div class="section">
      <div class="section-label">TRAYECTORIA</div>
      <div class="section-title">Experiencia</div>

      <div class="job-entry">
        <div class="job-date">Feb 2026 – Actualidad</div>
        <div class="job-title">Desarrollador Web Full Stack (Bootcamp)</div>
        <div class="job-company company-blue">The Bridge · Bilbao</div>
        <ul class="job-bullets">
          <li>React, Node.js, Express, PostgreSQL, MongoDB, Docker, JWT, TypeScript, Git</li>
          <li>Desarrollo de proyectos en equipo desde el primer día: apps full stack, APIs REST, autenticación JWT</li>
          <li>Hackathon BBK: ONzero, app anti-desperdicio alimentario con IA generativa (1.º clasificado)</li>
        </ul>
      </div>

      <div class="job-entry">
        <div class="job-date">Sep 2025 – Actualidad</div>
        <div class="job-title">Técnico en Administración de Sistemas Informáticos en Red (ASIR)</div>
        <div class="job-company company-blue">BirtLH · Bilbao</div>
        <ul class="job-bullets">
          <li>Administración de infraestructuras TI, redes, seguridad y virtualización</li>
          <li>Gestión de servidores Linux/Windows, Active Directory, protocolos TCP/IP</li>
        </ul>
      </div>

      <div class="job-entry">
        <div class="job-date">Feb 2020 – Sep 2025</div>
        <div class="job-title">Encargado de sección — Gestión comercial</div>
        <div class="job-company company-green">Pepe Navarro S.L. · España</div>
        <ul class="job-bullets">
          <li>Gestión de pedidos, proveedores, inventario y facturación de dos secciones</li>
          <li>Análisis de datos de ventas y reposición de stock · Atención y fidelización de clientes</li>
        </ul>
      </div>

      <div class="job-entry">
        <div class="job-date">Jul 2018 – Sep 2019</div>
        <div class="job-title">Nutricionista de campo — Cooperación internacional</div>
        <div class="job-company company-green">Ayuda en Acción · Sierra Sur de Oaxaca, México</div>
        <ul class="job-bullets">
          <li>Coordinación de talleres de seguridad alimentaria con comunidades rurales</li>
          <li>Diseño de metodología junto a socios locales EECOS-INCIDE</li>
          <li>Adaptación a entornos sin recursos, gestión de equipo multicultural</li>
        </ul>
      </div>

      <div class="job-entry">
        <div class="job-date">Abr 2015 – Nov 2015</div>
        <div class="job-title">Nutricionista Clínica</div>
        <div class="job-company company-green">Sodexo · Hospital de Górliz, Bizkaia</div>
        <ul class="job-bullets">
          <li>Elaboración y supervisión de planes dietéticos adaptados a necesidades clínicas</li>
          <li>Coordinación con equipos médicos y de enfermería</li>
          <li>Evaluación nutricional: entrevistas, historia clínica, parámetros antropométricos</li>
        </ul>
      </div>
    </div>

    <!-- FORMACIÓN — forzar salto de página antes de esta sección -->
    <div class="section break-before">
      <div class="section-label">FORMACIÓN</div>
      <div class="section-title">Educación</div>

      <div class="edu-entry">
        <div class="edu-date">2016 – 2020</div>
        <div class="edu-degree">Grado en Nutrición Humana y Dietética</div>
        <div class="edu-institution">UPV/EHU · Vitoria-Gasteiz</div>
        <ul class="edu-bullets">
          <li>Certificación ISAK (evaluación antropométrica)</li>
        </ul>
      </div>
    </div>

    <!-- CÓDIGO -->
    <div class="section">
      <div class="section-label">CÓDIGO</div>
      <div class="section-title">Proyectos destacados</div>

      <div class="project-entry">
        <div class="project-title">ONzero — Hackathon BBK + The Bridge</div>
        <div class="project-desc">App anti-desperdicio con IA generativa. Stack: React, Node.js, JavaScript.</div>
      </div>
      <div class="project-entry">
        <div class="project-title">SustraiApp — Descubre el País Vasco</div>
        <div class="project-desc">App full stack para explorar lugares, eventos y gastronomía vasca. Stack: React, Node.js, PostgreSQL, Docker.</div>
      </div>
      <div class="project-entry">
        <div class="project-title">IsWorking — Gestión de turnos de trabajo</div>
        <div class="project-desc">Sistema de gestión de turnos con autenticación JWT y portales diferenciados para empleados y managers. Stack: Node.js, JavaScript.</div>
      </div>
      <div class="project-entry">
        <div class="project-title">BIDAIAgo — Explorador de destinos de viaje</div>
        <div class="project-desc">Aplicación web de destinos accesibles. Stack: React, TypeScript.</div>
      </div>
      <div class="project-entry">
        <div class="project-title">Tasuku — Gestión de tareas gamificada</div>
        <div class="project-desc">Web app de reparto de tareas con sistema de puntos. Stack: HTML, CSS, JavaScript.</div>
      </div>
      <div class="project-entry">
        <div class="project-title">POKEback — Backend completo con PostgreSQL</div>
        <div class="project-desc">API REST para gestión de equipos Pokémon. Stack: Node.js, Express, PostgreSQL.</div>
      </div>
      <div class="project-entry">
        <div class="project-title">GESTION-STOCK — Gestión de materiales</div>
        <div class="project-desc">Prototipo web para gestión de materias primas y previsión de ventas en comercios. Stack: HTML, CSS, JavaScript.</div>
      </div>
    </div>

    <!-- HABILIDADES -->
    <div class="section">
      <div class="section-label">HABILIDADES</div>
      <div class="section-title">Stack técnico y soft skills</div>

      <div class="skills-group">
        <div class="skills-label">Frontend</div>
        <div class="skills-list-green">React TypeScript HTML5 CSS3 / CSS Modules</div>
      </div>
      <div class="skills-group">
        <div class="skills-label">Backend &amp; Bases de datos</div>
        <div class="skills-list-blue">Node.js Express PostgreSQL MongoDB REST APIs JWT</div>
      </div>
      <div class="skills-group">
        <div class="skills-label">Sistemas &amp; DevOps</div>
        <div class="skills-list-green">Linux Windows Server Docker Git / GitHub Redes TCP/IP Active Directory</div>
      </div>
      <div class="skills-group">
        <div class="skills-label">Soft skills</div>
        <div class="soft-skills">
          Adaptabilidad extrema · Diagnóstico y análisis · Empatía funcional · Inteligencia intercultural · Aprendizaje autónomo · Gestión bajo presión
        </div>
      </div>
    </div>

    <!-- IDIOMAS -->
    <div class="section">
      <div class="section-label">IDIOMAS</div>
      <div class="section-title">Idiomas</div>
      <table class="lang-table">
        <thead>
          <tr>
            <th>Idioma</th>
            <th>Comprensión</th>
            <th>Habla</th>
            <th>Escritura</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Español</td><td>Nativo</td><td>Nativo</td><td>Nativo</td></tr>
          <tr><td>Euskera</td><td>B2</td><td>B2</td><td>B1</td></tr>
          <tr><td>Inglés</td><td>B2</td><td>B1</td><td>B1</td></tr>
        </tbody>
      </table>
    </div>

  </div><!-- /cv-content -->
</div><!-- /page-wrap -->
</body>
</html>
"""

HTML_EN = """<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/></head>
<body>
<div class="page-wrap">

  <!-- HEADER -->
  <div class="cv-header">
    <div class="header-left">
      <div class="cv-name">Asier González Medina</div>
      <div class="cv-role">Systems Administrator / Full Stack Developer</div>
    </div>
    <div class="header-right">
      Bilbao, Bizkaia, Spain<br/>
      +34 655 732 425<br/>
      asiermedinalaboral@gmail.com<br/>
      linkedin.com/in/asiermedinalaboral<br/>
      github.com/asier-Medina
    </div>
  </div>

  <div class="separator"></div>

  <div class="cv-content">

    <!-- PROFILE -->
    <div class="section">
      <div class="section-label">PROFILE</div>
      <div class="section-title">About me</div>
      <div class="profile-text">
        Professional transitioning into the tech sector with a solid background in health sciences. I combine my training as a
        Nutritionist (UPV/EHU) and 10 years of experience in clinical care, international cooperation and commercial
        management with current studies in Network Systems Administration (ASIR, BirtLH) and Full Stack Web
        Development (The Bridge, Bilbao). I bring analytical thinking, adaptability and a multidisciplinary perspective to tech teams.
      </div>
    </div>

    <!-- CAREER -->
    <div class="section">
      <div class="section-label">CAREER</div>
      <div class="section-title">Experience</div>

      <div class="job-entry">
        <div class="job-date">Feb 2026 – Present</div>
        <div class="job-title">Full Stack Web Developer (Bootcamp)</div>
        <div class="job-company company-blue">The Bridge · Bilbao</div>
        <ul class="job-bullets">
          <li>React, Node.js, Express, PostgreSQL, MongoDB, Docker, JWT, TypeScript, Git</li>
          <li>Team-based project development from day one: full stack apps, REST APIs, JWT auth</li>
          <li>BBK Hackathon: ONzero, AI-powered food waste reduction app (1st place)</li>
        </ul>
      </div>

      <div class="job-entry">
        <div class="job-date">Sep 2025 – Present</div>
        <div class="job-title">Network Systems Administration Student (ASIR)</div>
        <div class="job-company company-blue">BirtLH · Bilbao</div>
        <ul class="job-bullets">
          <li>IT infrastructure administration, networking, security and virtualisation</li>
          <li>Linux/Windows server management, Active Directory, TCP/IP protocols</li>
        </ul>
      </div>

      <div class="job-entry">
        <div class="job-date">Feb 2020 – Sep 2025</div>
        <div class="job-title">Section Manager — Commercial Management</div>
        <div class="job-company company-green">Pepe Navarro S.L. · Spain</div>
        <ul class="job-bullets">
          <li>Order, supplier, inventory and invoicing management for two store sections</li>
          <li>Sales data analysis and stock replenishment · Customer service and loyalty</li>
        </ul>
      </div>

      <div class="job-entry">
        <div class="job-date">Jul 2018 – Sep 2019</div>
        <div class="job-title">Field Nutritionist — International Cooperation</div>
        <div class="job-company company-green">Ayuda en Acción · Sierra Sur de Oaxaca, Mexico</div>
        <ul class="job-bullets">
          <li>Coordination of food security workshops with rural communities</li>
          <li>Methodology design alongside local partner EECOS-INCIDE</li>
          <li>Adaptation to resource-scarce environments, multicultural team management</li>
        </ul>
      </div>

      <div class="job-entry">
        <div class="job-date">Apr 2015 – Nov 2015</div>
        <div class="job-title">Clinical Nutritionist</div>
        <div class="job-company company-green">Sodexo · Hospital de Górliz, Bizkaia</div>
        <ul class="job-bullets">
          <li>Development and supervision of dietary plans tailored to clinical needs</li>
          <li>Coordination with medical and nursing teams</li>
          <li>Nutritional assessment: interviews, clinical history, anthropometric parameters</li>
        </ul>
      </div>
    </div>

    <!-- EDUCATION — force page break before this section -->
    <div class="section break-before">
      <div class="section-label">EDUCATION</div>
      <div class="section-title">Education</div>

      <div class="edu-entry">
        <div class="edu-date">2016 – 2020</div>
        <div class="edu-degree">Bachelor's Degree in Human Nutrition and Dietetics</div>
        <div class="edu-institution">UPV/EHU · Vitoria-Gasteiz</div>
        <ul class="edu-bullets">
          <li>ISAK certified (anthropometric assessment)</li>
        </ul>
      </div>
    </div>

    <!-- CODE -->
    <div class="section">
      <div class="section-label">CODE</div>
      <div class="section-title">Featured Projects</div>

      <div class="project-entry">
        <div class="project-title">ONzero — Hackathon BBK + The Bridge</div>
        <div class="project-desc">App anti-waste with generative AI. Stack: React, Node.js, JavaScript.</div>
      </div>
      <div class="project-entry">
        <div class="project-title">SustraiApp — Discover the Basque Country</div>
        <div class="project-desc">Full stack app to explore places, events and gastronomy in the Basque Country. Stack: React, Node.js, PostgreSQL, Docker.</div>
      </div>
      <div class="project-entry">
        <div class="project-title">IsWorking — Work Shift Management</div>
        <div class="project-desc">Shift management system with JWT authentication and separate portals for employees and managers. Stack: Node.js, JavaScript.</div>
      </div>
      <div class="project-entry">
        <div class="project-title">BIDAIAgo — Travel Destination Explorer</div>
        <div class="project-desc">Accessible travel destination explorer. Stack: React, TypeScript.</div>
      </div>
      <div class="project-entry">
        <div class="project-title">Tasuku — Gamified Task Management</div>
        <div class="project-desc">Gamified task management web app with points system. Stack: HTML, CSS, JavaScript.</div>
      </div>
      <div class="project-entry">
        <div class="project-title">POKEback — Full Backend with PostgreSQL</div>
        <div class="project-desc">REST API for Pokémon team management. Stack: Node.js, Express, PostgreSQL.</div>
      </div>
      <div class="project-entry">
        <div class="project-title">GESTION-STOCK — Stock Management</div>
        <div class="project-desc">Web prototype for managing raw materials and forecasting sales in retail. Stack: HTML, CSS, JavaScript.</div>
      </div>
    </div>

    <!-- SKILLS -->
    <div class="section">
      <div class="section-label">SKILLS</div>
      <div class="section-title">Tech stack &amp; soft skills</div>

      <div class="skills-group">
        <div class="skills-label">Frontend</div>
        <div class="skills-list-green">React TypeScript HTML5 CSS3 / CSS Modules</div>
      </div>
      <div class="skills-group">
        <div class="skills-label">Backend &amp; Databases</div>
        <div class="skills-list-blue">Node.js Express PostgreSQL MongoDB REST APIs JWT</div>
      </div>
      <div class="skills-group">
        <div class="skills-label">Systems &amp; DevOps</div>
        <div class="skills-list-green">Linux Windows Server Docker Git / GitHub TCP/IP Networking Active Directory</div>
      </div>
      <div class="skills-group">
        <div class="skills-label">Soft skills</div>
        <div class="soft-skills">
          Extreme adaptability · Root-cause analysis · Functional empathy · Intercultural intelligence · Self-directed learning · Performance under pressure
        </div>
      </div>
    </div>

    <!-- LANGUAGES -->
    <div class="section">
      <div class="section-label">LANGUAGES</div>
      <div class="section-title">Languages</div>
      <table class="lang-table">
        <thead>
          <tr>
            <th>Language</th>
            <th>Understanding</th>
            <th>Speaking</th>
            <th>Writing</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Spanish</td><td>Native</td><td>Native</td><td>Native</td></tr>
          <tr><td>Basque</td><td>B2</td><td>B2</td><td>B1</td></tr>
          <tr><td>English</td><td>B2</td><td>B1</td><td>B1</td></tr>
        </tbody>
      </table>
    </div>

  </div><!-- /cv-content -->
</div><!-- /page-wrap -->
</body>
</html>
"""


def generate_pdf(html_content, output_path):
    css = CSS(string=COMMON_CSS)
    HTML(string=html_content).write_pdf(output_path, stylesheets=[css])
    print(f"Generado: {output_path}")


if __name__ == "__main__":
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    generate_pdf(HTML_ES, os.path.join(OUTPUT_DIR, "cv-asier-medina.pdf"))
    generate_pdf(HTML_EN, os.path.join(OUTPUT_DIR, "cv-europeo-asier-medina.pdf"))
    print("¡CVs generados correctamente!")

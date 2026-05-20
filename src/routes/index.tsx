import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Github, Linkedin, MapPin, ExternalLink, Database, Cloud, Code2, Workflow, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const skills = {
  "Languages": ["Python", "Java", "SQL", "PL/SQL", "Bash"],
  "Big Data": ["Apache Spark", "PySpark", "Hadoop", "Spark JDBC", "Kafka"],
  "Cloud (AWS)": ["S3", "Glue", "Lambda"],
  "Data Storage": ["MongoDB", "MySQL", "SQL Server", "Apache Iceberg", "MinIO", "Parquet"],
  "Data Engineering": ["ETL/ELT", "Data Modelling", "Data Quality", "Governance"],
  "Web & API": ["FastAPI", "REST APIs", "HTML"],
  "DevOps & Tools": ["Git", "Docker", "CLI Automation", "Agile"],
};

const projects = [
  {
    name: "Muspell ETL",
    tag: "Cloud-Native Healthcare Pipeline",
    link: "https://github.com/Sharu2172/Sharu2172",
    stack: ["Python", "PySpark", "SQL Server", "FHIR", "Iceberg", "MinIO"],
    description:
      "Production-grade healthcare data processing pipeline for Pennstate Health. Extracted and transformed large-scale datasets into FHIR-compliant formats stored in data lake infrastructure — improving interoperability, data quality, and analytics readiness.",
    icon: Workflow
  },
  {
    name: "Price Transparency Platform",
    tag: "Healthcare Cost Aggregation",
    link: "",
    stack: ["Python", "SQL", "FastAPI", "Healthcare Data"],
    description:
      "Led development of a hospital price transparency aggregation platform with a FastAPI web app for cost comparison. Enabled consumers to identify cost-effective treatment options while ensuring compliance with US healthcare price transparency regulations.",
    icon: Database,
  },
];

function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-sm tracking-tight">
            <span className="text-primary">d.</span>sharath
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#experience" className="transition-colors hover:text-foreground">Experience</a>
            <a href="#projects" className="transition-colors hover:text-foreground">Projects</a>
            <a href="#skills" className="transition-colors hover:text-foreground">Skills</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_70%)]" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-24 pt-24 md:pt-32">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Available for immediate start
          </div>

          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            D. Sharath
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Data Engineer specialising in <span className="text-foreground">PySpark ETL pipelines</span>,{" "}
            <span className="text-foreground">big data processing</span>, and{" "}
            <span className="text-foreground">FHIR-compliant healthcare data systems</span>.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              View projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://github.com/Sharu2172"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-2.5 text-sm transition-colors hover:border-foreground/40"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/d-sharath-a6289b152"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-2.5 text-sm transition-colors hover:border-foreground/40"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>

          {/* Stat strip */}
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {[
              { v: "3.5+", l: "Years experience" },
              { v: "35%", l: "Pipeline perf. gain" },
              { v: "FHIR", l: "Healthcare compliance" },
              { v: "PB-scale", l: "Data processed" },
            ].map((s) => (
              <div key={s.l} className="bg-card px-6 py-6">
                <div className="text-2xl font-semibold tracking-tight md:text-3xl">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[200px_1fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</div>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Results-driven Data Engineer with <span className="text-foreground">3.5+ years</span> of experience
              building scalable ETL pipelines, big data processing frameworks, and cloud-based data solutions.
            </p>
            <p>
              I work primarily with <span className="text-foreground">Python, PySpark, SQL, and Apache Spark</span>,
              transforming large-scale datasets into analytics-ready formats and ensuring FHIR-compliant healthcare data
              standards across distributed environments.
            </p>
            <p>
              Currently open to data engineering opportunities across India's healthcare technology, fintech, and
              data-driven sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-border/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[200px_1fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Experience</div>
          </div>
          <div>
            <article className="rounded-2xl border border-border bg-card/40 p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">Software Engineer — Data Engineering</h3>
                <span className="text-sm text-muted-foreground">Aug 2022 — April 2026</span>
              </div>
              <div className="mt-1 text-sm text-primary">314e Corporation · Bengaluru, India</div>

              <ul className="mt-6 space-y-4 text-muted-foreground">
                {[
                  "Designed and implemented scalable PySpark ETL pipelines and CLI-based automation tools, processing large healthcare datasets into Apache Iceberg tables with optimised memory utilisation and fault tolerance.",
                  "Optimised distributed data processing jobs using Spark partitioning and caching strategies — enhancing performance and memory efficiency in high-volume environments by up to 35%.",
                  "Crafted complex SQL queries and transformation logic to convert raw data into structured, analytics-ready formats supporting BI and reporting workflows.",
                  "Developed FHIR-compliant data transformation workflows ensuring healthcare data interoperability, quality, and adherence to international data standards for enterprise clients.",
                  "Collaborated cross-functionally with engineering and analytics teams to support dashboards, reporting, and data-driven decisions across multiple healthcare projects.",
                ].map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-border/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[200px_1fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Projects</div>
          </div>
          <div className="grid gap-6">
            {projects.map((p) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.name}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-8 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl border border-border bg-background p-3">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{p.name}</h3>
                        <div className="text-sm text-muted-foreground">{p.tag}</div>
                      </div>
                    </div>
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${p.name} project`}
                        className="rounded-full p-1 text-muted-foreground opacity-0 transition hover:text-primary group-hover:opacity-100"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    ) : null}
                  </div>
                  <p className="mt-5 leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-border/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[200px_1fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Skills</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="rounded-2xl border border-border bg-card/40 p-6">
                <div className="flex items-center gap-2 text-sm font-medium">
                  {group === "Cloud (AWS)" ? <Cloud className="h-4 w-4 text-primary" /> : <Code2 className="h-4 w-4 text-primary" />}
                  {group}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-border/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[200px_1fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Education</div>
          </div>
          <div className="rounded-2xl border border-border bg-card/40 p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">B.Tech, Computer Science</h3>
              <span className="text-sm text-muted-foreground">2018 — 2022</span>
            </div>
            <div className="mt-1 text-sm text-primary">Visvesvaraya Technological University (VTU), Karnataka</div>
            <div className="mt-6 grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
              <div>
                <div className="text-xs uppercase tracking-wider text-foreground/70">Languages</div>
                <div className="mt-1">English · Hindi · Telugu · Tamil</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-foreground/70">Strengths</div>
                <div className="mt-1">Problem-solving · Analytical thinking · Cross-functional collaboration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-28 text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</div>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            Let's build something with data.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Open to data engineering roles across India. Drop a line — I respond within a day.
          </p>

          <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:dsharath217@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <Mail className="h-4 w-4" /> dsharath217@gmail.com
            </a>
            <a
              href="tel:+919740189502"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm transition-colors hover:border-foreground/40"
            >
              <Phone className="h-4 w-4" /> +91 97401 89502
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> Bengaluru, India
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} D. Sharath. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="https://github.com/Sharu2172" target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
            <a href="https://linkedin.com/in/d-sharath-a6289b152" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
            <a href="mailto:dsharath217@gmail.com" className="hover:text-foreground">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

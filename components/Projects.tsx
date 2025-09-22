"use client";

import Image from "next/image";

type Metric = { label: string };
type Project = {
  title: string;
  subtitle: string;
  image: string;
  metrics: Metric[];
  href?: string;
  imageZoom?: number;
  imagePosition?: string;
  imageOffsetX?: number;
  imageOffsetY?: number;
};

const projects: Project[] = [
  {
    title: "Hydrox",
    subtitle: "52% increase in customers",
    image: "/google-business-profile-report.png",
    metrics: [
      { label: "90% increase in CTR" },
      { label: "78% decline in bounce rate" }
    ],
    imageZoom: 1.1,
    imagePosition: "object-bottom"
  },
  {
    title: "Ganache",
    subtitle: "From 100 too 500 sales per month",
    image: "/ahrefs-site-strenght-report.JPG",
    metrics: [
      { label: "84% increase in CTR" },
      { label: "50% decrease in CAC" }
    ],
    imageZoom: 1.1,
    imagePosition: "object-top",
    imageOffsetY: -60
  },
  {
    title: "Glow Terra",
    subtitle: "52% increase in customers",
    image: "/ccb-web-compettitor-analysis.png",
    metrics: [
      { label: "90% increase in CTR" },
      { label: "78% decline in bounce rate" }
    ],
    imageZoom: 1.1,
    imagePosition: "object-left"
  },
  {
    title: "Colish",
    subtitle: "46% increase in online sales",
    image: "/ccb-map-rank.png",
    metrics: [
      { label: "90% increase in CTR" },
      { label: "78% decline in bounce rate" }
    ],
    imageZoom: 1,
    imagePosition: "object-center"
  },
];

function ProjectCard({ project, tall, aspect }: { project: Project; tall?: boolean; aspect?: string }) {
  return (
    <div className={"relative"}>
      {/* White underlay - slightly larger than the card */}
      <div className="absolute inset-0 bg-white rounded-2xl scale-[1.02] shadow-[0_8px_20px_-8px_rgba(0,0,0,0.15)]"></div>
      
      {/* Main card container */}
      <div className="relative rounded-2xl bg-white">
        <a
          href={project.href || "#"}
          className={
            `group relative block scale-[0.96] origin-center ${aspect ? aspect : (tall ? 'aspect-[16/11] md:aspect-[16/17]' : 'aspect-[16/11]')}`
          }
        >
          <div
            className={
              "absolute left-1/2 top-1/2 h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border-2 border-white ring-1 ring-black/5 bg-neutral-900 shadow-[0_18px_30px_-12px_rgba(0,0,0,0.35),0_10px_18px_rgba(0,0,0,0.18)] hover:shadow-[0_26px_44px_-14px_rgba(0,0,0,0.4),0_14px_24px_rgba(0,0,0,0.2)] transition-shadow duration-300"
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className={`absolute inset-0 h-full w-full object-cover ${project.imagePosition || 'object-center'}`}
              style={{
                transform: `scale(${project.imageZoom || 1}) translate(${project.imageOffsetX || 0}px, ${project.imageOffsetY || 0}px)`,
                transformOrigin: 'center'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
              <h3 className="text-white text-lg sm:text-2xl font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] leading-tight">
                {project.title}
              </h3>
              <p className="text-white/85 text-xs sm:text-sm mt-1 leading-tight">
                {project.subtitle}
              </p>

              <div className="mt-2 sm:mt-4 flex flex-wrap gap-2 sm:gap-3">
                {project.metrics.map((m, i) => (
                  <span
                    key={i}
                    className="text-[8px] sm:text-[10px] tracking-wide uppercase rounded-full border border-white/25 bg-white/10 text-white/90 px-2 py-0.5 sm:px-3 sm:py-1 backdrop-blur-sm shadow-[0_8px_20px_rgba(0,0,0,0.25)]"
                  >
                    {m.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-wide text-neutral-400">projects</p>
            <h2 className="text-[44px] leading-[46px] font-medium text-[rgb(110,110,110)]" style={{fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif'}}>Proven results</h2>
            <h3 className="text-[44px] leading-[46px] font-medium text-[rgb(28,28,28)]" style={{fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif'}}>Global impact</h3>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[18px] leading-[29px] font-normal text-[rgb(110,110,110)] max-w-sm" style={{fontFamily: '"Open Runde", "Open Runde Placeholder", sans-serif'}}>Helping service-based businesses attract, convert, and grow on autopilot.</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2 md:gap-x-3 md:gap-y-3">
          <ProjectCard project={projects[0]} />
          <div className="md:row-span-2">
            <ProjectCard project={projects[1]} tall />
          </div>
          {/* Glow Terra: slightly shorter card to remove letterboxing */}
          <ProjectCard project={projects[2]} aspect="aspect-[16/7] md:aspect-[16/7]" />
          {/* Colish: even shorter wide banner ratio to match image */}
          <div className="md:col-span-2 -mt-3 md:-mt-6">
            <ProjectCard project={projects[3]} aspect="aspect-[16/7] md:aspect-[16/7]" />
          </div>
        </div>
      </div>
    </section>
  );
}



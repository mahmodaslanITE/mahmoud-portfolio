import { useState } from "react";
import { SectionTitle } from "./About";
import { projects } from "../data/projects";
import { ExternalLinkIcon, GithubIcon } from "./Icons";

const categories = [
  { key: "all", label: "الكل" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "frontend", label: "Frontend" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="مشاريعي" />

        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
          مجموعة من المشاريع الحقيقية التي بنيتها من الصفر - من الفكرة إلى النشر.
        </p>

        <div className="flex justify-center gap-2 mt-8 flex-wrap">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`px-4 py-2 text-sm rounded-lg transition ${
                filter === c.key
                  ? "bg-emerald-500 text-white"
                  : "bg-gray-900 border border-gray-800 text-gray-400 hover:border-emerald-500/50"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {filtered.map((project, i) => (
            <article
              key={project.title}
              className="group bg-gray-900 border border-gray-800 hover:border-emerald-500/50 hover:-translate-y-1.5 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-emerald-500/10 to-blue-500/10 relative overflow-hidden flex items-center justify-center">
                <span className="text-6xl font-bold text-emerald-400/30 group-hover:scale-110 transition-transform duration-500">
                  {project.title.charAt(0)}
                </span>

                {project.featured && (
                  <span className="absolute top-3 right-3 text-xs px-2 py-1 bg-emerald-500 text-white rounded-full">
                    مميز
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                {project.challenge && (
                  <div className="text-xs text-emerald-400/90 mb-4 p-2 bg-emerald-500/5 border-r-2 border-emerald-500 rounded">
                    <span className="font-medium">التحدي:</span>{" "}
                    {project.challenge}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, ti) => (
                    <span
                      key={ti}
                      className="text-xs px-2.5 py-1 bg-gray-800 text-gray-300 rounded-md border border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-800">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 text-sm py-2 px-3 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-lg transition"
                    >
                      <ExternalLinkIcon size={15} /> معاينة
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 text-sm py-2 px-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition"
                    >
                      <GithubIcon size={15} /> الكود
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
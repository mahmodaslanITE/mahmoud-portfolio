import { SectionTitle } from "./About";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-950/50">
      <div className="max-w-3xl mx-auto">
        <SectionTitle title="الخبرات" />

        <div className="relative mt-12 pr-8 border-r-2 border-emerald-500/30">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative mb-10 last:mb-0 animate-fade-left"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="absolute -right-[41px] top-2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-gray-950" />

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <span className="text-sm text-emerald-400 font-mono">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
                <p className="text-gray-500 text-sm">{exp.company}</p>
                <p className="text-gray-400 mt-3 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {exp.tech.map((t, ti) => (
                    <span
                      key={ti}
                      className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
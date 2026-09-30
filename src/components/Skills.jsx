import { SectionTitle } from "./About";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-950/50">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="المهارات التقنية" />

        <div className="space-y-12 mt-12">
          {skillGroups.map((group, gi) => (
            <div key={gi} className="animate-fade-up">
              <h3 className="text-xl font-semibold text-emerald-400 mb-6 text-center">
                {group.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {group.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="p-5 bg-gray-900 border border-gray-800 hover:border-emerald-500/50 hover:-translate-y-1 rounded-xl flex flex-col items-center gap-3 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-emerald-400 font-bold text-lg">
                        {skill.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm text-gray-300 text-center">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
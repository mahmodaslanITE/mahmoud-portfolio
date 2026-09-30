export default function About() {
    return (
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle title="نبذة عني" />
  
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="animate-fade-right">
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center">
                <span className="text-7xl font-bold text-emerald-400">MA</span>
              </div>
            </div>
  
            <div className="space-y-4 text-gray-300 leading-relaxed animate-fade-left">
              <p>
                مهندس برمجيات متخصص في تطوير تطبيقات الويب المتكاملة (Full-Stack).
                أبني واجهات تفاعلية باستخدام{" "}
                <span className="text-emerald-400">React.js</span> و
                <span className="text-emerald-400"> Tailwind CSS</span>،
                وأطوّر خدمات خلفية قوية بـ{" "}
                <span className="text-emerald-400">Express.js</span>.
              </p>
              <p>
                أمتلك خبرة في تصميم وإدارة قواعد البيانات، وبناء REST APIs آمنة
                وقابلة للتوسع. أركّز دائماً على كتابة كود نظيف، أداء عالٍ،
                وتجربة مستخدم سلسة.
              </p>
              <p>
                شغوف بتعلّم التقنيات الجديدة وتحويل الأفكار إلى منتجات حقيقية.
              </p>
  
              <div className="grid grid-cols-3 gap-4 pt-6">
                <Stat number="+2" label="سنوات خبرة" />
                <Stat number="+4" label="مشاريع" />
                <Stat number="+10" label="تقنيات" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  function Stat({ number, label }) {
    return (
      <div className="text-center">
        <div className="text-3xl font-bold text-emerald-400">{number}</div>
        <div className="text-sm text-gray-500 mt-1">{label}</div>
      </div>
    );
  }
  
  export function SectionTitle({ title }) {
    return (
      <div className="text-center animate-fade-up">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
      </div>
    );
  }
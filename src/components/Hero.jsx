import { GithubIcon, LinkedinIcon, MailIcon, ArrowDownIcon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-emerald-400 font-mono mb-4 animate-fade-up">
          &lt;مرحباً، أنا /&gt;
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up delay-100">
          محمود أحمد الأصلان
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-400 mb-8 animate-fade-up delay-200">
          مهندس برمجيات | Full-Stack Developer
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-300">
          أبني تطبيقات ويب متكاملة باستخدام React.js وExpress.js، مع تركيز على
          الأداء، الكود النظيف، وتجربة مستخدم استثنائية.
        </p>

        <div className="flex gap-4 justify-center flex-wrap animate-fade-up delay-400">
          <a
            href="#projects"
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-medium transition"
          >
            شاهد مشاريعي
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-700 hover:border-emerald-500 rounded-lg font-medium transition"
          >
            تواصل معي
          </a>
        </div>

        <div className="flex gap-5 justify-center mt-10 animate-fade-up delay-500">
          <a
            href="https://github.com/mahmoodasanITE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition"
            aria-label="GitHub"
          >
            <GithubIcon size={24} />
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-emerald-400 transition"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={24} />
          </a>
          <a
            href="mailto:you@email.com"
            className="text-gray-400 hover:text-emerald-400 transition"
            aria-label="Email"
          >
            <MailIcon size={24} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce-down"
        aria-label="Scroll down"
      >
        <ArrowDownIcon />
      </a>
    </section>
  );
}
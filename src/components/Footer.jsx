export default function Footer() {
    return (
      <footer className="py-8 px-6 border-t border-gray-800 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} محمود أحمد الأصلان - بُني بـ{" "}
          <span className="text-emerald-400">React</span> و
          <span className="text-emerald-400"> Tailwind CSS</span>
        </p>
      </footer>
    );
  }
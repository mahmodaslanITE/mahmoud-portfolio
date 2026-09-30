import { useState } from "react";
import { SectionTitle } from "./About";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  SendIcon,
  GithubIcon,
  LinkedinIcon,
} from "./Icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-950/50">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="تواصل معي" />

        <p className="text-center text-gray-400 mt-6 max-w-xl mx-auto">
          عندك مشروع؟ فكرة؟ أو تبحث عن مطور لفريقك؟ أنا متاح - راسلني.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-4 animate-fade-right">
            <ContactItem
              icon={<MailIcon size={20} />}
              label="البريد"
              value="you@email.com"
              href="mailto:you@email.com"
            />
            <ContactItem
              icon={<PhoneIcon size={20} />}
              label="الهاتف"
              value="+xxx xxx xxx"
              href="tel:+xxx"
            />
            <ContactItem
              icon={<MapPinIcon size={20} />}
              label="الموقع"
              value="سوريا"
            />
            <div className="flex gap-3 pt-4">
              <a
                href="https://github.com/mahmoodasanITE"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gray-900 border border-gray-800 hover:border-emerald-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-emerald-400 transition"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gray-900 border border-gray-800 hover:border-emerald-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-emerald-400 transition"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 animate-fade-left"
          >
            <input
              type="text"
              placeholder="اسمك"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 focus:border-emerald-500 rounded-lg outline-none transition text-white"
            />
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 focus:border-emerald-500 rounded-lg outline-none transition text-white"
            />
            <textarea
              placeholder="رسالتك"
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 focus:border-emerald-500 rounded-lg outline-none transition resize-none text-white"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 rounded-lg font-medium transition flex items-center justify-center gap-2 text-white"
            >
              {status === "sending" ? (
                "جاري الإرسال..."
              ) : status === "sent" ? (
                "تم الإرسال"
              ) : (
                <>
                  <SendIcon size={18} /> إرسال
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 hover:border-emerald-500/50 rounded-xl transition">
      <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400">
        {icon}
      </div>
      <div>
        <div className="text-xs text-gray-500">{label}</div>
        <div className="text-gray-200">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
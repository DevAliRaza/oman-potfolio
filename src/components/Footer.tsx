export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Oman Khalid Butt. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="mailto:omanbutt44@gmail.com" className="hover:text-white transition-colors">Email</a>
          <a href="#" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

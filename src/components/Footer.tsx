export default function Footer() {
  return (
    <footer className="border-t border-accent/10 py-8 relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
        <p>&copy; {new Date().getFullYear()} Oman Khalid Butt</p>
        <div className="flex items-center gap-6">
          <a href="https://wa.me/923026802896" className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="mailto:omanbutt44@gmail.com" className="hover:text-accent transition-colors">Email</a>
          <a href="https://www.linkedin.com/in/oman-khalid-butt/" className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/MagnusXd1" className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

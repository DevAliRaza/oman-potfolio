export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
        <p>&copy; {new Date().getFullYear()} Oman Khalid Butt</p>
        <div className="flex items-center gap-6">
          <a href="mailto:omanbutt44@gmail.com" className="hover:text-text transition-colors">Email</a>
          <a href="https://www.linkedin.com/in/oman-khalid-butt/" className="hover:text-text transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

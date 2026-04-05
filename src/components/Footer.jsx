export default function Footer() {
  return (
    <footer className="pt-24 pb-10 px-6">
      <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-4 text-sm font-light text-[#2C2C2C]/60">
        <span>&copy; 2026 Tella Ceramics</span>
        <a
          href="https://www.instagram.com/tellaceramics"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-60 transition-opacity"
          aria-label="Instagram"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

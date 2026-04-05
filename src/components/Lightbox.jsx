import { useEffect } from "react";

export default function Lightbox({ piece, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const statusLabel =
    piece.status === "available"
      ? "Currently available"
      : piece.status === "sold"
        ? "Sold"
        : "Inquire for availability";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2C2C2C]/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF7F2] max-w-5xl w-full max-h-[90vh] overflow-y-auto flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="lg:w-1/2 shrink-0">
          <img
            src={piece.imageLarge}
            alt={piece.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#2C2C2C]/40 hover:text-[#2C2C2C] transition-colors text-2xl leading-none cursor-pointer"
            aria-label="Close"
          >
            &times;
          </button>

          <div>
            <h2 className="text-2xl font-light tracking-wide mb-4">
              {piece.name}
            </h2>
            <p className="font-light leading-relaxed text-[#2C2C2C]/80 mb-4">
              {piece.description}
            </p>
            <p className="text-sm font-light text-[#2C2C2C]/60 mb-8">
              {statusLabel}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <a
              href="https://www.instagram.com/tellaceramics"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#2C2C2C] text-[#2C2C2C] px-6 py-3 text-sm tracking-wide text-center hover:bg-[#2C2C2C] hover:text-[#FAF7F2] transition-colors"
            >
              DM on Instagram
            </a>
            <a
              href="#"
              className="border border-[#E0DBD3] text-[#2C2C2C]/60 px-6 py-3 text-sm tracking-wide text-center hover:border-[#2C2C2C] hover:text-[#2C2C2C] transition-colors"
            >
              Pay via PayPal / Venmo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

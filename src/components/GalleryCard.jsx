export default function GalleryCard({ piece, onClick }) {
  return (
    <button
      onClick={() => onClick(piece)}
      className="text-left group cursor-pointer w-full"
    >
      <div className="overflow-hidden">
        <img
          src={piece.image}
          alt={piece.name}
          className="w-full aspect-square object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="mt-3">
        <h3 className="text-sm font-normal">{piece.name}</h3>
        <p className="text-sm font-light text-[#2C2C2C]/60 mt-1">
          {piece.description}
        </p>
      </div>
    </button>
  );
}

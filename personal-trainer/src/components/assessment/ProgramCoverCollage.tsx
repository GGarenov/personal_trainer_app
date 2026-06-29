interface ProgramCover {
  id: string;
  name: string;
  image: string;
}

interface Props {
  covers: ProgramCover[];
  featuredId?: string;
}

export default function ProgramCoverCollage({ covers, featuredId }: Props) {
  const featuredIndex = featuredId
    ? Math.max(
        0,
        covers.findIndex((cover) => cover.id === featuredId),
      )
    : covers.findIndex((cover) => cover.id === "hypertrophy-builder");

  const featured =
    featuredIndex >= 0 ? covers[featuredIndex] : covers[0];
  const sideCovers = covers.filter((_, index) => index !== featuredIndex);

  return (
    <div
      className="relative mx-auto flex h-56 w-full max-w-xl items-center justify-center sm:h-72 md:h-80"
      aria-hidden="true"
    >
      {sideCovers.map((cover, index) => {
        const isLeft = index < Math.floor(sideCovers.length / 2);
        const offset = isLeft
          ? (Math.floor(sideCovers.length / 2) - index) * 28
          : (index - Math.floor(sideCovers.length / 2) + 1) * 28;
        const rotation = isLeft ? -12 - index * 4 : 12 + index * 4;

        return (
          <div
            key={cover.id}
            className="absolute overflow-hidden rounded-md border border-white/10 bg-surface shadow-lg"
            style={{
              width: "7.5rem",
              height: "10rem",
              opacity: 0.45,
              transform: `translateX(${isLeft ? -offset - 72 : offset + 72}px) rotate(${rotation}deg) scale(0.88)`,
              zIndex: 1,
            }}
          >
            <img
              src={cover.image}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        );
      })}

      <div className="relative z-10 w-44 overflow-hidden rounded-lg border border-white/20 bg-surface shadow-2xl sm:w-52 md:w-60">
        <div className="aspect-[3/4]">
          <img
            src={featured.image}
            alt={featured.name}
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
        <p className="bg-black/80 px-3 py-2 text-center font-heading text-xs uppercase tracking-wider text-white sm:text-sm">
          {featured.name}
        </p>
      </div>
    </div>
  );
}

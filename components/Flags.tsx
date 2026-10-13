import type { Language } from "@/lib/translations";

// Bandeiras em SVG (emojis de bandeira não aparecem no Windows)
const BrazilFlag = () => (
  <svg viewBox="0 0 30 20" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
    <rect width="30" height="20" fill="#009c3b" />
    <path d="M15 2.5 27 10 15 17.5 3 10Z" fill="#ffdf00" />
    <circle cx="15" cy="10" r="4.2" fill="#002776" />
    <path d="M10.9 9.2c2.8-.4 5.8.2 8.1 1.6" stroke="#fff" strokeWidth=".8" fill="none" />
  </svg>
);

const USFlag = () => (
  <svg viewBox="0 0 30 20" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
    <rect width="30" height="20" fill="#fff" />
    {[0, 2, 4, 6, 8, 10, 12].map((i) => (
      <rect key={i} y={(i * 20) / 13} width="30" height={20 / 13} fill="#b22234" />
    ))}
    <rect width="13" height={(20 / 13) * 7} fill="#3c3b6e" />
    {[2, 5, 8, 11].flatMap((x) =>
      [2, 5, 8].map((y) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r=".6" fill="#fff" />
      )),
    )}
  </svg>
);

const SpainFlag = () => (
  <svg viewBox="0 0 30 20" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
    <rect width="30" height="20" fill="#aa151b" />
    <rect y="5" width="30" height="10" fill="#f1bf00" />
  </svg>
);

const flags: Record<Language, () => React.ReactElement> = {
  pt: BrazilFlag,
  en: USFlag,
  es: SpainFlag,
};

export const Flag = ({ code }: { code: Language }) => {
  const Icon = flags[code];
  return <Icon />;
};

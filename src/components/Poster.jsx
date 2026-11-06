// City artwork. The 12 original cities use their painted posters; every other city gets
// an art-deco travel poster drawn in SVG from its palette + landmark motif.
import { CITY_IMG } from "../assets/index.js";

const G = 300; // ground line in the 800x351 viewBox

function Motif({ motif, fill, accent }) {
  const f = { fill };
  switch (motif) {
    case "pyramids":
      return (
        <g>
          <polygon points="250,300 390,150 530,300" {...f} />
          <polygon points="390,150 530,300 450,300" fill={accent} opacity=".35" />
          <polygon points="470,300 560,205 650,300" {...f} />
          <polygon points="150,300 215,232 280,300" {...f} />
        </g>
      );
    case "lattice_tower":
      return (
        <g {...f}>
          <path d="M400 70 L408 70 L414 140 L432 210 L470 300 L440 300 Q404 250 368 300 L338 300 L376 210 L394 140 Z" />
          <rect x="370" y="205" width="68" height="8" />
          <rect x="388" y="138" width="32" height="6" />
          <g stroke={accent} strokeWidth="1.5" opacity=".5">
            <path d="M380 215 L430 290 M428 215 L378 290 M396 150 L414 205 M412 150 L396 205" />
          </g>
        </g>
      );
    case "onion_domes":
      return (
        <g {...f}>
          {[[300, 200, 34], [400, 160, 46], [500, 205, 32], [350, 230, 24], [455, 232, 24]].map(([x, y, r], i) => (
            <g key={i}>
              <rect x={x - r * 0.7} y={y + r * 0.6} width={r * 1.4} height={G - y} />
              <path d={`M${x} ${y - r * 1.5} Q${x + r * 1.3} ${y} ${x + r * 0.75} ${y + r * 0.7} L${x - r * 0.75} ${y + r * 0.7} Q${x - r * 1.3} ${y} ${x} ${y - r * 1.5} Z`} />
              <rect x={x - 1.5} y={y - r * 1.5 - 18} width="3" height="18" />
            </g>
          ))}
          <path d="M310 205 Q318 185 300 170" stroke={accent} strokeWidth="3" fill="none" opacity=".5" />
        </g>
      );
    case "pagoda":
      return (
        <g {...f}>
          {[0, 1, 2, 3, 4].map((i) => {
            const y = 285 - i * 36;
            const w = 120 - i * 18;
            return (
              <g key={i}>
                <rect x={400 - w * 0.4} y={y - 22} width={w * 0.8} height="24" />
                <path d={`M${400 - w} ${y - 18} Q${400} ${y - 40} ${400 + w} ${y - 18} L${400 + w * 0.7} ${y - 26} L${400 - w * 0.7} ${y - 26} Z`} fill={accent} />
              </g>
            );
          })}
          <rect x="397" y="90" width="6" height="40" />
        </g>
      );
    case "skyscrapers":
      return (
        <g {...f}>
          {[[180, 200, 50], [235, 150, 40], [280, 110, 46], [330, 175, 38], [375, 60, 44], [425, 135, 40], [470, 95, 50], [525, 170, 36], [565, 130, 44], [615, 210, 50]].map(([x, y, w], i) => (
            <g key={i}>
              <rect x={x} y={y} width={w} height={G - y} />
              {i % 2 === 0 && <polygon points={`${x},${y} ${x + w / 2},${y - 30} ${x + w},${y}`} />}
              {Array.from({ length: Math.floor((G - y) / 18) }).map((_, j) => (
                <rect key={j} x={x + 6} y={y + 8 + j * 18} width={w - 12} height="3" fill={accent} opacity=".35" />
              ))}
            </g>
          ))}
          <rect x="396" y="20" width="2" height="40" />
        </g>
      );
    case "mountains":
      return (
        <g>
          <polygon points="120,300 300,120 480,300" fill={fill} />
          <polygon points="300,120 340,160 320,165 300,150 280,168 262,158" fill={accent} />
          <polygon points="360,300 520,90 700,300" fill={fill} />
          <polygon points="520,90 562,145 540,150 522,135 500,152 485,138" fill={accent} />
        </g>
      );
    case "sails":
      return (
        <g {...f}>
          <rect x="230" y="275" width="360" height="25" />
          {[[260, 300, 120], [330, 360, 160], [420, 450, 140], [500, 530, 100]].map(([x0, x1, h], i) => (
            <path key={i} d={`M${x0} 278 Q${x0 + 10} ${278 - h} ${x1 + 50} ${278 - h * 0.9} Q${x1} ${278 - h * 0.4} ${x1 + 20} 278 Z`} fill={i % 2 ? accent : fill} />
          ))}
        </g>
      );
    case "bridge":
      return (
        <g {...f}>
          <rect x="60" y="245" width="680" height="10" />
          {[250, 550].map((x) => (
            <g key={x}>
              <rect x={x - 12} y="90" width="24" height="210" />
              <rect x={x - 18} y="120" width="36" height="8" />
              <rect x={x - 18} y="180" width="36" height="8" />
            </g>
          ))}
          <path d="M60 240 Q155 225 250 95 Q400 260 550 95 Q645 225 740 240" stroke={fill} strokeWidth="4" fill="none" />
          {Array.from({ length: 22 }).map((_, i) => (
            <rect key={i} x={80 + i * 30} y={i < 11 ? 140 + Math.abs(i - 5) * 18 : 140 + Math.abs(i - 16) * 18} width="1.5" height="110" opacity=".6" />
          ))}
        </g>
      );
    case "minarets":
      return (
        <g {...f}>
          <path d="M310 300 L310 200 Q400 110 490 200 L490 300 Z" />
          <circle cx="400" cy="140" r="6" fill={accent} />
          {[230, 570, 270, 530].map((x, i) => (
            <g key={i}>
              <rect x={x - 8} y={i < 2 ? 90 : 140} width="16" height={i < 2 ? 210 : 160} />
              <polygon points={`${x - 9},${i < 2 ? 92 : 142} ${x},${i < 2 ? 50 : 105} ${x + 9},${i < 2 ? 92 : 142}`} />
              <rect x={x - 12} y={i < 2 ? 150 : 190} width="24" height="5" fill={accent} />
            </g>
          ))}
        </g>
      );
    case "columns":
      return (
        <g {...f}>
          <polygon points="220,140 400,95 580,140" />
          <rect x="215" y="140" width="370" height="14" fill={accent} />
          {Array.from({ length: 8 }).map((_, i) => (
            <rect key={i} x={232 + i * 46} y="156" width="22" height="130" />
          ))}
          <rect x="200" y="285" width="400" height="15" />
        </g>
      );
    case "statue":
      return (
        <g {...f}>
          <polygon points="360,300 370,230 430,230 440,300" />
          <rect x="378" y="190" width="44" height="40" />
          <path d="M386 190 L392 120 Q400 108 408 120 L414 190 Z" />
          <path d="M408 128 L440 62 L448 66 L416 134 Z" />
          <path d="M436 48 Q444 38 452 48 L448 62 L440 62 Z" fill={accent} />
          <path d="M388 112 L392 96 L400 104 L408 96 L412 112 Z" />
        </g>
      );
    case "palms":
      return (
        <g {...f}>
          {[[250, 120], [330, 160], [520, 100], [600, 170]].map(([x, top], i) => (
            <g key={i}>
              <path d={`M${x} 300 Q${x + 15} ${(300 + top) / 2} ${x + 5} ${top} L${x + 12} ${top} Q${x + 24} ${(300 + top) / 2} ${x + 10} 300 Z`} />
              {[-60, -25, 15, 50, 85].map((a, j) => (
                <path key={j} d={`M${x + 8} ${top} q${Math.cos((a * Math.PI) / 180) * 40} ${-20 + Math.abs(a) * 0.3} ${Math.cos((a * Math.PI) / 180) * 70} ${15 + Math.abs(a) * 0.35}`} stroke={fill} strokeWidth="9" fill="none" strokeLinecap="round" />
              ))}
            </g>
          ))}
          <ellipse cx="400" cy="300" rx="300" ry="12" fill={accent} opacity=".4" />
        </g>
      );
    case "castle":
      return (
        <g {...f}>
          <path d="M200 300 Q300 240 400 235 Q500 240 600 300 Z" opacity=".8" />
          <rect x="300" y="160" width="200" height="90" />
          {[280, 470].map((x) => (
            <g key={x}>
              <rect x={x} y="120" width="50" height="130" />
              <polygon points={`${x - 6},122 ${x + 25},70 ${x + 56},122`} fill={accent} />
            </g>
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <rect key={i} x={305 + i * 24} y="150" width="12" height="12" />
          ))}
          <rect x="385" y="205" width="30" height="45" fill={accent} opacity=".5" />
        </g>
      );
    case "windmill":
      return (
        <g {...f}>
          <polygon points="370,300 380,170 420,170 430,300" />
          <polygon points="372,172 400,140 428,172" fill={accent} />
          <g transform="translate(400 160)">
            {[20, 110, 200, 290].map((a) => (
              <g key={a} transform={`rotate(${a})`}>
                <rect x="-3" y="-120" width="6" height="120" />
                <rect x="3" y="-115" width="22" height="90" opacity=".75" />
              </g>
            ))}
          </g>
          <path d="M100 300 Q250 270 400 300" fill="none" stroke={accent} strokeWidth="4" opacity=".5" />
        </g>
      );
    case "clocktower":
      return (
        <g {...f}>
          <rect x="150" y="215" width="460" height="85" />
          {Array.from({ length: 14 }).map((_, i) => (
            <rect key={i} x={160 + i * 32} y="200" width="8" height="18" />
          ))}
          <rect x="560" y="100" width="50" height="200" />
          <rect x="372" y="95" width="56" height="205" />
          <circle cx="400" cy="125" r="18" fill={accent} />
          <path d="M400 125 L400 113 M400 125 L409 129" stroke={fill} strokeWidth="2.5" />
          <polygon points="368,97 400,30 432,97" />
          <rect x="398" y="14" width="4" height="18" />
        </g>
      );
    case "stupa":
      return (
        <g {...f}>
          <ellipse cx="400" cy="275" rx="170" ry="16" />
          <path d="M260 275 Q260 180 400 180 Q540 180 540 275 Z" />
          <rect x="370" y="140" width="60" height="42" fill={accent} />
          <path d="M378 158 q8 -6 16 0 M406 158 q8 -6 16 0" stroke={fill} strokeWidth="3" fill="none" />
          <polygon points="378,140 400,55 422,140" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={384 + i * 1.5} y={128 - i * 13} width={32 - i * 3} height="4" fill={accent} opacity=".6" />
          ))}
          <path d="M400 60 L250 230 M400 60 L550 230" stroke={accent} strokeWidth="1.5" strokeDasharray="4 6" opacity=".8" />
        </g>
      );
    case "arch":
      return (
        <g {...f}>
          <path d="M180 300 L180 130 Q400 100 620 130 L620 300 L560 300 L560 200 Q560 150 500 150 Q470 150 470 200 L470 300 L330 300 L330 200 Q330 150 300 150 Q240 150 240 200 L240 300 Z" />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={340 + i * 34} y="190" width="22" height="34" rx="11" fill={accent} opacity=".45" />
          ))}
          <rect x="180" y="120" width="440" height="10" fill={accent} opacity=".6" />
        </g>
      );
    case "volcano":
      return (
        <g>
          <path d="M120 300 L330 120 L360 135 L400 118 L470 120 L680 300 Z" fill={fill} />
          <path d="M340 125 Q330 70 380 40 Q420 20 470 50 Q430 60 420 110 Z" fill={accent} opacity=".55" />
          <path d="M360 135 L380 180 L395 150 L410 200 L430 140" stroke={accent} strokeWidth="5" fill="none" />
        </g>
      );
    case "harbor":
    default:
      return (
        <g {...f}>
          <path d="M150 250 L650 250 L620 285 L180 285 Z" />
          <rect x="230" y="200" width="200" height="50" />
          <rect x="300" y="160" width="26" height="40" />
          <rect x="350" y="170" width="26" height="30" />
          <rect x="500" y="110" width="8" height="140" />
          <polygon points="508,115 590,240 508,240" fill={accent} opacity=".7" />
          <rect x="660" y="120" width="22" height="130" />
          <polygon points="656,122 671,92 686,122" fill={accent} />
        </g>
      );
  }
}

export function DecoPoster({ city, className = "" }) {
  const p = city.poster || { sky: ["#1d2532", "#7a5d33"], sun: "#d4ad6b", ground: "#1a1410", accent: "#c1272d", motif: "harbor" };
  const id = `p-${city.id}`;
  return (
    <svg viewBox="0 0 800 351" className={className} preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${city.name} poster`}>
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.sky[0]} />
          <stop offset="1" stopColor={p.sky[1]} />
        </linearGradient>
        <radialGradient id={`${id}-sun`}>
          <stop offset=".55" stopColor={p.sun} />
          <stop offset="1" stopColor={p.sun} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="351" fill={`url(#${id}-sky)`} />
      <g opacity=".22" stroke={p.sun} strokeWidth="10">
        {Array.from({ length: 13 }).map((_, i) => {
          const a = Math.PI + (i * Math.PI) / 12;
          return <line key={i} x1="560" y1="190" x2={560 + Math.cos(a) * 700} y2={190 + Math.sin(a) * 700} />;
        })}
      </g>
      <circle cx="560" cy="190" r="110" fill={`url(#${id}-sun)`} />
      <path d="M0 270 Q200 230 400 262 T800 250 L800 351 L0 351 Z" fill={p.ground} opacity=".45" />
      <Motif motif={p.motif} fill={p.ground} accent={p.accent} />
      <rect y={G} width="800" height="51" fill={p.ground} />
      <g opacity=".25" fill={p.accent}>
        {Array.from({ length: 9 }).map((_, i) => (
          <rect key={i} x={-20 + i * 100} y={G + 18} width="60" height="3" />
        ))}
      </g>
      <rect x="8" y="8" width="784" height="335" fill="none" stroke={p.sun} strokeOpacity=".5" strokeWidth="2" />
    </svg>
  );
}

export default function Poster({ city, className = "" }) {
  const img = CITY_IMG[city.id];
  if (img) return <img src={img} alt={city.name} className={`object-cover ${className}`} />;
  return <DecoPoster city={city} className={className} />;
}

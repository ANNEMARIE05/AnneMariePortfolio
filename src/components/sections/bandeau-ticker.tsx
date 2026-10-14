import { PHRASES_BANDEAU } from "@/data/ticker";

export function BandeauTicker() {
  const sequence = [...PHRASES_BANDEAU, ...PHRASES_BANDEAU];

  return (
    <div className="ticker-statement-band" aria-hidden="true">
      <div className="ticker-track">
        {sequence.map((phrase, index) => (
          <span key={`${phrase}-${index}`}>
            {phrase}
            <span className="ticker-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

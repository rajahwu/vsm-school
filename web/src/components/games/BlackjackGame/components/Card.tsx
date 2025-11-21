import type { Card } from '../logic/deck';

export default function CardComp({ card }: { card: Card }) {
  const symbol = { hearts: '♥', diamonds: '♦', clubs: '♣', spades: '♠' }[card.suit];
  return (
    <div className="border p-2 m-1 rounded bg-white text-black">
      <span>{card.value}</span>{symbol}
    </div>
  );
}

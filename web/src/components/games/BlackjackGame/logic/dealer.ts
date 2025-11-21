import type { Card } from './deck';
import { calculateHandValue } from './hand-calculator';

export function playDealer(hand: Card[], deck: Card[]): Card[] {
  const dealerHand = [...hand];
  const remainingDeck = [...deck];

  while (calculateHandValue(dealerHand) < 17 && remainingDeck.length > 0) {
    dealerHand.push(remainingDeck.pop()!);
  }

  return dealerHand;
}

import { useState } from 'react';
import { createDeck, shuffle } from '../logic/deck';
import type { Card } from '../logic/deck';
import { calculateHandValue } from '../logic/hand-calculator';
import { playDealer } from '../logic/dealer';

type GameMessage = string;

export default function useGame() {
  const [deck, setDeck] = useState<Card[]>([]);
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [dealerHand, setDealerHand] = useState<Card[]>([]);
  const [message, setMessage] = useState<GameMessage>('');

  const startGame = (): void => {
    const newDeck = shuffle(createDeck());
    const player = [newDeck.pop()!, newDeck.pop()!];
    const dealer = [newDeck.pop()!, newDeck.pop()!];
    setDeck(newDeck);
    setPlayerHand(player);
    setDealerHand(dealer);
    setMessage('');
  };

  const hit = (): void => {
    if (!deck.length) return;
    const newDeck = [...deck];
    const newHand = [...playerHand, newDeck.pop()!];
    setPlayerHand(newHand);
    setDeck(newDeck);
    if (calculateHandValue(newHand) > 21) setMessage('You busted!');
  };

  const stand = (): void => {
    const dealerFinal = playDealer([...dealerHand], [...deck]);
    const playerValue = calculateHandValue(playerHand);
    const dealerValue = calculateHandValue(dealerFinal);
    setDealerHand(dealerFinal);

    if (dealerValue > 21 || playerValue > dealerValue) setMessage('You win!');
    else if (dealerValue > playerValue) setMessage('Dealer wins.');
    else setMessage('Push.');
  };

  return { playerHand, dealerHand, message, hit, stand, startGame };
}

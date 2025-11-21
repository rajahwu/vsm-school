import { useEffect } from 'react';
import useGame from './hooks/useGame';
import { Controls, Hand, Message } from './components';
import type { GameProps, GameState } from '../shared/types';

export function BlackjackGame({
  onStateChange,
  showDebugInfo = false,
  isPaused = false,
  onReset,
}: GameProps) {
  const {
    playerHand,
    dealerHand,
    message,
    hit,
    stand,
    startGame
  } = useGame();

  // Expose game state for lessons
  const gameState: GameState = {
    playerHand,
    dealerHand,
    message,
    phase: message.includes('Win') || message.includes('Lose') ? 'ended' : 'playing',
  };

  // Notify parent of state changes
  useEffect(() => {
    onStateChange?.(gameState);
  }, [playerHand, dealerHand, message, onStateChange]);

  // Handle reset from parent
  const handleReset = () => {
    startGame();
    onReset?.();
  };

  return (
    <div className="blackjack-game bg-green-700 text-white rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Blackjack Trainer</h2>
      
      <Hand cards={dealerHand} label="Dealer Hand" />
      <Hand cards={playerHand} label="Player Hand" />
      
      <Controls 
        onHit={!isPaused ? hit : () => {}} 
        onStand={!isPaused ? stand : () => {}} 
        onNew={handleReset} 
      />
      
      <Message message={message} />

      {showDebugInfo && (
        <div className="mt-4 p-4 bg-black bg-opacity-50 rounded">
          <h3 className="font-semibold mb-2">Debug State:</h3>
          <pre className="text-xs">{JSON.stringify(gameState, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

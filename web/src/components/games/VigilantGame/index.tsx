import { useEffect } from 'react';
import VigilantGameComponent from './Game';
import './Game.css';
import type { GameProps, GameState } from '../shared/types';

export function VigilantGame({
  onStateChange,
  showDebugInfo = false,
}: GameProps) {
  const gameState: GameState = {
    phase: 'playing',
  };

  // Notify parent of state changes
  useEffect(() => {
    onStateChange?.(gameState);
  }, [gameState, onStateChange]);

  return (
    <div className="vigilant-game-wrapper">
      <VigilantGameComponent />

      {showDebugInfo && (
        <div className="mt-4 p-4 bg-black bg-opacity-75 rounded text-white">
          <h3 className="font-semibold mb-2">Debug State:</h3>
          <pre className="text-xs">{JSON.stringify(gameState, null, 2)}</pre>
          <p className="text-yellow-300 text-sm mt-2">
            Note: Full state extraction coming in next iteration
          </p>
        </div>
      )}
    </div>
  );
}

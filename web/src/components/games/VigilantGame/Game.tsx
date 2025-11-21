import { useState } from 'react';
import { Sparkles, Lock, Zap, Skull } from 'lucide-react';

const GRID_SIZE = 10;
const FLUENCY_THRESHOLD = 5;
const DICE_COUNT = 3;
const DICE_SUCCESS = 4;

const TileState = {
  EMPTY: 'empty',
  LOCKED: 'locked',
  UNLOCKED: 'unlocked',
  MASTERED: 'mastered',
  DECAYING: 'decaying'
} as const;

const CardType = {
  FLUENCY_TRIAL: 'fluency_trial',
  SHADOW_EVENT: 'shadow_event'
} as const;

const GameMode = {
  DICE: 'dice',
  BATTLE: 'battle',
  HYBRID: 'hybrid'
} as const;

type TileStateType = typeof TileState[keyof typeof TileState];
type GameModeType = typeof GameMode[keyof typeof GameMode];

interface Tile {
  state: TileStateType;
  fluency: number;
  name: string;
  threshold: number;
}

interface Card {
  id: number;
  type: string;
  name: string;
}

interface ModeChoice {
  row: number;
  col: number;
}

const initializeGrid = (): Tile[][] => {
  const grid: Tile[][] = Array(GRID_SIZE).fill(null).map(() =>
    Array(GRID_SIZE).fill(null).map(() => ({
      state: TileState.EMPTY,
      fluency: 0,
      name: '',
      threshold: FLUENCY_THRESHOLD
    }))
  );

  const unlockedPositions = [
    [1, 1], [1, 3], [2, 5], [3, 2], [4, 7],
    [5, 4], [6, 1], [7, 6], [8, 3], [9, 8]
  ];

  unlockedPositions.forEach(([r, c], i) => {
    grid[r][c] = {
      state: TileState.UNLOCKED,
      fluency: 0,
      name: `Domain ${i + 1}`,
      threshold: FLUENCY_THRESHOLD
    };
  });

  const lockedPositions = [
    [2, 2], [4, 4], [6, 6], [5, 8], [8, 5]
  ];

  lockedPositions.forEach(([r, c], i) => {
    grid[r][c] = {
      state: TileState.LOCKED,
      fluency: 0,
      name: `Advanced ${i + 1}`,
      threshold: FLUENCY_THRESHOLD
    };
  });

  return grid;
};

const VigilantGame = () => {
  const [gameMode, setGameMode] = useState<GameModeType | null>(null);
  const [grid, setGrid] = useState<Tile[][]>(initializeGrid());
  const [hand, setHand] = useState<Card[]>([
    { id: 1, type: CardType.FLUENCY_TRIAL, name: 'Syntax Drill' },
    { id: 2, type: CardType.FLUENCY_TRIAL, name: 'Pattern Practice' },
    { id: 3, type: CardType.FLUENCY_TRIAL, name: 'Core Training' }
  ]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [diceRolling, setDiceRolling] = useState(false);
  const [diceResults, setDiceResults] = useState<number[]>([]);
  const [showModeChoice, setShowModeChoice] = useState<ModeChoice | null>(null);
  const [score, setScore] = useState(0);
  const [turn, setTurn] = useState(1);
  const [message, setMessage] = useState('Select a game mode to begin');
  const [shadowPos, setShadowPos] = useState({ row: 0, col: 0 });

  const rollDice = (): number[] => {
    return Array(DICE_COUNT).fill(0).map(() => Math.floor(Math.random() * 6) + 1);
  };

  const handleTileClick = async (r: number, c: number) => {
    const tile = grid[r][c];

    if (!selectedCard) {
      setMessage('Select a card first');
      return;
    }

    if (tile.state !== TileState.UNLOCKED) {
      setMessage('Can only target unlocked tiles');
      return;
    }

    if (gameMode === GameMode.HYBRID) {
      setShowModeChoice({ row: r, col: c });
      return;
    }

    if (gameMode === GameMode.DICE) {
      await handleDiceResolution(r, c, tile);
    } else if (gameMode === GameMode.BATTLE) {
      await handleBattleResolution(r, c, tile);
    }
  };

  const handleDiceResolution = async (r: number, c: number, tile: Tile) => {
    setDiceRolling(true);
    setMessage('Rolling dice...');

    await new Promise(resolve => setTimeout(resolve, 500));

    const rolls = rollDice();
    setDiceResults(rolls);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const successes = rolls.filter(d => d >= DICE_SUCCESS).length;

    await applyFluencyGain(r, c, tile, successes);
  };

  const handleBattleResolution = async (r: number, c: number, tile: Tile) => {
    setMessage('Battle Challenge! (Quiz system coming soon)');

    await new Promise(resolve => setTimeout(resolve, 1000));

    const successes = DICE_COUNT;
    setMessage(`Victory in battle! Perfect fluency demonstrated.`);

    await applyFluencyGain(r, c, tile, successes);
  };

  const applyFluencyGain = async (r: number, c: number, tile: Tile, successes: number) => {
    const newGrid = grid.map(row => row.map(t => ({...t})));
    newGrid[r][c].fluency += successes;

    if (newGrid[r][c].fluency >= newGrid[r][c].threshold) {
      newGrid[r][c].state = TileState.MASTERED;
      setScore(score + 1);
      setMessage(`${tile.name} MASTERED! +${successes} Fluency Points`);
    } else {
      setMessage(`+${successes} Fluency Points to ${tile.name}`);
    }

    setGrid(newGrid);

    setHand(hand.filter(c => c.id !== selectedCard!.id));
    setSelectedCard(null);
    setDiceRolling(false);

    await new Promise(resolve => setTimeout(resolve, 1500));
    setDiceResults([]);
  };

  const handleShadowEvent = () => {
    setMessage('Shadow Event: Mental Block! All unlocked tiles lose 1 Fluency Point');

    const newGrid = grid.map(row => row.map(tile => {
      if (tile.state === TileState.UNLOCKED && tile.fluency > 0) {
        return { ...tile, fluency: tile.fluency - 1 };
      }
      return tile;
    }));

    setGrid(newGrid);
  };

  const getUnlockedTiles = (): { row: number; col: number }[] => {
    const unlocked: { row: number; col: number }[] = [];
    grid.forEach((row, r) => {
      row.forEach((tile, c) => {
        if (tile.state === TileState.UNLOCKED) {
          unlocked.push({ row: r, col: c });
        }
      });
    });
    return unlocked;
  };

  const moveShadowSelf = () => {
    const unlocked = getUnlockedTiles();
    if (unlocked.length === 0) return;

    const target = unlocked[Math.floor(Math.random() * unlocked.length)];

    const deltaR = Math.sign(target.row - shadowPos.row);
    const deltaC = Math.sign(target.col - shadowPos.col);

    const newRow = shadowPos.row + deltaR;
    const newCol = shadowPos.col + deltaC;

    if (newRow >= 0 && newRow < GRID_SIZE && newCol >= 0 && newCol < GRID_SIZE) {
      setShadowPos({ row: newRow, col: newCol });

      const tile = grid[newRow][newCol];
      if (tile.state === TileState.UNLOCKED) {
        const newGrid = grid.map(row => row.map(t => ({...t})));
        newGrid[newRow][newCol].fluency = Math.max(0, newGrid[newRow][newCol].fluency - 2);
        if (newGrid[newRow][newCol].fluency === 0) {
          newGrid[newRow][newCol].state = TileState.DECAYING;
        }
        setGrid(newGrid);
        setMessage('Shadow Self advances, spreading deeper decay!');
      }
    }
  };

  const endTurn = () => {
    if (turn % 2 === 0) {
      handleShadowEvent();
    }

    if (turn % 3 === 0) {
      moveShadowSelf();
    }

    const newCard: Card = {
      id: Date.now(),
      type: CardType.FLUENCY_TRIAL,
      name: ['Syntax Drill', 'Pattern Practice', 'Core Training', 'Fluency Test'][Math.floor(Math.random() * 4)]
    };

    setHand([...hand, newCard]);
    setTurn(turn + 1);
    setMessage('New turn! Select a card to play');
  };

  const getTileColor = (state: TileStateType): string => {
    switch(state) {
      case TileState.EMPTY: return 'bg-black';
      case TileState.LOCKED: return 'bg-gray-700';
      case TileState.UNLOCKED: return 'bg-gray-600';
      case TileState.MASTERED: return 'bg-green-600';
      case TileState.DECAYING: return 'bg-red-600';
      default: return 'bg-black';
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-yellow-300 p-4 overflow-auto">

      {!gameMode && (
        <div className="flex items-center justify-center h-full">
          <div className="text-center max-w-2xl">
            <h1 className="text-5xl font-bold mb-4 text-yellow-400" style={{fontFamily: 'serif'}}>
              VIGILANT: SWORD & SIGIL
            </h1>
            <p className="text-lg mb-8 text-gray-300">Choose your path, Maskbearer</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                onClick={() => {
                  setGameMode(GameMode.DICE);
                  setMessage('Dice Mode: Select a card, then click a tile');
                }}
                className="bg-gray-800 border-3 border-yellow-600 rounded-lg p-6 cursor-pointer hover:bg-gray-700 hover:border-yellow-400 transition-all"
              >
                <div className="text-4xl mb-3">🎲</div>
                <h2 className="text-xl font-bold mb-2 text-yellow-400">DICE MODE</h2>
                <p className="text-sm text-gray-300">Pure tactics. Roll dice to build fluency. Fast and strategic.</p>
              </div>

              <div
                onClick={() => {
                  setGameMode(GameMode.BATTLE);
                  setMessage('Battle Mode: Prove your mastery through challenge');
                }}
                className="bg-gray-800 border-3 border-yellow-600 rounded-lg p-6 cursor-pointer hover:bg-gray-700 hover:border-yellow-400 transition-all"
              >
                <div className="text-4xl mb-3">⚔️</div>
                <h2 className="text-xl font-bold mb-2 text-yellow-400">BATTLE MODE</h2>
                <p className="text-sm text-gray-300">Face challenges. Answer correctly for guaranteed success.</p>
              </div>

              <div
                onClick={() => {
                  setGameMode(GameMode.HYBRID);
                  setMessage('Hybrid Mode: Choose dice or battle each turn');
                }}
                className="bg-gray-800 border-3 border-yellow-600 rounded-lg p-6 cursor-pointer hover:bg-gray-700 hover:border-yellow-400 transition-all"
              >
                <div className="text-4xl mb-3">⚡</div>
                <h2 className="text-xl font-bold mb-2 text-yellow-400">HYBRID MODE</h2>
                <p className="text-sm text-gray-300">Your choice. Roll dice or face battle based on your confidence.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModeChoice && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 border-3 border-yellow-600 rounded-lg p-8 max-w-md">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400 text-center">Choose Your Approach</h3>
            <div className="flex gap-4">
              <button
                onClick={async () => {
                  const { row, col } = showModeChoice;
                  setShowModeChoice(null);
                  await handleDiceResolution(row, col, grid[row][col]);
                }}
                className="flex-1 bg-gray-700 border-2 border-blue-500 rounded-lg p-4 hover:bg-gray-600 transition-all"
              >
                <div className="text-3xl mb-2">🎲</div>
                <div className="font-bold">Roll Dice</div>
                <div className="text-xs text-gray-400">Chance-based</div>
              </button>
              <button
                onClick={async () => {
                  const { row, col } = showModeChoice;
                  setShowModeChoice(null);
                  await handleBattleResolution(row, col, grid[row][col]);
                }}
                className="flex-1 bg-gray-700 border-2 border-red-500 rounded-lg p-4 hover:bg-gray-600 transition-all"
              >
                <div className="text-3xl mb-2">⚔️</div>
                <div className="font-bold">Face Battle</div>
                <div className="text-xs text-gray-400">Skill-based</div>
              </button>
            </div>
          </div>
        </div>
      )}

      {gameMode && (
        <>
          <div className="text-center mb-4">
            <h1 className="text-4xl font-bold mb-2 text-yellow-400" style={{fontFamily: 'serif'}}>
              VIGILANT: SWORD & SIGIL
            </h1>
            <div className="flex justify-center gap-8 text-sm">
              <div>Mode: {gameMode.toUpperCase()}</div>
              <div>Turn: {turn}</div>
              <div>Domains Mastered: {score}</div>
            </div>
          </div>

          <div className="text-center mb-4 p-2 bg-gray-800 border-2 border-yellow-600 rounded">
            {message}
          </div>

          {diceResults.length > 0 && (
            <div className="flex justify-center gap-2 mb-4">
              {diceResults.map((roll, i) => (
                <div
                  key={i}
                  className={`w-12 h-12 flex items-center justify-center text-2xl font-bold border-2 rounded ${
                    roll >= DICE_SUCCESS ? 'bg-green-600 border-green-400' : 'bg-gray-700 border-gray-500'
                  }`}
                >
                  {roll}
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-center mb-4">
            <div
              className="inline-grid gap-1 p-4 bg-gray-950 border-4 border-yellow-600 rounded"
              style={{
                gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
                boxShadow: '0 0 20px rgba(234, 179, 8, 0.3)'
              }}
            >
              {grid.map((row, r) =>
                row.map((tile, c) => (
                  <div
                    key={`${r}-${c}`}
                    onClick={() => handleTileClick(r, c)}
                    className={`
                      w-12 h-12 border-2 border-yellow-700 rounded relative
                      ${getTileColor(tile.state)}
                      ${tile.state === TileState.UNLOCKED && selectedCard ? 'cursor-pointer hover:border-yellow-400 hover:scale-105' : ''}
                      ${tile.state === TileState.EMPTY ? 'border-gray-800' : ''}
                      transition-all duration-200
                    `}
                  >
                    {tile.state === TileState.LOCKED && (
                      <Lock className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400" />
                    )}
                    {tile.state === TileState.MASTERED && (
                      <Sparkles className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-300" />
                    )}
                    {tile.state === TileState.UNLOCKED && tile.fluency > 0 && (
                      <div className="absolute bottom-0 right-0 text-xs bg-black bg-opacity-70 px-1 rounded-tl">
                        {tile.fluency}/{tile.threshold}
                      </div>
                    )}
                    {r === shadowPos.row && c === shadowPos.col && (
                      <Skull className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-500" />
                    )}
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-2 text-sm">Your Hand</div>
            <div className="flex justify-center gap-3 mb-4">
              {hand.map(card => (
                <div
                  key={card.id}
                  onClick={() => {
                    setSelectedCard(card);
                    setMessage(`${card.name} selected - Click an unlocked tile`);
                  }}
                  className={`
                    w-32 h-40 border-3 rounded-lg p-3 cursor-pointer
                    transition-all duration-200
                    ${selectedCard?.id === card.id
                      ? 'bg-yellow-600 border-yellow-400 scale-105 shadow-lg'
                      : 'bg-gray-800 border-yellow-700 hover:border-yellow-500 hover:scale-102'
                    }
                  `}
                >
                  <div className="text-center">
                    <Zap className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-bold mb-2">{card.name}</div>
                    <div className="text-xs">Roll {DICE_COUNT} dice</div>
                    <div className="text-xs">{DICE_SUCCESS}+ succeeds</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={endTurn}
                disabled={selectedCard !== null || diceRolling}
                className="px-6 py-3 bg-gray-700 border-2 border-yellow-600 rounded-lg text-yellow-300 font-bold
                           hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                End Turn
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VigilantGame;

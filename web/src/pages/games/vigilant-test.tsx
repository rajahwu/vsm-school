import { useState } from 'react'
import { VigilantGame } from '@/components/games/VigilantGame'
import type { GameState } from '@/components/games/shared/types'

export default function VigilantTest() {
  const [_state, setState] = useState<GameState | null>(null)
  const [showDebug, setShowDebug] = useState(false)

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Vigilant Game - Test</h1>
        <button
          onClick={() => setShowDebug(!showDebug)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Toggle Debug
        </button>
      </div>
      <VigilantGame onStateChange={setState} showDebugInfo={showDebug} />
    </div>
  )
}

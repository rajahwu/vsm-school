EXECUTABLE MIGRATION - Claude Code Todo
Save this as GAME_MIGRATION.md:
markdown# Game Migration - Blackjack & Vigilant

## Phase 1: Copy Blackjack (30 min)

### 1.1 Copy Components
```bash
cp -r ~/blackjack-trainer-ts/src/components/* ~/rajahwu-vsm-school/web/src/components/games/BlackjackGame/components/
```

### 1.2 Copy Game Logic
```bash
cp -r ~/blackjack-trainer-ts/src/game-logic ~/rajahwu-vsm-school/web/src/components/games/BlackjackGame/logic
```

### 1.3 Copy Hooks
```bash
cp -r ~/blackjack-trainer-ts/src/hooks ~/rajahwu-vsm-school/web/src/components/games/BlackjackGame/hooks
```

### 1.4 Copy Assets (if exist)
```bash
cp -r ~/blackjack-trainer-ts/src/assets ~/rajahwu-vsm-school/web/src/components/games/BlackjackGame/assets 2>/dev/null || true
```

### 1.5 Create Main Wrapper
Create: `/web/src/components/games/BlackjackGame/index.tsx`
```typescript
import { useEffect } from 'react'
import { useGame } from './hooks/useGame'
import { Hand } from './components/Hand'
import { Controls } from './components/Controls'
import { Stats } from './components/Stats'
import { Message } from './components/Message'
import { StrategyTip } from './components/StrategyTip'
import type { GameProps } from '../shared/types'

export function BlackjackGame({
  onStateChange,
  showDebugInfo = false,
  isPaused = false,
  width = 800,
  height = 600
}: GameProps) {
  const gameState = useGame()
  
  useEffect(() => {
    onStateChange?.(gameState)
  }, [gameState, onStateChange])
  
  return (
    
      
      
      
      
      
      
      
      {showDebugInfo && (
        
          Game State
          {JSON.stringify(gameState, null, 2)}
        
      )}
    
  )
}
```

### 1.6 Fix Import Paths
Run in BlackjackGame directory:
```bash
cd ~/rajahwu-vsm-school/web/src/components/games/BlackjackGame
find . -name "*.tsx" -o -name "*.ts" | xargs sed -i "s|from '\.\./|from '@/|g"
find . -name "*.tsx" -o -name "*.ts" | xargs sed -i "s|from '\./\./|from '@/|g"
```

---

## Phase 2: Copy Vigilant (30 min)

### 2.1 Copy Main Game Component
```bash
cp ~/sword_and_sigil/game/src/Game.tsx ~/rajahwu-vsm-school/web/src/components/games/VigilantGame/
```

### 2.2 Copy Assets
```bash
cp -r ~/sword_and_sigil/game/src/assets ~/rajahwu-vsm-school/web/src/components/games/VigilantGame/assets 2>/dev/null || true
```

### 2.3 Copy Styles
```bash
cp ~/sword_and_sigil/game/src/App.css ~/rajahwu-vsm-school/web/src/components/games/VigilantGame/Game.css 2>/dev/null || true
```

### 2.4 Create Main Wrapper
Create: `/web/src/components/games/VigilantGame/index.tsx`
```typescript
import { useEffect, useState } from 'react'
import Game from './Game'
import './Game.css'
import type { GameProps } from '../shared/types'

export function VigilantGame({
  onStateChange,
  showDebugInfo = false,
  isPaused = false,
  width = 800,
  height = 600
}: GameProps) {
  const [gameState, setGameState] = useState(null)
  
  useEffect(() => {
    onStateChange?.(gameState)
  }, [gameState, onStateChange])
  
  return (
    
      
      
      {showDebugInfo && (
        
          Game State
          {JSON.stringify(gameState, null, 2)}
        
      )}
    
  )
}
```

---

## Phase 3: Update Shared Types (5 min)

Update: `/web/src/components/games/shared/types.ts`
```typescript
export interface GameState {
  [key: string]: any
}

export interface GameProps {
  // Control
  onReset?: () => void
  onPause?: () => void
  isPaused?: boolean
  
  // State management
  onStateChange?: (state: GameState) => void
  initialState?: GameState
  
  // Debug/teaching
  showDebugInfo?: boolean
  highlightState?: string[]
  
  // Playback
  replay?: boolean
  replayData?: GameState[]
  speed?: number
  
  // Dimensions
  width?: number
  height?: number
  theme?: 'light' | 'dark'
}
```

---

## Phase 4: Create Test Pages (15 min)

### 4.1 Create Blackjack Test Page
Create: `/web/src/pages/games/blackjack-test.tsx`
```typescript
import { useState } from 'react'
import { BlackjackGame } from '@/components/games/BlackjackGame'

export default function BlackjackTest() {
  const [state, setState] = useState(null)
  const [showDebug, setShowDebug] = useState(false)

  return (
    
      
        Blackjack Game - Test
        <button 
          onClick={() => setShowDebug(!showDebug)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Toggle Debug
        
      
      
      
    
  )
}
```

### 4.2 Create Vigilant Test Page
Create: `/web/src/pages/games/vigilant-test.tsx`
```typescript
import { useState } from 'react'
import { VigilantGame } from '@/components/games/VigilantGame'

export default function VigilantTest() {
  const [state, setState] = useState(null)
  const [showDebug, setShowDebug] = useState(false)

  return (
    
      
        Vigilant Game - Test
        <button 
          onClick={() => setShowDebug(!showDebug)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Toggle Debug
        
      
      
      
    
  )
}
```

---

## Phase 5: Update Dependencies (5 min)

Check if lucide-react is in package.json. If not, add it:
```bash
cd ~/rajahwu-vsm-school/web
npm install lucide-react
```

---

## Phase 6: Test & Validate (15 min)

### 6.1 Start Dev Server
```bash
cd ~/rajahwu-vsm-school/web
npm run dev
```

### 6.2 Test Routes
- Visit: http://localhost:5173/games/blackjack-test
- Visit: http://localhost:5173/games/vigilant-test

### 6.3 Verify
- [ ] Blackjack game renders
- [ ] Can click Hit/Stand buttons
- [ ] Debug panel shows state
- [ ] Vigilant game renders
- [ ] Can move/interact
- [ ] No console errors

---

## Phase 7: Create Game Routes (10 min)

Update: `/web/src/main.tsx` to add routes
```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import IndexPage from './pages/index'
import BlackjackTest from './pages/games/blackjack-test'
import VigilantTest from './pages/games/vigilant-test'

createRoot(document.getElementById('root')!).render(
  
    
      
        }>
          } />
          } />
          } />
        
      
    
  ,
)
```

---

## Completion Checklist

- [ ] Phase 1: Blackjack copied and wrapped
- [ ] Phase 2: Vigilant copied and wrapped
- [ ] Phase 3: Types updated
- [ ] Phase 4: Test pages created
- [ ] Phase 5: Dependencies installed
- [ ] Phase 6: Both games tested and working
- [ ] Phase 7: Routes configured

**Time estimate:** 2 hours
**Status:** Ready to execute

/**
 * Shared types for all game components
 * These interfaces ensure games can integrate with the lesson system
 */

export interface GameState {
  [key: string]: any  // Flexible for different game states
}

export interface GameProps {
  // Control
  onReset?: () => void
  onPause?: () => void
  isPaused?: boolean
  
  // State management
  onStateChange?: (state: GameState) => void
  initialState?: GameState
  
  // Debug/teaching features
  showDebugInfo?: boolean
  highlightState?: string[]  // Which state vars to highlight
  
  // Playback
  replay?: boolean
  replayData?: GameState[]
  speed?: number  // 0.1 to 2.0
  
  // Customization
  width?: number
  height?: number
  theme?: 'light' | 'dark'
}

export interface GameComponent {
  (props: GameProps): JSX.Element
}

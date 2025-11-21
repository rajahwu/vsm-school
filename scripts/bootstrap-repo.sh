#!/usr/bin/env bash
set -euo pipefail

ROOT="$(pwd)"
echo "Bootstrapping VSM School repo at: $ROOT"

# Helper to create dirs and a .gitkeep
mk() {
  mkdir -p "$1"
  # add .gitkeep so empty dirs are tracked
  touch "$1/.gitkeep"
}

# Top-level folders
mk "projects/dropframe/diagrams/thumbnails"
mk "projects/dropframe/aar"
mk "projects/dropframe/reflections"
mk "projects/dropframe/assets"

mk "projects/gridline/diagrams/thumbnails"
mk "projects/gridline/aar"
mk "projects/gridline/reflections"
mk "projects/gridline/assets"

mk "projects/tyler/diagrams/thumbnails"
mk "projects/tyler/aar"
mk "projects/tyler/reflections"
mk "projects/tyler/assets"

mk "templates/figma"
mk "templates/svg"
mk "templates/png"
mk "templates/printable"
mk "templates/cheat-sheets"

mk "guides/quick-launch"
mk "guides/systems-mapping/gallery"
mk "guides/articles"
mk "guides/facilitator"

mk "tokens/json"
mk "tokens/palette"
mk "tokens/typography"
mk "tokens/semantic"
mk "tokens/variants"

mk "bootcamp/week-01"
mk "bootcamp/week-02"
mk "bootcamp/week-03"
mk "bootcamp/capstone"
mk "bootcamp/rubrics"
mk "bootcamp/streaks"

# Root files
if [ ! -f "README.md" ]; then
cat > README.md <<'MD'
# VSM School

A living library for Visual Systems Mastery — templates, projects, guides, and bootcamp artifacts.

Folder structure created by scripts/bootstrap-repo.sh
MD
fi

if [ ! -f ".gitignore" ]; then
cat > .gitignore <<'IGN'
# OS
.DS_Store
Thumbs.db

# Node / tooling
node_modules/
dist/

# Exports / binaries
*.fig
*.sketch
*.png
*.jpg
*.svg

# Personal
*.log
*.env
IGN
fi

if [ ! -f "VISUAL_INDEX.md" ]; then
cat > VISUAL_INDEX.md <<'MD'
# 📚 VSM School Visual Index

Add thumbnails into projects/*/diagrams/thumbnails and .meta.md files next to their source files.
MD
fi

if [ ! -f "LICENSE" ]; then
cat > LICENSE <<'MIT'
MIT License
Copyright (c) $(date +"%Y")
MIT
MIT
fi

# Sample meta files for Tyler and Dropframe
cat > "projects/tyler/diagrams/tyler-launch-journey-v1.meta.md" <<'MD'
Purpose: Speed approvals for Tyler launch
Date: 2025-09-23
Tools: Krita, Inkscape, Figma
Tags: #journey-map #tyler
MD

cat > "projects/dropframe/diagrams/dropframe-onboarding-journey-v1.meta.md" <<'MD'
Purpose: Onboarding flow clarity
Date: 2025-09-20
Tools: Krita, Figma
Tags: #journey-map #dropframe
MD

# Sample template placeholders
cat > "templates/figma/journey-map-template.README.md" <<'MD'
Place your Figma .fig file here or link to the public Figma file.
MD

cat > "templates/svg/causal-loop-template.README.md" <<'MD'
Add causal loop starter SVGs here.
MD

echo "Created folder scaffold and placeholder files."
echo "Next: add your tokens to tokens/json, diagrams to projects/*/diagrams, and thumbnails to projects/*/diagrams/thumbnails."

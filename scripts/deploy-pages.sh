#!/usr/bin/env bash
set -euo pipefail

REPO="${1:-https://github.com/Manurox/Manurox.github.io.git}"

npm run build

cd "$(dirname "$0")/.."
rm -rf out/.git 2>/dev/null || true

cd out
git init -q
git add .
TREE=$(git write-tree)
COMMIT=$(git commit-tree "$TREE" -m "Deploy site.")
git push -f "$REPO" "$COMMIT":refs/heads/gh-pages

echo "Deployed to gh-pages on $REPO"

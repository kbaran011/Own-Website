#!/bin/bash
# One-command deploy: run this after 'npm install -g vercel' or use npx
set -e
cd "$(dirname "$0")"
echo "Deploying portfolio to Vercel..."
if command -v npx &>/dev/null; then
  npx vercel --prod --yes
else
  echo "Node/npx not found. Install Node from https://nodejs.org then run: npx vercel --prod"
  exit 1
fi

# README --- Building a Board View Feature (Vite + Vanilla JS + monday apps CLI)

## Overview
Client-side board view built with Vite + Vanilla JS.

---

## Project Setup (Monday)
1. Create app
2. Create board view feature (Start from scratch)
3. OAuth & Permissions:
   - `boards:read`
   - `boards:write`
4. Use **Client-side code deployment** via monday CLI

## Project Setup (WebStorm)
- Initialize a new Vite project using the Vanilla JS template
- run npm install (to install dependencies)

### Structure:
- vanilla/
   - index.html
   - package.json
   - public/
      - assets/
         - background.svg
         - logo.jpg
         - reset.svg
         - sprites.svg
   - src/
      - index.js
      - index.css
      - modules/
         - animations.js
         - validation.js
         - functions.js
   - dist/ (generated after build)

### NPM Commands
- `npm run dev` (to debug)
- `npm run build` (to make dist folder)
- `npm run preview` (to check dist works)

### Deployment (Use CMD as antivirus funny)
`cd "C:\Users\OliverAherne\WebstormProjects\vanilla\dist" && mapps code:push --client-side -i 14215247`

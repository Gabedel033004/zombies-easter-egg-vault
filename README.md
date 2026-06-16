# CoD Easter Egg Vault

A fan-made guide site for Call of Duty Zombies easter eggs, starting with Black Ops 1 through Black Ops 3.

> Not affiliated with or endorsed by Activision Publishing, Inc., Treyarch, Sledgehammer Games, or Infinity Ward. Call of Duty® and Black Ops® are registered trademarks of Activision Publishing, Inc.

## Tech Stack

- **Node.js** + **Express** — server
- **Handlebars (HBS)** — templating
- Vanilla CSS + JS — no frameworks needed

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development (auto-restarts on save)

```bash
npm run dev
```

### 3. Run in production

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
cod-easter-egg-vault/
├── data/
│   └── maps.js          # All game/map data — edit here to add guides
├── public/
│   ├── css/style.css    # All styles
│   └── js/main.js       # Tab switching logic
├── views/
│   ├── layouts/
│   │   └── main.hbs     # Base HTML layout
│   ├── partials/
│   │   ├── header.hbs
│   │   └── footer.hbs
│   ├── home.hbs         # Main page
│   └── 404.hbs          # 404 page
├── server.js            # Express app
├── package.json
└── .gitignore
```

## Adding a New Guide

1. Open `data/maps.js`
2. Find the map and change `status: "coming"` to `status: "done"`
3. Create a new route + view for the guide content (e.g. `/game/bo1/kino`)

## Adding a New Game Tab

1. Add a new entry to the `games` array in `data/maps.js`
2. Add a CSS accent color variable in `public/css/style.css`
3. The tab and panel will render automatically

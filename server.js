const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const games = require("./data/maps");

const app = express();
const PORT = process.env.PORT || 3000;

// Handlebars setup
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
    helpers: {
      eq: (a, b) => a === b,
      mapType: (map) => map.dlc ? `${map.type} — ${map.dlc}` : map.type,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("home", {
    title: "CoD Easter Egg Vault",
    games,
    activeGame: games[0].id,
  });
});

app.get("/game/:id", (req, res) => {
  const game = games.find((g) => g.id === req.params.id);
  if (!game) return res.redirect("/");
  res.render("home", {
    title: `${game.name} — CoD Easter Egg Vault`,
    games,
    activeGame: game.id,
  });
});

app.get("/game/:gameId/map/:mapId", (req, res) => {
  const game = games.find((g) => g.id === req.params.gameId);
  if (!game) return res.redirect("/");
  
  const map = game.maps.find((m) => m.id === req.params.mapId);
  if (!map) return res.redirect(`/game/${req.params.gameId}`);
  
  res.render("map", {
    title: `${map.name} — ${game.name} — CoD Easter Egg Vault`,
    game,
    map,
    games,
  });
});

// 404
app.use((req, res) => {
  res.status(404).render("404", { title: "Page Not Found" });
});

app.listen(PORT, () => {
  console.log(`\n🎮  CoD Easter Egg Vault running at http://localhost:${PORT}\n`);
});

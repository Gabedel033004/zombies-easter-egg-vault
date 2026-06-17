const path = require('path');
const fs = require('fs');

// Helper function to load all maps from game folders
function loadGameMaps(gameDir) {
  const mapsPath = path.join(__dirname, 'maps', gameDir);
  const mapFiles = fs.readdirSync(mapsPath).filter(f => f.endsWith('.js'));
  return mapFiles.map(file => require(path.join(mapsPath, file)));
}

const games = [
  {
    id: "bo1",
    name: "Black Ops 1",
    year: "2010",
    developer: "Treyarch",
    platforms: "PC · PS3 · Xbox 360",
    accent: "#e8a020",
    maps: loadGameMaps('bo1'),
  },
  {
    id: "bo2",
    name: "Black Ops 2",
    year: "2012",
    developer: "Treyarch",
    platforms: "PC · PS3 · Xbox 360 · Wii U",
    accent: "#2eb8d4",
    maps: loadGameMaps('bo2'),
  },
  {
    id: "bo3",
    name: "Black Ops 3",
    year: "2015",
    developer: "Treyarch",
    platforms: "PC · PS4 · Xbox One",
    accent: "#b44cf0",
    maps: loadGameMaps('bo3'),
  },
];

module.exports = games;

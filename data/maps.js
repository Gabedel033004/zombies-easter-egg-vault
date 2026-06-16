const games = [
  {
    id: "bo1",
    name: "Black Ops 1",
    year: "2010",
    developer: "Treyarch",
    platforms: "PC · PS3 · Xbox 360",
    accent: "#e8a020",
    maps: [
      { id: "kino-der-toten", name: "Kino der Toten",   type: "Zombies",          dlc: null,   status: "coming" },
      { id: "five", name: '"Five"',           type: "Zombies",          dlc: null,   status: "coming" },
      { id: "ascension", name: "Ascension",        type: "Zombies",          dlc: "DLC 1", status: "coming" },
      { id: "call-of-the-dead", name: "Call of the Dead", type: "Zombies",          dlc: "DLC 2", status: "coming" },
      { id: "shangri-la", name: "Shangri-La",       type: "Zombies",          dlc: "DLC 3", status: "coming" },
      { id: "moon", name: "Moon",             type: "Zombies",          dlc: "DLC 4", status: "coming" },
    ],
  },
  {
    id: "bo2",
    name: "Black Ops 2",
    year: "2012",
    developer: "Treyarch",
    platforms: "PC · PS3 · Xbox 360 · Wii U",
    accent: "#2eb8d4",
    maps: [
      { id: "tranzit", name: "TranZit",          type: "Zombies",          dlc: null,    status: "coming" },
      { id: "die-rise", name: "Die Rise",         type: "Zombies",          dlc: "DLC 1", status: "coming" },
      { id: "mob-of-the-dead", name: "Mob of the Dead",  type: "Zombies",          dlc: "DLC 1", status: "coming" },
      { id: "buried", name: "Buried",           type: "Zombies",          dlc: "DLC 2", status: "coming" },
      { id: "origins", name: "Origins",          type: "Zombies",          dlc: "DLC 4", status: "coming" },
      { id: "nuketown-zombies", name: "Nuketown Zombies", type: "Zombies",          dlc: "Bonus", status: "coming" },
    ],
  },
  {
    id: "bo3",
    name: "Black Ops 3",
    year: "2015",
    developer: "Treyarch",
    platforms: "PC · PS4 · Xbox One",
    accent: "#b44cf0",
    maps: [
      { id: "shadows-of-evil", name: "Shadows of Evil",   type: "Zombies",         dlc: null,    status: "coming" },
      { id: "the-giant", name: "The Giant",         type: "Zombies",         dlc: "Bonus", status: "coming" },
      { id: "der-eisendrache", name: "Der Eisendrache",   type: "Zombies",         dlc: "DLC 1", status: "coming" },
      { id: "zetsubou-no-shima", name: "Zetsubou No Shima", type: "Zombies",         dlc: "DLC 2", status: "coming" },
      { id: "gorod-krovi", name: "Gorod Krovi",       type: "Zombies",         dlc: "DLC 3", status: "coming" },
      { id: "revelations", name: "Revelations",       type: "Zombies",         dlc: "DLC 4", status: "coming" },
    ],
  },
];

module.exports = games;

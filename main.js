import fs from "fs";
import interpreter from "./interpreter/infinityNikky.js";
import 御剑江湖 from "./scores/mix3octave-御剑江湖.js";
import 如忆玉儿 from "./scores/2octave-如忆玉儿.js";
import 浮云奔浪 from "./scores/2octave-浮云奔浪.js";
import welcomeHorizon from "./scores/momo-welcomeHorizon.js";

const OUTPUT_PATH = "output.txt";

// let content = interpreter(御剑江湖, [
//   "MAIN_VIOLIN",
//   "BASS_VIOLIN",
//   "EXTRA1_VIOLIN",
//   "EXTRA2_VIOLIN",
// ]);

// let content = interpreter(如忆玉儿, ["MAIN_FLUTE"]);

// let content = interpreter(浮云奔浪, ["MAIN_FLUTE"]);

let content = interpreter(welcomeHorizon, ["MAIN_HORN"]);

fs.writeFileSync(OUTPUT_PATH, content);
console.log("output finish");

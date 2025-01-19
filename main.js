const TIME = {
    START_DELAY: 500,
    SCORE_SPEED: 220,
}

const KEYDOWN = 0;
const KEYUP = 1;

const KEY = {
    0: 0,
    C1: "A",
    D1: "S",
    E1: "D",
    F1: "F",
    G1: "G",
    A1: "H",
    B1: "J",
    C2: "Q",
    D2: "W",
    E2: "E",
    F2: "R",
    G2: "T",
    A2: "Y",
    B2: "U",
};

// ["key", (beat), preDelay%, postDelay%],
const DEFAULT_PREDELAY = 30;
const MAIN_VIOLIN = [
    ["E1", 1, DEFAULT_PREDELAY,],
    ["G1", 1, DEFAULT_PREDELAY,],
    ["A1", 2, DEFAULT_PREDELAY,],
    ["E2", 2, DEFAULT_PREDELAY,],
    ["D2", 3, DEFAULT_PREDELAY,],
    ["C2", 1, DEFAULT_PREDELAY,],
    ["B1", 4, DEFAULT_PREDELAY,],
    ["A1", 2, DEFAULT_PREDELAY,],
    ["G1", 2, DEFAULT_PREDELAY,],
    ["A1", 2, DEFAULT_PREDELAY,],
    ["A1", 1, DEFAULT_PREDELAY,],
    ["B1", 1, DEFAULT_PREDELAY,],
    ["C2", 2, DEFAULT_PREDELAY,],
    ["C2", 1, DEFAULT_PREDELAY,],
    ["D2", 1, DEFAULT_PREDELAY,],
    ["E2", 6, DEFAULT_PREDELAY,],

    ["C2", 1, DEFAULT_PREDELAY,],
    ["D2", 1, DEFAULT_PREDELAY,],
    ["E2", 4, DEFAULT_PREDELAY,],
    ["D2", 3, DEFAULT_PREDELAY,],
    ["C2", 1, DEFAULT_PREDELAY,],
    ["B1", 4, DEFAULT_PREDELAY,],
    ["A1", 2, DEFAULT_PREDELAY,],
    ["G1", 2, DEFAULT_PREDELAY,],
    ["A1", 7, DEFAULT_PREDELAY,],
    ["B1", 0.25, DEFAULT_PREDELAY,],
    ["A1", 0.75, DEFAULT_PREDELAY,],
    ["G1", 8, DEFAULT_PREDELAY,],

    ["A1", 2, DEFAULT_PREDELAY,],
    ["A1", 1, DEFAULT_PREDELAY,],
    ["B1", 1, DEFAULT_PREDELAY,],
    ["C2", 2, DEFAULT_PREDELAY,],
    ["B1", 1, DEFAULT_PREDELAY,],
    ["A1", 1, DEFAULT_PREDELAY,],
    ["G1", 4, DEFAULT_PREDELAY,],
    ["E1", 4, DEFAULT_PREDELAY,],
    ["A1", 2, DEFAULT_PREDELAY,],
    ["A1", 1, DEFAULT_PREDELAY,],
    ["B1", 1, DEFAULT_PREDELAY,],
    ["C2", 2, DEFAULT_PREDELAY,],
    ["C2", 1, DEFAULT_PREDELAY,],
    ["D2", 1, DEFAULT_PREDELAY,],
    ["E2", 6, DEFAULT_PREDELAY,],

    ["C2", 1, DEFAULT_PREDELAY,],
    ["D2", 1, DEFAULT_PREDELAY,],
    ["E2", 2, DEFAULT_PREDELAY,],
    ["G2", 2, DEFAULT_PREDELAY,],
    ["D2", 3, DEFAULT_PREDELAY,],
    ["C2", 1, DEFAULT_PREDELAY,],
    ["B1", 4, DEFAULT_PREDELAY,],
    ["A1", 2, DEFAULT_PREDELAY,],
    ["G1", 2, DEFAULT_PREDELAY,],
    ["A1", 8, DEFAULT_PREDELAY,],

    ["C1", 4, DEFAULT_PREDELAY,],
    ["D1", 4, DEFAULT_PREDELAY,],
    ["E1", 6, DEFAULT_PREDELAY,],
    ["G1", 2, DEFAULT_PREDELAY,],
    ["D1", 6, DEFAULT_PREDELAY,],
    ["E1", 1, DEFAULT_PREDELAY,],
    ["G1", 1, DEFAULT_PREDELAY,],
    ["A1", 3, DEFAULT_PREDELAY,],
    ["B1", 1, DEFAULT_PREDELAY,],
    ["A1", 3, DEFAULT_PREDELAY,],
    ["G1", 1, DEFAULT_PREDELAY,],
    ["E1", 6, DEFAULT_PREDELAY,],

    ["E1", 1, DEFAULT_PREDELAY,],
    ["G1", 1, DEFAULT_PREDELAY,],
    ["A1", 3, DEFAULT_PREDELAY,],
    ["C2", 1, DEFAULT_PREDELAY,],
    ["B1", 3, DEFAULT_PREDELAY,],
    ["A1", 1, DEFAULT_PREDELAY,],
    ["G1", 6, DEFAULT_PREDELAY,],
    ["A1", 1, DEFAULT_PREDELAY,],
    ["B1", 1, DEFAULT_PREDELAY,],
    ["C2", 6, DEFAULT_PREDELAY,],
    ["E2", 2, DEFAULT_PREDELAY,],
    ["D2", 4, DEFAULT_PREDELAY,],

    ["C1", 2, DEFAULT_PREDELAY,],
    ["D1", 2, DEFAULT_PREDELAY,],
    ["E1", 6, DEFAULT_PREDELAY,],
    ["G1", 2, DEFAULT_PREDELAY,],
    ["D1", 6, DEFAULT_PREDELAY,],
    ["E1", 1, DEFAULT_PREDELAY,],
    ["G1", 1, DEFAULT_PREDELAY,],
    ["A1", 6, DEFAULT_PREDELAY,],
    ["B1", 2, DEFAULT_PREDELAY,],
    ["G1", 4, DEFAULT_PREDELAY,],

    ["A1", 2, DEFAULT_PREDELAY,],
    ["C2", 2, DEFAULT_PREDELAY,],
    ["D2", 2, DEFAULT_PREDELAY,],
    ["E2", 2, DEFAULT_PREDELAY,],
    ["D2", 2, DEFAULT_PREDELAY,],
    ["A1", 2, DEFAULT_PREDELAY,],
    ["C2", 4, DEFAULT_PREDELAY,],
    ["D2", 2, DEFAULT_PREDELAY,],
    ["E2", 2, DEFAULT_PREDELAY,],
    ["G2", 4, DEFAULT_PREDELAY,],
    ["E2", 2, DEFAULT_PREDELAY,],
    ["C2", 2, DEFAULT_PREDELAY,],
    ["D2", 2, DEFAULT_PREDELAY,],
    ["E2", 2, DEFAULT_PREDELAY,],
    ["G2", 4, DEFAULT_PREDELAY,],
    ["A2", 8, DEFAULT_PREDELAY,],
    ["G2", 8, DEFAULT_PREDELAY,],
    ["E2", 12, DEFAULT_PREDELAY,],
];
const BASS_VIOLIN = [
    ["A1", 8, DEFAULT_PREDELAY,],
    ["G1", 8, DEFAULT_PREDELAY,],
    ["E1", 8, DEFAULT_PREDELAY,],

    ["G1", 4, DEFAULT_PREDELAY,],
    ["A1", 4, DEFAULT_PREDELAY,],
    ["E1", 8, DEFAULT_PREDELAY,],
    ["D1", 8, DEFAULT_PREDELAY,],
    ["E1", 12, DEFAULT_PREDELAY,],
    ["D1", 4, DEFAULT_PREDELAY,],

    ["C2", 8, DEFAULT_PREDELAY,],
    ["D2", 2, DEFAULT_PREDELAY,],
    ["E2", 2, DEFAULT_PREDELAY,],
    ["G2", 4, DEFAULT_PREDELAY,],
    ["A2", 8, DEFAULT_PREDELAY,],
    ["G2", 4, DEFAULT_PREDELAY,],
    ["E2", 4, DEFAULT_PREDELAY,],

    ["C2", 8, DEFAULT_PREDELAY,],
    ["D2", 4, DEFAULT_PREDELAY,],
    ["E2", 4, DEFAULT_PREDELAY,],
    ["A2", 8, DEFAULT_PREDELAY,],
    ["G2", 8, DEFAULT_PREDELAY,],

    ["A1", 8, DEFAULT_PREDELAY,],
    ["G1", 8, DEFAULT_PREDELAY,],
    ["E1", 8, DEFAULT_PREDELAY,],
    ["C1", 8, DEFAULT_PREDELAY,],

    ["E1", 8, DEFAULT_PREDELAY,],
    ["D1", 8, DEFAULT_PREDELAY,],
    ["E1", 8, DEFAULT_PREDELAY,],
    ["G1", 8, DEFAULT_PREDELAY,],

    ["G1", 8, DEFAULT_PREDELAY,],
    ["C1", 8, DEFAULT_PREDELAY,],
    ["D1", 8, DEFAULT_PREDELAY,],
    ["E1", 8, DEFAULT_PREDELAY,],

    ["D1", 8, DEFAULT_PREDELAY,],
    ["E1", 2, DEFAULT_PREDELAY,],
    ["D1", 2, DEFAULT_PREDELAY,],
    ["C1", 4, DEFAULT_PREDELAY,],
    ["E1", 8, DEFAULT_PREDELAY,],
    ["G1", 8, DEFAULT_PREDELAY,],
    ["E1", 8, DEFAULT_PREDELAY,],
    ["D1", 8, DEFAULT_PREDELAY,],
    ["E1", 16, DEFAULT_PREDELAY,],
];
const EXTRA_VIOLIN1 = [
    ["E2", 1, DEFAULT_PREDELAY,],
    ["A1", 1, DEFAULT_PREDELAY,],
    ["G2", 4, DEFAULT_PREDELAY,],
    [0, 2, ,],
    ["E2", 2, DEFAULT_PREDELAY,],
    ["D2", 4, DEFAULT_PREDELAY,],
    [0, 2, ,],
    ["E2", 1, DEFAULT_PREDELAY,],
    ["G2", 1, DEFAULT_PREDELAY,],
    ["A2", 2, DEFAULT_PREDELAY,],
    [0, 4, ,],
    ["E2", 1, DEFAULT_PREDELAY,],
    ["C2", 1, DEFAULT_PREDELAY,],
    ["A1", 2, DEFAULT_PREDELAY,],
];
const EXTRA_VIOLIN2 = [
    ["A1", 1, DEFAULT_PREDELAY,],
    ["B1", 1, DEFAULT_PREDELAY,],
    ["C2", 3, DEFAULT_PREDELAY,],
    ["B1", 0.5, DEFAULT_PREDELAY,],
    ["C2", 0.5, DEFAULT_PREDELAY,],
    ["D2", 3, DEFAULT_PREDELAY,],
    ["C2", 0.5, DEFAULT_PREDELAY,],
    ["D2", 0.5, DEFAULT_PREDELAY,],
    ["E2", 4, DEFAULT_PREDELAY,],
    [0, 2, ,],
    ["A1", 1, DEFAULT_PREDELAY,],
    ["B1", 1, DEFAULT_PREDELAY,],
    ["C2", 3, DEFAULT_PREDELAY,],
    ["B1", 0.5, DEFAULT_PREDELAY,],
    ["C2", 0.5, DEFAULT_PREDELAY,],
    ["D2", 3, DEFAULT_PREDELAY,],
    ["C2", 0.5, DEFAULT_PREDELAY,],
    ["D2", 0.5, DEFAULT_PREDELAY,],
    ["G2", 6, DEFAULT_PREDELAY,],
];

const unitT = 60 * 1000 / TIME.SCORE_SPEED;

const sortScript = (sheet) => {
    let beatCount = 0;
    let timeline = [];
    sheet.forEach(note => {
        if (note[0] !== 0) {
            timeline.push([beatCount * unitT + (note[2] || 0), note[0], KEYDOWN]);
            timeline.push([(beatCount + note[1]) * unitT + (note[3] || 0), note[0], KEYUP]);
        }
        beatCount += note[1];
    });
    timeline.sort((c1, c2) => (c1[0] - c2[0]));

    let timestamp = 0;
    let script = `Delay ${TIME.START_DELAY}\n`;
    timeline.forEach((cmd) => {
        script += `Delay ${(cmd[0] - timestamp).toFixed(2)}\nKey${cmd[2] === KEYUP ? "Up" : "Down"} "${KEY[cmd[1]]}", 1\n`;
        timestamp = cmd[0];
    });
    return script;
};

// console.log(sortScript(MAIN_VIOLIN));
// console.log(sortScript(BASS_VIOLIN));
// console.log(sortScript(EXTRA_VIOLIN1));
// console.log(sortScript(EXTRA_VIOLIN2));

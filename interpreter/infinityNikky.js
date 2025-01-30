const SHEET_ACTION = {
  KEYDOWN: 0,
  KEYUP: 1,
  SHARP_START: 2,
  SHARP_END: 3,
  // FLAT_END: 4,
};

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

const CLICK_DELAY = 10;
const SHARP_SLIDE_DELAY = 10;

export default function (sheet, TIME) {
  const unitT = (60 * 1000) / TIME.SCORE_SPEED;

  let beatCount = 0;
  let timeline = [];
  sheet.forEach((note) => {
    if (note[0] !== 0) {
      timeline.push([
        SHEET_ACTION.KEYDOWN,
        beatCount * unitT + (note[2] || 0),
        note[0].slice(0, 2),
      ]);
      timeline.push([
        SHEET_ACTION.KEYUP,
        (beatCount + note[1]) * unitT + (note[3] || 0),
        note[0].slice(0, 2),
      ]);
      if (note[0][2] === "#") {
        timeline.push([
          SHEET_ACTION.SHARP_START,
          beatCount * unitT +
            (note[2] || 0) +
            TIME.SHARP_PREDELAY -
            CLICK_DELAY -
            SHARP_SLIDE_DELAY,
        ]);
        timeline.push([
          SHEET_ACTION.SHARP_END,
          (beatCount + note[1]) * unitT +
            (note[3] || 0) +
            TIME.SHARP_POSTDELAY,
        ]);
      }
    }
    beatCount += note[1];
  });
  timeline.sort((c1, c2) => c1[1] - c2[1]);

  let timestamp = 0;
  let script = `Delay ${TIME.START_DELAY}\n`;
  timeline.forEach((cmd) => {
    script += `Delay ${(cmd[1] - timestamp).toFixed(2)}\n`;
    switch (cmd[0]) {
      case SHEET_ACTION.KEYDOWN:
        script += `KeyDown "${KEY[cmd[2]]}", 1\n`;
        break;
      case SHEET_ACTION.KEYUP:
        script += `KeyUp "${KEY[cmd[2]]}", 1\n`;
        break;
      case SHEET_ACTION.SHARP_START:
        script += `MoveTo 1663, 770\nDelay ${CLICK_DELAY}\nLeftDown 1\nDelay ${SHARP_SLIDE_DELAY}\nMoveTo 1663, 580\n`;
        break;
      case SHEET_ACTION.SHARP_END:
        script += `Delay ${CLICK_DELAY}\nLeftUp 1\nMoveTo 1663, 770\n`;
        break;
      default:
        break;
    }
    timestamp = cmd[1];
  });
  return script;
}

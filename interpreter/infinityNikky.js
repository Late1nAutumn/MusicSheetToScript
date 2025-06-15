const SHEET_ACTION = {
  KEYDOWN: 0,
  KEYUP: 1,
  SHARP_START: 2,
  SHARP_END: 3,
  // FLAT_END: 4,
};

const KEY = {
  0: 0,
  C1: "Z",
  D1: "X",
  E1: "C",
  F1: "V",
  G1: "B",
  A1: "N",
  B1: "M",

  C2: "A",
  D2: "S",
  E2: "D",
  F2: "F",
  G2: "G",
  A2: "H",
  B2: "J",

  C3: "Q",
  D3: "W",
  E3: "E",
  F3: "R",
  G3: "T",
  A3: "Y",
  B3: "U",
};

const CLICK_DELAY = 10;
const SHARP_SLIDE_DELAY = 10;

const COORD_SHARP_START = "1663, 770";
const COORD_SHARP_END = "1663, 580";

export default function interpreter(data, instruments) {
  let timeline = [];
  instruments.forEach((instrument) => {
    timeline.push(...createTimeline(data[instrument], data.TIME));
  });
  timeline.sort((c1, c2) => c1[1] - c2[1]);

  return mapTimelineToScript(timeline, data.TIME);
}

function createTimeline(sheet, TIME) {
  const unitT = (60 * 1000) / TIME.SCORE_SPEED;

  let beatCount = 0;
  let timeline = [];
  sheet.forEach((note) => {
    if (note[1] === 0) return;
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
          (beatCount + note[1]) * unitT + (note[3] || 0) + TIME.SHARP_POSTDELAY,
        ]);
      }
    }
    beatCount += note[1];
  });
  return timeline;
}

function mapTimelineToScript(timeline, TIME) {
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
        script += `MoveTo ${COORD_SHARP_START}\nDelay ${CLICK_DELAY}\nLeftDown 1\nDelay ${SHARP_SLIDE_DELAY}\nMoveTo ${COORD_SHARP_END}\n`;
        break;
      case SHEET_ACTION.SHARP_END:
        script += `Delay ${CLICK_DELAY}\nLeftUp 1\nMoveTo ${COORD_SHARP_START}\n`;
        break;
      default:
        break;
    }
    timestamp = cmd[1];
  });
  return script;
}

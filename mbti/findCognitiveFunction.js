/**
 * @param {string} mbti
 * @return {{
 *  dominant: string,
 *  auxiliary: string,
 *  tertiary: string,
 *  inferior: string,
 * }}
 */
export function findCognitiveFunction(mbti) {
  const letters = Array.from(mbti);
  const attitude = letters[3];

  const dominant = getDominant(letters[1], attitude);
  const auxiliary = getAuxiliary(letters[2], attitude);
  const tertiary = getTertiaryAndInferior(auxiliary);
  const inferior = getTertiaryAndInferior(dominant);

  return { dominant, auxiliary, tertiary, inferior };
}

function getDominant(letter, Att) {
  switch (Att) {
    case "J":
      return letter + "i";
    default:
      return letter + "e";
  }
}

function getAuxiliary(letter, Att) {
  switch (Att) {
    case "J":
      return letter + "e";
    default:
      return letter + "i";
  }
}

function getTertiaryAndInferior(letter) {
  const arr = Array.from(letter);

  return arr
    .map((l, index) => {
      if (index === 0) {
        return swapLeter(l);
      } else {
        return swapLeter(l).toLowerCase();
      }
    })
    .join("");
}

function swapLeter(letter) {
  switch (letter.toUpperCase()) {
    case "I":
      return "E";
    case "E":
      return "I";

    case "S":
      return "N";
    case "N":
      return "S";

    case "T":
      return "F";
    case "F":
      return "T";

    case "J":
      return "P";
    case "P":
      return "J";
  }
}

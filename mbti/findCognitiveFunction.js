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
  throw new Error("Not implemented");
  const letters = Array.from(mbti);
  const attitude = letters[3];

  const dominant = getDominant(letters[1], attitude);
  const auxiliary = getAuxiliary(letters[2], attitude);
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
}

/**
 *
 * @param {number[]} cards
 * @return {number[]}
 */
export function shuffle(cards) {
  // throw new Error('Not implemented')
  cards.forEach((number, index) => {
    let shuff = Math.floor(Math.random() * (index + 1));
    let temp = number[index];
    number[index] = number[shuff];
    number[shuff] = temp;
  });
}

// Code your solutions in this file
function writeCards(names, event) {
  const cards = []
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return cards
}

function countDown(number) {
  let current = number;
  while (current >= 0) {
    console.log(current);
    current--;
  }
}
// Code your solutions in this file
function countDown(num) {
    for (let i = 0; i <= num; i++) {
        console.log(num - i);
    };
};

function writeCards(names, event) {
    let thankyouCards = [];
    for (let i = 0; i < names.length; i++) {
        thankyouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    };
    return thankyouCards;
};
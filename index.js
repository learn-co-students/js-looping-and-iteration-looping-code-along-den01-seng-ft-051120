// Code your solutions in this file
function writeCards(namesArray, event) {
    let thanks = []
    for (let i = 0; i < namesArray.length; i++) {
        thanks.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
    return thanks
}

function countDown(posInt) {
    while (posInt > 0) {
        console.log(posInt--)

    }
    console.log(posInt)
}


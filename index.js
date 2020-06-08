// Code your solutions in this file

function writeCards(name){
    let thankYou = []
    for(let count = 0; count < name.length; count++){
        
        thankYou.push(`Thank you, ${name[count]}, for the wonderful surprise gift!`)
    }
    return thankYou
}

function countDown(num){
    let count = num
    while(count >= 0){
        console.log(count)
        count -= 1
    }

}

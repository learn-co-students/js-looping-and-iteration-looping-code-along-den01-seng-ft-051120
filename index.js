let names = ["Ada", "Brendan", "Ali"]


function writeCards(array, occasion){
  let output =[];
  for(let i = 0; i < array.length; i++){
    output.push(`Thank you, ${array[i]}, for the wonderful ${occasion} gift!`)
  }
  
  return output;
}

writeCards(names, "birthday")


function countDown(number){
  for(let i = number; i >= 0; i--){
    console.log(i)
  }
}
countDown(number)
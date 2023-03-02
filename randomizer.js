
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  

let array = [];
const items = 1000;
const ten = (items/100)*10;
for(let i = 0; i< items; i++){
    if(i < ten){
        array.push(0);
    }else{
        array.push(1)
    }
}

for(let i =0; i< 100000; i++){
    shuffle(array);
}
let newArray = [];
for(let i = 0; i< array.length; i++){
    if(array[i] === 0 ){
        newArray[i]=false;
    }else{
        newArray[i]=true;
    }
}

console.log(JSON.stringify(newArray), array.length)
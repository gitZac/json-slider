//Loop through json and push into an array. 

function pushJsonToArray(data){
    let arr = [];
  
    for (var i = 0; i < data.length; i++ ){

        var realData = data[i];        
        arr.push(realData);
    }

    //Parse data for empty advice fields.

    let parsedArr = [];

    arr.map((elem) => {

      if(elem.advice !== ''){
        parsedArr.push(elem);
      }

    });

    return parsedArr;
}

function shuffleItems(arr){
    let currentIndex = arr.length
    let randomIndex;

    while (currentIndex != 0){

        //get a random element from the array
        randomIndex = Math.floor(Math.random() * currentIndex );
        currentIndex --;

        //swap with the current element.
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }

    return arr;
}
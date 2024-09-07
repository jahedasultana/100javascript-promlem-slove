function arrayReplace(inputArray,elementToReplace,subtractionElem){
    inputArray.forEach((element, index) => {
        if(element === elementToReplace){
            inputArray[index] = subtractionElem
        }
    });

    console.log(inputArray);
}

    arrayReplace([1,2,4],1,10)
    console.log(performance.now());

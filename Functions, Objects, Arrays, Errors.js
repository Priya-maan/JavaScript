// excercise 1 : Function

function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}
letterFinder("test", "t")

// excercise 2 : Objects and Arrays

var clothes =[];
clothes.push("Jacket");
clothes.push("Jeans");
clothes.push("tops");
clothes.push("Puffer jacket");
clothes.push("tunic top");
clothes.pop()
clothes.push("turtle neck top");
console.log(clothes[2]);

var favCar = {
    color : "red",
}

favCar.convertible = "true";
console.log(favCar)

//excercise 3 : Error prevention

function addTwoNums(a,b) {
    try {
        if(typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number')
        } else if (typeof(b) != 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch(err) {
        console.log("Error!", err)
    }
}
addTwoNums(5, "5")
console.log("It still works")

//excercise 4 : Defensive programming

function letterFinder(word, match){
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length >= 1;
    if(condition1 == true && condition2 == true){
        for (var i = 0 ; i < word.length ; i++){
            if(word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }      
    }else{
        console.log("Please pass correct arguments to the function.")
    }
}
letterFinder([],[])
letterFinder("cat", "c")
// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

//cats.push("Ralph")
function destructivelyAppendCat(catName){
    cats.push(catName)
}
//destructivelyAppendCat("Ralph")

//cats.unshift('Bob')
function destructivelyPrependCat(catName){
    cats.unshift(catName)
}
//destructivelyPrependCat("Bob")

//cats.pop(-1)
function destructivelyRemoveLastCat(catName){
    cats.pop(catName -1)
}
//destructivelyRemoveLastCat()


//cats.shift()
function destructivelyRemoveFirstCat(catName){
    cats.shift(catName)
}
//destructivelyRemoveFirstCat()

function appendCat(name){
    return name = [...cats, 'Broom']
}
//appendCat()

function prependCat(name){
    return name = ['Arnold',...cats]
}
//prependCat()

//removeLastCat
function removeLastCat(){
    return cats.slice(0,-1) 
}

//removeFirstCat
function removeFirstCat(){
    return cats.slice(1,cats.length) 
}

console.log(removeFirstCat())

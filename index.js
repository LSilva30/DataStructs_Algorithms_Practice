// write a javascript function to get the first element of an array
const array = [2, 4, 1, 3, 7]

function getFirst() {
    return array[0]
}

// console.log(getFirst())


// write a javascript function to get the last element of an array

function getLast() {
    return array[array.length - 1]
}

// console.log(getLast())

// write a javascript to get a given element of an array with the index passed as a parameter

function getParameter(a) {
    return array[a]
}

// console.log(getParameter(4))


/*write a JavaScript function to get the index of an element in an array where 
it's element matches a value passed a parameter*/

function getIndex(element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element){
            return i
        }
    }
}
console.log(getIndex(7))
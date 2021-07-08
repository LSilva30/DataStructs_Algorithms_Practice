// 1. write a javascript function to get the first element of the first array

const arr = [[3, 5, 6, 8, 2], ['Luiz', 'Noah', 'Michelle']]

function getFirstFirst() {
    return arr[0][0]
}

console.log(getFirstFirst())

// 2. write a javascript function to get the last element of the last array

function getLastLast() {
    return arr[arr.length - 1][arr[arr.length - 1].length - 1]
}

console.log(getLastLast())


// 3. write a javascript function to get a given element of a subarray with the indexes passed as a parameter

function getElementFromIndex(index1, index2) {
    return arr[index1][index2]
}

console.log(getElementFromIndex(1, 0))


/* 4.write a javascript function to get the index of an element in a subarray and the index of the subarray
 where its element matches a value passed as a parameter */

function getIndexFromElement(element) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === element) {
                return `${i}, ${j}`
            }
        }
    }
}
console.log(getIndexFromElement('Noah'))
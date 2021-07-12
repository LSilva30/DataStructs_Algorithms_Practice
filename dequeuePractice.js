// 2. Implement dequeue() in JS

const ages = [7, 5, 1, 3, 4]

function deQueue(array){
    for(let i=0; i<array.length; i++){
        array[i] = array[i + 1]
    } 
    array.length = array.length - 1
    return array
}
console.log(deQueue(ages))


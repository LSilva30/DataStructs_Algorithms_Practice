// implement .push() without using ".push()""

const ages = [3, 20, 10, 19, 7]

function forPush(array, num) {
  array[array.length] = num
}

forPush(ages, 50)
console.log(ages)

//------------------------------------------
// implement top in JS

function jsTop(array) {
    return array[array.length -1]
}

const top = jsTop(ages)
console.log(top)


//--------------------------------------------
// implement pop in JS

function jSPop(array){
    return array.length = array.length -1
}

jSPop(ages)
console.log(ages)
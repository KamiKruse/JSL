/// MinMaxKeyinObject
function minMaxKeyInObject(obj){
    let newArr = []
    let keysMax = Object.keys(obj)
    let keysMin = Object.keys(obj)
    let maxkey = Math.max(...keysMax)
    let minkey = Math.min(...keysMin)
    newArr.push(minkey, maxkey)
    return newArr
}
// console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }))
// // [1, 10]
// console.log(minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' }))
// // [1, 4]



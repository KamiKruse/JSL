// add whatever parameters you deem necessary - good luck!
function minMaxKeyInObject(obj){
    let newArr = []
    let keysMax = Object.keys(obj)
    let keysMin = Object.keys(obj)
    let maxkey = Math.max(...keysMax)
    let minkey = Math.min(...keysMin)
    newArr.push(minkey, maxkey)
    return newArr
}

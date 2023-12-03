// add whatever parameters you deem necessary - good luck!
function values(obj){
    let newArray = []
    for(let keys in obj)
    {
        newArray.push(obj[keys])
    }
    return newArray
}

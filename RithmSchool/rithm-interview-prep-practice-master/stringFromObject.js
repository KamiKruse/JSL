// add whatever parameters you deem necessary - good luck!
function stringFromObject(obj){
    let newString = []
    let newArr = Object.entries(obj)
    for(let i=0; i<newArr.length; i++)
    {
        newString.push(newArr[i].join(' = '))
        
    }
    let evenMoreNewString = newString.join(", ")
    return evenMoreNewString
}

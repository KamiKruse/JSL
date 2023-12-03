// add whatever parameters you deem necessary - good luck!
function entries(obj){
    let kvArr = []
    let subArr = []
    for(let key in obj)
    {
        subArr = [key,obj[key]]
        kvArr.push(subArr)
    }
    return kvArr
}

// add whatever parameters you deem necessary - good luck!
function removeFromString(string, startingIndex, charactersToBeRemoved){
    let p1 = ''
    let p2 = ''
    let finalStr = ''
    for(let i=0; i<startingIndex; i++)
    {
         p1 += string[i]
    } 
    for(let i=startingIndex; i<string.length-charactersToBeRemoved; i++)
    {
         p2 += string[i+charactersToBeRemoved]
 
    }
    finalStr = p1 + p2
    return finalStr
}

// add whatever parameters you deem necessary - good luck!
function removeVowels(str){
    let newStr = [...str]
    for(let i=0; i<newStr.length; i++)
    {
        if((newStr[i] == 'a') || (newStr[i] == 'e') || (newStr[i] == 'i') || (newStr[i] == 'o') || (newStr[i] == 'u') || (newStr[i] == 'A') || (newStr[i] == 'E') || (newStr[i] == 'I') || (newStr[i] == 'O') || (newStr[i] == 'U') )
        {
            delete newStr[i]
        }
    }
    return newStr.join('')
}

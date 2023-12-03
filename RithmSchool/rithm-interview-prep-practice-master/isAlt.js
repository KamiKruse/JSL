// add whatever parameters you deem necessary - good luck!
function isAlt(str){
    let alt = false
    for(let i=1; i< str.length-1; i++)
    {
        if(((str[i-1]=== 'a') && (str[i+1]=== 'a')) || (((str[i-1] === 'e') && (str[i+1]=== 'e'))) || (((str[i-1]=== 'i') && (str[i+1]) === 'i')) || ((str[i-1]=== 'o') && ((str[i+1]) === 'o')) || (((str[i-1]=== 'u') && (str[i+1]) === 'u')))
        {
            alt = true
        }
    }
    return alt
}

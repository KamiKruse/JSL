// add whatever parameters you deem necessary - good luck!
function stringIndexOf(word, character){
    for(let i=0; i<word.length; i++)
    {
        if(word[i] === character)
        {
            return i
        }
        
    }
    return -1;
}

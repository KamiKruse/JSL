// add whatever parameters you deem necessary - good luck!
function stringIncludes(word, character){
    for(let i=0; i<word.length; i++)
    {
        if(word[i].toLowerCase() === character.toLowerCase())
        {
            return true;
        }
    }
    return false;    
}

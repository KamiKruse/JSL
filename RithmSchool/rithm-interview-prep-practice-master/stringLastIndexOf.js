// add whatever parameters you deem necessary - good luck!
function stringLastIndexOf(word, character){
    let count = 0
    for(let i=0; i<word.length; i++)
    {
        if(word[i] === character)
        {
            count = i;
        }
        else
        {
            count = -1
        }
    }
    return count
}

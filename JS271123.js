function appendToString(str1, str2){
    return str1 + str2
}
console.log(appendToString("Hello", " World"))

/// Below function simulates CharAt function
function charAt(str, index){
    if(str[index] > str.length)
    {
        return ''
    }
    else
    {
        return str[index]
    }
}
console.log(charAt('awesome', 2))

////Below function is similar to String.includes()
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
console.log(stringIncludes('ViveK', 'K'))


///This function is similar to "string".indexOf() 
function stringIndexOf(word, character){
    for(let i=0; i<word.length; i++)
    {
        if(word[i] === character)
        {
            return i
        }
    }
    return -1
}
console.log(stringIndexOf('awesome', 'g'))


/// "string".lastIndexOf()
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
console.log(stringLastIndexOf('awesome', 't'))


///Repeat Method


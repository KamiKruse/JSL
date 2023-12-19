function countValidNumsInString(str) {
  let count = 0;
    for(let i=0; i<str.length; i++)
    {
        if(parseInt(str[i]))
        {
            count++
        }
    }
 return count   
}

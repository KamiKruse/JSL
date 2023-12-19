function skipVowels(str) {
  let arr = []
  for(let i=0; i<str.length; i++)
  {
      if((str[i] == 'a') || (str[i] == 'e') || (str[i] == 'i') || (str[i] == 'o') || (str[i] == 'u'))
      {
          i++
      }
      else
      {
          arr.push(str[i])
      }
  }
  return arr
}


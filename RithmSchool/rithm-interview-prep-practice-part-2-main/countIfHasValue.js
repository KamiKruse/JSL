function countIfHasValue(obj, num) {
  let count = '' 
  let seen = {}
  let result = ''
  for(let key in obj)
  {
      for(let i=0; i<obj[key].length; i++)
      {
          if(obj[key][i] === num)
          {
              count += key
          }
      }
  }
  for(let i=0; i<count.length; i++)
  {
      let char = count[i]
      if(!seen[char])
      {
          result += char
          seen[char] = true
      }
      
  }

  return result.length
}


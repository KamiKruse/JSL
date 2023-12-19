function scheduleCheck(obj1, obj2) {
  let s1Count = 0
  let s2Count = 0
  for(let key in obj1)
  {
    if(obj1[key] === true)
    {
      s1Count++
    }
      
  }
  for(let key in obj2)
  {
    if(obj2[key] === true)
    {
      s2Count++
    }
  }
  if(s2Count <= s1Count)
  {
      return s2Count
  }
  else
  {
      return s1Count
  }
}

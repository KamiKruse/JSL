function separateLanguages(arr) {
  let obj = {"python": '', "javascript": '', "other": ''}
  let pyCount = 0
  let jsCount = 0
  let otherCount = 0
  let otherArr = []
  for(let i=0; i<arr.length; i++)
  {
      if(arr[i] === "python")
      {
          pyCount++
      }
      else if(arr[i] === "javascript")
      {
          jsCount++
      }
      else
      {
          otherCount++
          otherArr.push(arr[i])
      }
  }
  obj.python = pyCount
  obj.javascript = jsCount
  obj.other = otherArr
  return obj
}


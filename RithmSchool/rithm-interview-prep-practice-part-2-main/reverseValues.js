function reverseValues(arr) {
  let newArr = []
  for(let i=0; i<arr.length; i++)
  {
      if(arr[i]%2 !== 0)
      {
         newArr.push(arr[i])
      }
      else if(arr[i]%2 === 0)
      {
          i += 2
      }
  }
  return newArr.reverse()
}

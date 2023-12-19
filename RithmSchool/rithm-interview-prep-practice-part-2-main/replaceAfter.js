function replaceAfter(arr, val) {
  for(let i=0; i<arr.length; i++)
  {
      if(i === val)
      {
        arr[i] = "Hello"
        arr[i+1] = "world"
      }
  }
  return arr
}

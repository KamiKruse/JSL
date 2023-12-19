function inMatrix(arr, val) {
    let isThere = false
    for(let i=0; i<arr.length; i++)
    {
      for(let j=0; j<arr[i].length; j++)
      {
          if(arr[i][j] === val)
          {
              isThere = true
          }
          isThere
      }
    }
    return isThere;
   }


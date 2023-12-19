function calculateMonthlyOrders(arr) {
  let sum = 0;
  for(let i=0; i<arr.length; i++)
  {
      
       for(let key in arr[i])
       {
           sum +=arr[i][key]
       }
  }
  return sum
}

 
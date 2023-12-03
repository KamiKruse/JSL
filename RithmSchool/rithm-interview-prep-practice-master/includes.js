// add whatever parameters you deem necessary - good luck!
function includes(collection, value, index=0){
    if(Array.isArray(collection) || typeof collection === 'string')
   {
        for(let i=index; i<collection.length; i++)
        {
            if(collection[i]===value)
            {
                return true
            }
        }
   }
   else if(typeof collection === 'object')
   {
        for(let key in collection)
        {
            if(collection[key] === value)
            {
                return true
            }
        }
   }
   return false
}

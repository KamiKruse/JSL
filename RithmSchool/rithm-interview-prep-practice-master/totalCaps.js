// add whatever parameters you deem necessary - good luck!
function totalCaps(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++)
    {
        for(let j=0; j<arr[i].length; j++)
        {
            const charAt = arr[i][j].charCodeAt()
            if(charAt > 64 && charAt < 91)
            {
                count += 1
            }
        }
    }
    return count
}

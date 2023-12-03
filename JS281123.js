
///removeFromString///
///Somehow by trying out different things I managed to arrive at the answer. I understood it though, not internalised it completely. Need to avoid this in the future and thoroughly test on paper before trying out random things that make it work
function removeFromString(string, startingIndex, charactersToBeRemoved){
   let p1 = ''
   let p2 = ''
   let finalStr = ''
   for(let i=0; i<startingIndex; i++)
   {
        p1 += string[i]
   } 
   for(let i=startingIndex; i<string.length-charactersToBeRemoved; i++)
   {
        p2 += string[i+charactersToBeRemoved]
        console.log(p1, p2)
   }
   finalStr = p1 + p2
   return finalStr
}
console.log(removeFromString('Rithm School', 2, 6))

/////////RITHM SCHOOL SOLUTIONS//////////
// converting to an array method
function removeFromString(str, start, removeCount) {
    let arr = str.split('');
    arr.splice(start, removeCount);
    return arr.join('');
  }
  
  // regular method
  function removeFromString(str, start, removeCount) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
      if (i < start || i >= start + removeCount) {
        newStr += str[i];
      }
    }
    return newStr;
  }
////removeFromString('Elie', 2, 2) // 'El'
// removeFromString('Rithm School', 0, 6) // 'School'
///removeFromString('Rithm School', 2, 4) // 'RiSchool'
///removeFromString('Rithm School', 6, 400) // 'Rithm '




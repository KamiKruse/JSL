function checkObj(obj, checkProp) {
    // Only change code below this line
    return obj.hasOwnProperty(checkProp);
    // Only change code above this line
  }

console.log(checkObj({ top: 'hat', bottom: 'pants' }, 'top'))

//////////////////////////////////////////////////

const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };



  function updateRecords(records, id, prop, value) {
   
    if(value === "")
    {
        delete records[id][prop]
    }
    if(prop !== "tracks" && value !== "" )
    {
        records[id][prop] = value
    }
    if(prop === "tracks" && value !== "")
    {
        if(!records[id].hasOwnProperty("tracks"))
        {
            records[id].tracks = [];
            records[id].tracks.push(value)
        }
        else
        {
            records[id][prop].push(value)
        }
    }
   return records
  }


  console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));

//   updateRecords(recordCollection, 2548, "artist", "")
//   updateRecords(recordCollection, 5439, 'artist', 'ABBA');
//   updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")    
//   updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")
//   updateRecords(recordCollection, 1245, "albumTitle", "Riptide")
// If prop is tracks and value isn't an empty string, you need to update the album's tracks array. First, if the album does not have a tracks property, assign it an empty array. Then add the value as the last item in the album's tracks array.//

function findFirstMove(moves, char) {
  let newArr = []
    for(let i=0; i<moves.length; i++)
    {
        for(let j=0; j<moves[i].length; j++)
        {
            if(moves[i][j] === char)
            {
                 return [i,j]
            }
        }
    }
        return -1
}

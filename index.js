function superbowlWin(record){
  let wins = record.find(game =>game["result"] === "W")
  if(wins){
    return wins.year
  }
  else{
    return undefined
  }
    


}

function sliceAndDice(args){
  const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
  };
  
  const newState = Object.assign({}, defaultState, {status: 'online'})

  return newState.status
}
document.getElementById('root').innerHTML = sliceAndDice()
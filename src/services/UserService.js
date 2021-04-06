export const UserService = {
  getUser
}


const user = {
  name: "Steve Rogers",
  coins: 100,
  moves: []
}



function getUser() {
  var currUser = user;
  return currUser
}

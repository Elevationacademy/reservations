const reservations = {
  'Bob': {claimed: false},
  'Ted': {claimed: true},
  'Emma': {claimed: true},
  'Nick': {claimed: false},
  'Mary': {claimed: false}
}

// let name = prompt('Please enter the name for your reservation');

const claimReservation = function () {
  // write your code here!
  let name = document.getElementById("input-name").value
  name = capitalize(name)
  if (hasReservasion(name)) {
    if (reservations[name].claimed) {
      alert("You have already claimed your reservation")
    } else {
      alert("Welcome, " + name)
      reservations[name].claimed = true
    }
  } else {
    alert("We made a new reservation for you. Welcome, " + name)
    newReservation(name)
  }
}

function hasReservasion (user) {
  const allNames = Object.keys(reservations)
  for (let n of allNames) {
    if (user.toLowerCase() == n.toLowerCase()) {
      return true
    }
  }
  return false
}

function capitalize (name) {
  let fixedName = name[0].toUpperCase() + name.slice(1).toLowerCase()
  return fixedName
}

function newReservation (user) { //won't add to reservations (reservations[user] = undefined)
  reservations[user].claimed = true
}

// claimReservation();
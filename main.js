const reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

const name = prompt('Please enter the name for your reservation');

const claimReservation = function () {
  // write your code here!
  if (hasReservasion(name)) {
    if (reservations[name].claimed) {
      alert("You have already claimed your reservation")
    } else {
      alert("Welcome, " + name)
      reservations[name].claimed = true
    }
  } else {
    alert("Sorry, no reservations under that name..")
  }
}

function hasReservasion (name) {
  const names = Object.keys(reservations) // ['Bob', 'Ted']
  for (let n of names) {
    if (name == n) {
      return true
    }
  }
  return false
}

claimReservation();
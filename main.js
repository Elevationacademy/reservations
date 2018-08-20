const reservations = {
  'Bob': {claimed: false},
  'Ted': {claimed: true}
}

const msg = document.getElementById("display-msg")

const claimReservation = function () {
  let name = document.getElementById("input-name").value
  name = capitalize(name)
  if (checkReservasion(name)) {
    reservations[name].claimed = true
  } else {
    newReservation(name)
  }
}

function capitalize (name) {
  return name[0].toUpperCase() + name.slice(1).toLowerCase()
}

function checkReservasion (name) {
  const myRes = reservations[name]
  if (myRes) {
    if(myRes.claimed) {
      displayMessage("you have already claimed your reservation, " + name)
    } else {
      displayMessage("Welcome, " + name + "! Your table is ready!")
    }
    return true
  }
  displayMessage("We don't have a reservation under you name, " + name + ", but luckily we have an empty table!")  
  return false
}

function newReservation (user) {
  reservations[user] = {claimed: true}
}

function displayMessage (text) {
  msg.innerHTML = text
}
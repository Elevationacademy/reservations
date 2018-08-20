const reservations = {
  'Bob': {claimed: false},
  'Ted': {claimed: true}
}

const msg = document.getElementById("display-msg")
const capitalize = name => name[0].toUpperCase() + name.slice(1).toLowerCase()
const createNewReservation = name => reservations[name] = {claimed: true}
const displayMessage = text => msg.innerHTML = text

const claimReservation = function () {
  let name = document.getElementById("input-name").value
  name = capitalize(name)
  if (checkReservasion(name)) {
    reservations[name].claimed = true
  } else {
    createNewReservation(name)
  }
}

const checkReservasion = function (name) {
  const reservation = reservations[name]
  if (!reservation) {
    displayMessage("We don't have a reservation under you name, " + name + ", but luckily we have an empty table!")  
    return false
  }
  if(reservation.claimed) {
    displayMessage("you have already claimed your reservation, " + name)
    return true
  }
  displayMessage("Welcome, " + name + "! Your table is ready!")
  return true
}
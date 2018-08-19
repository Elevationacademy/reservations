const reservations = {
  'Bob': {claimed: false},
  'Ted': {claimed: true},
  'Emma': {claimed: true},
  'Nick': {claimed: false},
  'Mary': {claimed: false},
  'John': {claimed: true},
  'Alex': {claimed: true},
  'Noa': {claimed: false},
  'Nitzan': {claimed: false}
}

// let name = prompt('Please enter the name for your reservation'); //PROMPT

const claimReservation = function () {
  // write your code here!
  let name = document.getElementById("input-name").value //USER INPUT
  name = capitalize(name)
  if (checkReservasion(name)) {
    reservations[name].claimed = true
  } else {
    newReservation(name)
  }
}

function checkReservasion (name) {
  const myRes = reservations[name]
  let hasRes = true
  let msg = document.createElement("p")
  if (myRes) {
    if(myRes.claimed) {
      msg.innerHTML = "Dear " + name + ", you have already claimed your reservation"
    }
    else {
      msg.innerHTML = "Welcome, " + name + "! Your table is ready!"
    }
  } else {
    msg.innerHTML = "Lucky for you " + name + ", we have an empty table."
    hasRes = false
  }
  document.getElementById("welcome").appendChild(msg)
  return hasRes
}

function capitalize (name) {
  let fixedName = name[0].toUpperCase() + name.slice(1).toLowerCase()
  return fixedName
}

function newReservation (user) {
  reservations[user] = {claimed: true}
}

// claimReservation(); //PROMPT
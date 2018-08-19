var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

let namesArray=Object.keys(reservations)
let c=0;
var claimReservation= function(input){
let name= document.getElementById("input").value;
  for(let i of namesArray){
  name = name.toLowerCase();
  var x=i.toLowerCase();
    if (name==x){
      if(reservations[i].claimed==false){
      document.getElementById("live").innerHTML = (i+" welcome");
      reservations[i].claimed==true
      }
      else if(reservations[i].claimed==true){
      document.getElementById("live").innerHTML = (i+" someone has alrady claimed your reservation");
      }
      c++;
    }
  }
  if(c==0){
  let newName = name
  name = {claimed:true};
  reservations[newName] = name
  namesArray.push(newName)
  document.getElementById("live").innerHTML = (newName+" there is a new reservation under your name");
  console.log(namesArray)
  }
c=0
}


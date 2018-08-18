var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

let name = prompt('Please enter the name for your reservation');
let namesArray=Object.keys(reservations)
let c=0;
let claimReservation = function () {
for(let i of namesArray){
  name.toLowerCase();
  let x=i.toLowerCase();
  if (name==x){
   if(reservations[i].claimed==false){
   alert("welcome "+i)
     }
    else if(reservations[i].claimed==true){
     alert(i+" someone has alrady claimed your reservation")
     }
     c++;
    }
  }
  if(c==0){
    let newName = name
    name = {claimed:true};
    reservations[newName] = name
    alert(newName+" there is a new reservation under your name") 
  }
}

claimReservation();

// let namesArray=Object.keys(reservations)
// let c=0;
// var name="";
// var claimReservation= function(name){
// name= document.getElementById("input").value;
// for(let i of namesArray){
// name.toLowerCase();
// var x=i.toLowerCase();
// if (name==x){
// if(reservations[i].claimed==false){
// document.getElementById("live").innerHTML = (i+" welcome");
//       }
// else if(reservations[i].claimed==true){
// document.getElementById("live").innerHTML = (i+" someone has alrady claimed your reservation");
//       }
// c++;
//     }
//  }
//  if(c==0){
//  let newName = name
//  name = {claimed:true};
//  reservations[newName] = name
//  namesArray.push(newName)
//  document.getElementById("live").innerHTML = (newName+" there is a new reservation under your name");
//  }
// c=0
// }
// let navigationSelect = document.getElementById('input')
// navigationSelect.addEventListener('change',  claimReservation);

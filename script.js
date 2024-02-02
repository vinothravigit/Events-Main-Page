

  function evAlert1(){
      let remain = document.getElementById("st1").innerHTML;
      document.getElementById("st1").innerHTML = +remain - 1;
      if(document.getElementById("st1").innerHTML < 1){
        document.getElementById("st1").innerHTML = "Sold Out"
        document.getElementById("b1").disabled = true;
        
      }
      if(document.getElementById("st1").innerHTML === 0){
        document.getElementById("st1").innerHTML = "Sold Out"
      }
      else{
        alert("1 Ticket Booked Successfuly");
      }

}
function evAlert2(){
  let remain = document.getElementById("st2").innerHTML;
  document.getElementById("st2").innerHTML = +remain - 1;
  if(document.getElementById("st2").innerHTML < 1){
    document.getElementById("st2").innerHTML = "Sold Out"
    document.getElementById("b2").disabled = true;
    
  }
  if(document.getElementById("st2").innerHTML === 0){
    document.getElementById("st2").innerHTML = "Sold Out"
  }
  else{
    alert("1 Ticket Booked Successfuly");
}
}

function evAlert3(){
  let remain = document.getElementById("st3").innerHTML;
  document.getElementById("st3").innerHTML = +remain - 1;
  if(document.getElementById("st3").innerHTML < 1){
    document.getElementById("st3").innerHTML = "Sold Out"
    document.getElementById("b3").disabled = true;
    
  }
  if(document.getElementById("st3").innerHTML === 0){
    document.getElementById("st3").innerHTML = "Sold Out"
  }
  else{
    alert("1 Ticket Booked Successfuly");
}
}
function evAlert4(){
  let remain = document.getElementById("st4").innerHTML;
  document.getElementById("st4").innerHTML = +remain - 1;
  if(document.getElementById("st4").innerHTML < 1){
    document.getElementById("st4").innerHTML = "Sold Out"
    document.getElementById("b4").disabled = true;
    
  }
  if(document.getElementById("st4").innerHTML === 0){
    document.getElementById("st4").innerHTML = "Sold Out"
  }
  else{
    alert("1 Ticket Booked Successfuly");
}
}

function evAlert5(){
  let remain = document.getElementById("st5").innerHTML;
  document.getElementById("st5").innerHTML = +remain - 1;
  if(document.getElementById("st5").innerHTML < 1){
    document.getElementById("st5").innerHTML = "Sold Out"
    document.getElementById("b5").disabled = true;
    
  }
  if(document.getElementById("st5").innerHTML === 0){
    document.getElementById("st5").innerHTML = "Sold Out"
  }
  else{
    alert("1 Ticket Booked Successfuly");
}

}
function evAlert6(){
  let remain = document.getElementById("st6").innerHTML;
  document.getElementById("st6").innerHTML = +remain - 1;
  if(document.getElementById("st6").innerHTML < 1){
    document.getElementById("st6").innerHTML = "Sold Out"
    document.getElementById("b6").disabled = true;
    
  }
  if(document.getElementById("st6").innerHTML === 0){
    document.getElementById("st6").innerHTML = "Sold Out"
  }
  else{
    alert("1 Ticket Booked Successfuly");
}

}
function evAlert7(){
  let remain = document.getElementById("st7").innerHTML;
  document.getElementById("st7").innerHTML = +remain - 1;
  if(document.getElementById("st7").innerHTML < 1){
    document.getElementById("st7").innerHTML = "Sold Out"
    document.getElementById("b7").disabled = true;
    
  }
  if(document.getElementById("st7").innerHTML === 0){
    document.getElementById("st7").innerHTML = "Sold Out"
  }
  else{
    alert("1 Ticket Booked Successfuly");
}

}
function evAlert8(){
  let remain = document.getElementById("st8").innerHTML;
  document.getElementById("st8").innerHTML = +remain - 1;
  if(document.getElementById("st8").innerHTML < 1){
    document.getElementById("st8").innerHTML = "Sold Out"
    document.getElementById("b8").disabled = true;
    
  }
  if(document.getElementById("st8").innerHTML === 0){
    document.getElementById("st8").innerHTML = "Sold Out"
  }
  else{
    alert("1 Ticket Booked Successfuly");
}
}

function searchval(){
  let searchText = document.getElementById("searchbar").value.toLowerCase();
  let card = document.getElementsByClassName("card-title");

  for (var i = 0; i < card.length; i++) {
      let cardText = card[i].innerText.toLowerCase();
      if (cardText.includes(searchText)) {
          document.getElementsByClassName("card")[i].style.display = "block";
      } else {
        document.getElementsByClassName("card")[i].style.display = "none";
      }
 }
}
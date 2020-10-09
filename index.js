  function buttonFire(value){
     document.getElementById('answerInput').value += value;
  }

  function clearDisplay(){
    document.getElementById("answerInput").value = "";
  }

  function solve(){
  var valueStore = document.getElementById("answerInput").value;
  var valueSolve = eval(valueStore)
  document.getElementById("answerInput").value = valueSolve
  }

  function cosFucntion(){ 
     var valueStore = document.getElementById('answerInput').value;
     //alert(valueStore)
     var ans2 = Math.cos(valueStore).toFixed(8);
     //alert(ans2);
     document.getElementById("answerInput").value= ans2;
  }


  function sinFunction(){ 
     var valueStore = document.getElementById('answerInput').value;
     //alert(valueStore)
     var ans2 = Math.sin(valueStore).toFixed(8);
     //alert(ans2);
     document.getElementById("answerInput").value= ans2;
  }

  function tanFunction(){ 
     var valueStore = document.getElementById('answerInput').value;
     //alert(valueStore)
     var ans2 = Math.tan(valueStore).toFixed(8);
     //alert(ans2);
     document.getElementById("answerInput").value= ans2;
  }

  function sqrtFunction(){
  //alert("sddsasad"); 
     var valueStore = document.getElementById('answerInput').value;
     //alert(valueStore)
     var ans2 = Math.sqrt(valueStore);
     //alert(ans2);
     document.getElementById("answerInput").value= ans2;
  }

  function logFunction(){
  //alert("sddsasad"); 
     var valueStore = document.getElementById('answerInput').value;
     //alert(valueStore)
     var ans2 = Math.log(valueStore);
     //alert(ans2);
     document.getElementById("answerInput").value= ans2;
  }
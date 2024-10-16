function register(){

    var name = document.getElementtById("name").value;
        
    var email= document.getElementById("email").value;
    
    var password= document.getElementById("password").value;
    
    var form= new FormData();
    
    form.append("n", name);
    form.append("e", email); 
    form.append("p", password);
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
    
    if(request.readyState == 4 && request.status == 200) {
    
    var response = request.responseText;

    if(response == "success"){

        document.getElementById("error").className = "d-block text-success";
        document.getElementById("error").innerHTML = "Succesfully Regsterd !";
      
    }else{

        document.getElementById("error").className = "d-block text-danger";
        document.getElementById("error").innerHTML = response;
    }
    
  
    
    }
}
    request.open("POST", "registerProcess.php", true);
    
    request.send(form);

}
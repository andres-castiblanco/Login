function clicked() {

	var user = document.getElementById('username');
	var pass = document.getElementById('password');
	
	var coruser = "Quindio";
	var corpass = "200514";
	
	if(user.value == coruser) {
	
		if(pass.value == corpass) {
		
			/*window.alert("You are logged in as " + user.value);*/
			window.open("https://andres-castiblanco.github.io/Quindio/","_self");
		
		} else {
		
			window.alert("Usuario o clave incorrecta!, Vuelva a intentar");
		
		}

	
	} 

	var coruser1 = "FExE";
	var corpass1 = "011220";

	if(user.value == coruser1) {
	
		if(pass.value == corpass1) {
		
			/*window.alert("You are logged in as " + user.value);*/
			window.open("https://andres-castiblanco.github.io/FExE/","_self");
		
		} else {
		
			window.alert("Usuario o clave incorrecta!, Vuelva a intentar!");
		
		}
	
	} 

var coruser2 = "CV";
	var corpass2 = "012345";

	if(user.value == coruser2) {
	
		if(pass.value == corpass2) {
		
			/*window.alert("You are logged in as " + user.value);*/
			window.open("https://andres-castiblanco.github.io/CV/","_self");
		
		} else {
		
			window.alert("Usuario o clave incorrecta!, Vuelva a intentar!");
		
		}
	
	} 


	else {
		
			window.alert("Incorrect username or password!");
		
		}

}


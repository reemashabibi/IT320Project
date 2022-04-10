/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */
function validationLogIn(){
	var f = document.formEmpLog;
	
	if(formEmpLog.ID.value == "" || formEmpLog.pass.value == ""){
	alert("please fill in all the fields");
	formEmpLog.reset();	
	return false;
	
	}
	
		
		
	location.replace("adminHome.html");

}




function validationSignup(){
	
	
	if(formSign.ID.value == "" || formSign.pass.value == "" || formSign.firstName.value == "" || formSign.lastName.value == "" ){
	alert("please fill in all the fields");	
	return false;
	
	}
	

		
	if(formSign.pass.value.length < 4){
		alert("please make your password longer");
		formSign.pass.focus();	
			return false;
	}	
	if(formSign.firstName.value.match(/\d/g)){
	alert("write your first name correctly");
	formSign.firstName.focus();	
			return false;
	}
	
	if(formSign.lastName.value.match(/\d/g)){
	alert("write your last name correctly");
	formSign.lastName.focus();	
			return false;
	}
		
	formSign.reset();	
		
	location.replace("adminHome.html");
}



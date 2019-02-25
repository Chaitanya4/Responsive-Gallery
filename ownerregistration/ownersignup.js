function validation()
{
	var fname = document.forms["register"]["fname"];   
	var mname = document.forms["register"]["mname"]; 
	var lname = document.forms["register"]["lname"]; 	
    var emailid = document.forms["register"]["emailid"];    
    var mobile = document.forms["register"]["mobile"];  
	var companyid = document.forms["register"]["companyid"];  
    var VerificationCode =  document.forms["register"]["VerificationCode"];  
   
    if (fname.value == "")                                  
    { 
        window.alert("Please enter your first name."); 
        fname.focus(); 
        return false; 
    } 
    if (mname.value == "")                                  
    { 
        window.alert("Please enter your middle name."); 
        mname.focus(); 
        return false; 
    } 
	 if (lname.value == "")                                  
    { 
        window.alert("Please enter your last name."); 
        lname.focus(); 
        return false; 
    } 
    if (emailid.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        emailid.focus(); 
        return false; 
    } 
   
    if (emailid.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        emailid.focus(); 
        return false; 
    } 
   
    if (emailid.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        emailid.focus(); 
        return false; 
    } 
   
    if (mobile.value == "")                           
    { 
        window.alert("Please enter your mobile number."); 
        mobile.focus(); 
        return false; 
    } 
	if (companyid.value == "")                           
    { 
        window.alert("Please enter company registration id"); 
        mobile.focus(); 
        return false; 
    } 
    if (VerificationCode.value == "")                                   
    { 
        window.alert("Please enter a Verification Code"); 
        VerificationCode.focus(); 
        return false; 
    } 
  
   
    return true; 
}
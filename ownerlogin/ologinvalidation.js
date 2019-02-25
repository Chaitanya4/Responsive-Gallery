function validateologin()
{               
    var email = document.forms["OLogin"]["email"];    
 var password1 = document.forms["OLogin"]["password1"]; 
 var verificationcode = document.forms["OLogin"]["verificationcode"]; 
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (password1.value == "")                           
    { 
        window.alert("Please enter a password"); 
        password1.focus(); 
        return false; 
    } 
    if (verificationcode.value == "")                                   
    { 
        window.alert("Please enter a verification code"); 
        verificationcode.focus(); 
        return false; 
    } 
  
   
    return true; 
}
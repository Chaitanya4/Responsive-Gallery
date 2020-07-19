function validate()
{
	var name = document.forms["contactus"]["name"];               
    var email = document.forms["contactus"]["email"];    
    var phone = document.forms["contactus"]["phone"];  
    var message =  document.forms["contactus"]["message"];  
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
   
    if (email.value == "")                                   
    { 
        window.alert("Please enter a e-mail address."); 
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
   
    if (phone.value == "")                           
    { 
        window.alert("Please enter your mobile number."); 
        phone.focus(); 
        return false; 
    } 
    if (message.value == "")                                   
    { 
        window.alert("Please enter a message"); 
        email.focus(); 
        return false; 
    } 
  
   
    return true; 
}
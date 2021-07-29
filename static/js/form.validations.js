function VALIDATEILLNESS()                                    
{   
    var comp_signs = document.forms["IllnessForm"]["comp_signs"];
    var illness = document.forms["IllnessForm"]["illness"];               
    var gender = document.forms["IllnessForm"]["gender"];    
    var telno = document.forms["IllnessForm"]["telno"];  
    var username =  document.forms["IllnessForm"]["username"];  
    var state = document.forms["IllnessForm"]["state"];  
    var city = document.forms["IllnessForm"]["city"];  
    
    

    //Defining some standard formats
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var numbers = /^[0-9]+$/;
    var alphanumeric = /^[a-zA-Z][0-9]$/;
    var alphabets = /^[a-zA-Z]+$/;

    if (comp_signs.value == "")                                  
    { 
       
    }  else{


    }

    if (illness.value == "")                                  
    { 
        window.alert("Please  explain sickness."); 
        name.focus(); 
        return false; 
    } 

    



    if (gender.value == "")                               
    { 
        window.alert("Please select your gender."); 
        name.focus(); 
        return false; 
    } 
       
    if (telno.value == "")                                   
    { 
        window.alert("Please enter a Mobile phonenumber"); 
        telno.focus(); 
        return false; 
    } 

     if (username.value == "")                                   
    { 
        window.alert("Please enter a Username"); 
        username.focus(); 
        return false; 
    } 
   

    if(username.value.match(alphabets)){
            


    }
    else{

        window.alert("Username must be explained  in alphabets."); 
        username.focus(); 
        return false; 

    }
    if(username.value.length > 3){

    }

    else{
        window.alert("Username must be greater  than  3 digits."); 
        username.focus(); 
        return false; 


    }

    if(username.value.length < 8){

    }

    else{
        window.alert("Username must be less than  8 digits."); 
        username.focus(); 
        return false; 


    }




    if (state.value == "")                                   
    { 
        window.alert("Please select a country"); 
        state.focus(); 
        return false; 
    } 

    if (city.value == "")                                   
    { 
        window.alert("Please select a city"); 
        state.focus(); 
        return false; 
    } 



  

   
    return true; 
}

 


 // Validate lab tests
 function VALIDATELABTESTS()                                    
{   
    var drug = document.forms["LabtestsForm"]["drug"];   
    var telno = document.forms["LabtestsForm"]["telno"]; 
    var city = document.forms["LabtestsForm"]["city"];  
    var aArea =  document.forms["LabtestsForm"]["Area"];  
   
    

    //Defining some standard formats
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var numbers = /^[0-9]+$/;
    var alphanumeric = /^[a-zA-Z][0-9]$/;
    var alphabets = /^[a-zA-Z]+$/;


    if (drug.selectedIndex < 1)                                  
    { 
        window.alert("Please  select a blood test."); 
        drug.focus(); 
        return false; 
    } 

     if (telno.value == "")                                   
    { 
        window.alert("Please enter a Mobile phonenumber"); 
        telno.focus(); 
        return false; 
    } 


    if (city.selectedIndex < 1 )                                   
    { 
        window.alert("Please select a city"); 
        state.focus(); 
        return false; 
    } 

    if (aArea.selectedIndex < 1)                                   
    { 
        window.alert("Please select your area"); 
        aArea.focus(); 
        return false; 
    } 

    


    return true; 
}





 // Validate ambulance order
 function VALIDATEORDERAMB()                                    
{   
    
    var city = document.forms["AmbForm"]["city"]; 
    var aArea =  document.forms["AmbForm"]["Area"]; 
    var telno = document.forms["AmbForm"]["telno"];  
    var condition = document.forms["AmbForm"]["condition"]; 
    
     
      
   
    

    //Defining some standard formats
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var numbers = /^[0-9]+$/;
    var alphanumeric = /^[a-zA-Z][0-9]$/;
    var alphabets = /^[a-zA-Z]+$/;

    if (city.selectedIndex < 1 )                                   
    { 
        window.alert("Please select a city"); 
        city.focus(); 
        return false; 
    } 

    if (aArea.selectedIndex < 1)                                   
    { 
        window.alert("Please select your area"); 
        aArea.focus(); 
        return false; 
    } 

     if (telno.value == "")                                   
    { 
        window.alert("Please enter a Mobile phonenumber"); 
        telno.focus(); 
        return false; 
    } 



    if (condition.value == "")                                  
    { 
        window.alert("Please  enter condition."); 
        condition.focus(); 
        return false; 
    } 


    return true; 
}



// Validate Uer Login input fields
 function VALIDATELOGIN()                                    
{   
    
    var username = document.forms["LoginUserForm"]["username"];  
    var password = document.forms["LoginUserForm"]["password"]; 
    
     
      
   
    

    //Defining some standard formats
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var numbers = /^[0-9]+$/;
    var alphanumeric = /^[a-zA-Z][0-9]$/;
    var alphabets = /^[a-zA-Z]+$/;


     if (username.value == "")                                   
    { 
        window.alert("Please enter a Username"); 
        username.focus(); 
        return false; 
    } 

    
    if(username.value.length > 3){

    }

    else{
        window.alert("Username must be greater  than  3 digits."); 
        username.focus(); 
        return false; 


    }

    if(username.value.length < 8){

    }

    else{
        window.alert("Username must be less than  8 digits."); 
        username.focus(); 
        return false; 


    }




    if (password.value == "")                                  
    { 
        window.alert("Please  enter password."); 
        password.focus(); 
        return false; 
    } 

      if(password.value.length > 3){

    }

    else{
        window.alert("Password must be greater than  3 digits."); 
        password.focus(); 
        return false; 


    }


    if(password.value.length < 10){

    }

    else{
        window.alert("Password  must be less than  10 digits."); 
        password.focus(); 
        return false; 


    }


    return true; 
}



// Validate Order Drug  input fields
 function VALIDATEORDERMED()                                    
{   
    
    var drug=document.getElementsByName("drug[]");
    var amount=document.getElementsByName("amount[]");
    var telno = document.forms["OrderDrugsForm"]["telno"]; 
    var username = document.forms["OrderDrugsForm"]["username"]; 
    var city = document.forms["OrderDrugsForm"]["city"]; 
    var area = document.forms["OrderDrugsForm"]["area"]; 

    
     
      
   
    

    //Defining some standard formats
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var numbers = /^[0-9]+$/;
    var alphanumeric = /^[a-zA-Z][0-9]$/;
    var alphabets = /^[a-zA-Z]+$/;

    for (i=0; i<drug.length; i++)

            {
             if (drug[i].value == "")
                {
                 alert('Complete all the  Drug fields');      
                 return false;
                }

             if(drug[i].value.match(alphabets)){
            


            }
            else{

                window.alert("Drug must be entered  in alphabets."); 
                drug[i].focus(); 
                return false; 

            }


            }


    for (i=0; i<amount.length; i++)
            {
             if (amount[i].value == "")
                {
                 alert('Complete all the  Amount fields');      
                 return false;
                }

            if(amount[i].value.match(numbers)){
            


            }
            else{

                window.alert("Amount must be entered  in numbers."); 
                amount[i].focus(); 
                return false; 

            }


            }



    if (telno.value == "")                                  
    { 
        window.alert("Please  enter Mobile phonenumber."); 
        telno.focus(); 
        return false; 
    } 


     if (username.value == "")                                   
    { 
        window.alert("Please enter a Username"); 
        username.focus(); 
        return false; 
    } 

    
    if(username.value.length > 3){

    }

    else{
        window.alert("Username must be greater  than  3 digits."); 
        username.focus(); 
        return false; 


    }

    if(username.value.length < 8){

    }

    else{
        window.alert("Username must be less than  8 digits."); 
        username.focus(); 
        return false; 


    }




    if (city.selectedIndex < 1 )                                   
    { 
        window.alert("Please select a city"); 
        city.focus(); 
        return false; 
    } 

    if (area.selectedIndex < 1)                                   
    { 
        window.alert("Please select your area"); 
        area.focus(); 
        return false; 
    } 



     

    return true; 
}



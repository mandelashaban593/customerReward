$(function() {

//https://sweetalert2.github.io/   Alert link in the web
    

    // Delete post on click
    $("#talk").on('click', 'a[id^=delete-post-]', function(){
        var post_primary_key = $(this).attr('id').split('-')[2];
        console.log(post_primary_key) // sanity check
        delete_post(post_primary_key);
    });

   
  
// Ambulance Order 
//city,Area, address, countryCode, phone, username, deliv_fee, 
// Submit post on submit
    $('#post-form2').on('submit', function(event){
        event.preventDefault();
        if ($('#city').val() === ""||$('#Area').val() === ""||$('#address').val() === ""||$('#username').val() === "") {
              
                return false;
            }
        if($('#telno').val() === ""){
         alert("Phone number required"); 
           return false;
        }
        console.log("form submitted!")  // sanity check
        create_post2();
    });

function create_post2() {
        console.log("create post is working!") // sanity check
        $.ajax({
            url : "/patient/orderambAjax/", // the endpoint
            type : "POST", // http method
            data : { city : $('#city').val(),area : $('#area').val() ,address : $('#address').val() ,countryCode: $('#countryCode').val() ,telno: $('#telno').val() ,username: $('#username').val() ,deliv_fee : $('#deliv_fee').val()  }, // data sent with the post request
            // handle a successful response
            success : function(json) {
                $('#post-text').val(''); // remove the value from the input
                console.log(json); // log the returned json to the console
                $("#talk").prepend("<li id='post-"+json.postpk+"'><strong>"+json.text+"</strong> - <em> "+json.author+"</em> - <a id='delete-post-"+json.postpk+"'>delete me</a></li>");
               
                if (json.Status == "OK") {
                Swal.fire(
              'Good job!',
              'You successfully ordered medicines!',
              'success'
               )
                }

                if (json.Status == -2) {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Invalid phone number!',
                  footer: ''
                })

                }

                if (json.Status == 2) {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Payment failed due to insufficient balance on your mobile number. Atleast 4050 ugx shillings required!',
                  footer: ''
                })

                }

                if (json.Status == "None") {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Payment failed due to network problem and we will get back soon to help you!',
                  footer: ''
                })

                }

                if (json.Status == "-21") {

                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: ' Your  IP address is not permitted to carry out transactions on this account!',
                  footer: ''
                })

                }




             if (json.StatusCode == "None") {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Please use  *165# to complete the payment!',
                  footer: ''
                })

            }



            if (json.StatusCode == 2) {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Payment failed due to insufficient balance on your mobile number. Atleast 4050 ugx shillings required!',
                  footer: ''
                })

            }

            if (json.StatusCode == 4) {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Please use  *165# to complete the payment! or try again',
                  footer: ''
                })

            }

            


            },
            // handle a non-successful response
            error : function(xhr,errmsg,err) {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: ' We have encountered an error:',
                  footer: ''
                })

            

                 // add the error to the dom
                console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
            }
        });
    };












// Edit profile O
//city,Area, address, countryCode, phone, username, deliv_fee, 
// Submit post on submit
    $('#myprofile-form').on('submit', function(event){
        event.preventDefault();
        if ($('#email').val() === ""||$('#username').val() === "") {
              
                return false;
            }
        if($('#email').val() === ""){
         alert("Email required"); 
           return false;
        }
        console.log("form submitted!")  // sanity check
        myprofile_post();
    });

function myprofile_post() {
        console.log("create post is working!") // sanity check
        $.ajax({
            url : "/accounts/edit_profile/", // the endpoint
            type : "POST", // http method
            data : { email : $('#email').val(), username : $('#username').val() }, // data sent with the post request
            // handle a successful response
            success : function(json) {
              
                if (json.Status == "OK") {
                Swal.fire(
              'Good job!',
              'Profile successfully updated!',
              'success'
               )
                }

                if (json.Status == "No") {
                Swal.fire(
              'Good job!',
              'Profile remain unchanged!',
              'success'
               )
                }


             

            


            },
            // handle a non-successful response
            error : function(xhr,errmsg,err) {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: ' We have encountered an error:',
                  footer: ''
                })

            

                 // add the error to the dom
                console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
            }
        });
    };






// Edit profile O
//city,Area, address, countryCode, phone, username, deliv_fee, 
// Submit post on submit
    $('#doctmyprofile-form').on('submit', function(event){
        event.preventDefault();
        if ($('#email').val() === ""||$('#username').val() === "") {
              
                return false;
            }
        if($('#email').val() === ""){
         alert("Email required"); 
           return false;
        }
        console.log("form submitted!")  // sanity check
        doctmyprofile_post();
    });

function doctmyprofile_post() {
        console.log("create post is working!") // sanity check
        $.ajax({
            url : "/accounts/doctedit_profile/", // the endpoint
            type : "POST", // http method
            data : { email : $('#email').val(), username : $('#username').val() }, // data sent with the post request
            // handle a successful response
            success : function(json) {
              
                if (json.Status == "OK") {
                Swal.fire(
              'Good job!',
              'Profile successfully updated!',
              'success'
               )
                }

                if (json.Status == "No") {
                Swal.fire(
              'Good job!',
              'Profile remain unchanged!',
              'success'
               )
                }


             

            


            },
            // handle a non-successful response
            error : function(xhr,errmsg,err) {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: ' We have encountered an error:',
                  footer: ''
                })

            

                 // add the error to the dom
                console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
            }
        });
    };



// Edit profile O
//city,Area, address, countryCode, phone, username, deliv_fee, 
// Submit post on submit
    $('#changepass-form').on('submit', function(event){
        event.preventDefault();
        if ($('#cur_pwd').val() === ""||$('#new_pwd').val() === ""||$('#confirm_pwd').val() === "") {
              
                return false;
            }
        if($('#cur_pwd').val() === ""){
         alert("Current password required"); 
           return false;
        }

  

        console.log("form submitted!")  // sanity check
        changepass_post();
    });



function changepass_post() {
        console.log("create post is working!") // sanity check
        $.ajax({
            url : "/accounts/changepass/", // the endpoint
            type : "POST", // http method
            data : { cur_pwd : $('#cur_pwd').val(), new_pwd: $('#new_pwd').val(), confirm_pwd: $('#confirm_pwd').val() }, // data sent with the post request
            // handle a successful response
            success : function(json) {
              
                if (json.Status == "OK") {
                Swal.fire(
              'Good job!',
              'password changed successfully!',
              'success'
               )
                }



                if (json.Status == "No") {
                
                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'New password is equal to current password!',
                      footer: ''
                    })

                }


             
             $("#cur_pwd").val("");
             $("#new_pwd").val("");
             $("#confirm_pwd").val("");

            


            },
            // handle a non-successful response
            error : function(xhr,errmsg,err) {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: ' We have encountered an error:',
                  footer: ''
                })

            

                 // add the error to the dom
                console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
            }
        });
    };





// Edit profile O
//city,Area, address, countryCode, phone, username, deliv_fee, 
// Submit post on submit
    $('#doctchangepass-form').on('submit', function(event){
        event.preventDefault();
        if ($('#cur_pwd').val() === ""||$('#new_pwd').val() === ""||$('#confirm_pwd').val() === "") {
              
                return false;
            }
        if($('#cur_pwd').val() === ""){
         alert("Current password required"); 
           return false;
        }

  

        console.log("form submitted!")  // sanity check
        doctchangepass_post();
    });



function doctchangepass_post() {
        console.log("create post is working!") // sanity check
        $.ajax({
            url : "/accounts/doctchangepass/", // the endpoint
            type : "POST", // http method
            data : { cur_pwd : $('#cur_pwd').val(), new_pwd: $('#new_pwd').val(), confirm_pwd: $('#confirm_pwd').val() }, // data sent with the post request
            // handle a successful response
            success : function(json) {
              
                if (json.Status == "OK") {
                Swal.fire(
              'Good job!',
              'password changed successfully!',
              'success'
               )
                }



                if (json.Status == "No") {
                
                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'New password is equal to current password!',
                      footer: ''
                    })

                }


             
             $("#cur_pwd").val("");
             $("#new_pwd").val("");
             $("#confirm_pwd").val("");

            


            },
            // handle a non-successful response
            error : function(xhr,errmsg,err) {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: ' We have encountered an error:',
                  footer: ''
                })

            

                 // add the error to the dom
                console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
            }
        });
    };






// Add Prescription O
//city,Area, address, countryCode, phone, username, deliv_fee, 
// Submit post on submit
    $('#addpresc-form').on('submit', function(event){
        event.preventDefault();
        if ($('#name').val() === ""||$('#address').val() === ""||$('#dob').val() === ""||$('#presc').val() === "") {
              
                return false;
            }
    
  

        console.log("form submitted!")  // sanity check
        addpresc_post();
    });




function addpresc_post() {
        console.log("create post is working!") // sanity check
        $.ajax({
            url : "/patient/addpresc2/", // the endpoint
            type : "POST", // http method
            data : { name : $('#name').val(), address: $('#address').val(), dob: $('#dob').val(), presc: $('#presc').val() }, // data sent with the post request
            // handle a successful response
            success : function(json) {
              
                if (json.Status == "OK") {
                Swal.fire(
              'Good job!',
              'Prescription added successfully!',
              'success'
               )
                }



                if (json.Status == "No") {
                
                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'New password is equal to current password!',
                      footer: ''
                    })

                }


             
             $("#name").val("");
             $("#address").val("");
             $("#dob").val("");
             $("#presc").val("");

            


            },
            // handle a non-successful response
            error : function(xhr,errmsg,err) {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: ' We have encountered an error:',
                  footer: ''
                })

            

                 // add the error to the dom
                console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
            }
        });
    };






   
// Labtest  Order 
//city,Area, address, countryCode, phone, username, deliv_fee, 
// Submit post on submit
    $('#labtest-form2').on('submit', function(event){
        event.preventDefault();

         if ($('#telno').val() === ""||$('#countryCode').val() === ""||$('#city').val() === ""||$('#Area').val() === ""||$('#address').val() === "") {
              
                return false;
            }

        console.log("form submitted!")  // sanity check
        labtest();
    });



function labtest() {
        console.log("create post is working!") // sanity check
        $.ajax({
            url : "/labtests/labtest/", // the endpoint
            type : "POST", // http method
            data : { telno : $('#telno').val(),countryCode : $('#countryCode').val() ,city : $('#city').val() ,Area: $('#Area').val() ,address: $('#address').val() ,member: $('#member').val() ,member2 : $('#member2').val(),serv_fee: $('#serv_fee').val()}, // data sent with the post request
            // handle a successful response
            success : function(json) {
                $('#post-text').val(''); // remove the value from the input
                console.log(json); // log the returned json to the console
              
                if (json.Status == "OK") {
                      Swal.fire(
                    'Good job!',
                    'You successfully ordered medicines!',
                    'success'
                     )
                }

                if (json.Status == -2) {
                
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Invalid phone number!',
                    footer: ''
                  })

                }

                if (json.Status == 2) {
                
                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'Payment failed due to insufficient balance on your mobile number. Atleast 4050 ugx shillings required!',
                      footer: ''
                    })

                }

                if (json.Status == "None") {
                
                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'Please use  *165# to complete the payment!',
                      footer: ''
                    })

                }

                if (json.Status == "-21") {

                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: ' Your  IP address is not permitted to carry out transactions on this account!',
                  footer: ''
                })

                }




            if (json.StatusCode == 2) {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Payment failed due to insufficient balance on your mobile number. Atleast 4050 ugx shillings required!',
                  footer: ''
                })

            }

            if (json.StatusCode == 4) {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Please use  *165# to complete the payment! or try again',
                  footer: ''
                })

            }



            },
            // handle a non-successful response
            error : function(xhr,errmsg,err) {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: ' We have encountered an error:',
                  footer: ''
                })

            

                 // add the error to the dom
                console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
            }
        });
    };




// Labtest  Order 
//city,Area, address, countryCode, phone, username, deliv_fee, 
// Submit post on submit
    $('#med-form').on('submit', function(event){
        event.preventDefault();

         if ($('#city').val() === ""||$('#area').val() === ""||$('#address').val() === ""||$('#phone').val() === ""||$('#age').val() === "") {
              
                return false;
            }

        console.log("form submitted!")  // sanity check
        
    });


        


   
// Medicine  Order 
//city,Area, address, countryCode, phone, username, deliv_fee, 
// Submit post on submit
    $('#medicine-form2').on('submit', function(event){
        event.preventDefault();
        console.log("form submitted!")  // sanity check
        medicine();
    });


function medicine() {
        console.log("create post is working!") // sanity check
        $.ajax({
            url : "/medicines/comfirmOrderMed/", // the endpoint
            type : "POST", // http method
            data : { drugs: $('#drugs').val(),tot_amount : $('#tot_amount').val() ,telno : $('#telno').val() ,address: $('#address').val() ,med_id : $('#med_id').val() ,area: $('#area').val() }, // data sent with the post request
            // handle a successful response
            success : function(json) {
                $('#post-text').val(''); // remove the value from the input
                console.log(json); // log the returned json to the console
                $("#talk").prepend("<li id='post-"+json.postpk+"'><strong>"+json.text+"</strong> - <em> "+json.author+"</em> - <a id='delete-post-"+json.postpk+"'>delete me</a></li>");
               
                if (json.Status == "OK") {
                Swal.fire(
              'Good job!',
              'You successfully ordered medicines and will be delivered shortly to your address!',
              'success'
               )
                }

                if (json.Status == -2) {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Invalid phone number!',
                  footer: ''
                })

                }

                if (json.Status == 2) {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Payment failed due to insufficient balance on your mobile number. Atleast 4050 ugx shillings required!',
                  footer: ''
                })

                }

                if (json.Status == "-21") {

                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: ' Your  IP address is not permitted to carry out transactions on this account!',
                  footer: ''
                })

                }


                if (json.Status == "None") {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Payment failed due to network problem and we will get back soon to help you!',
                  footer: ''
                })

                }


                if (json.StatusCode == "5") {
                Swal.fire(
              'Good job!',
              'You successfully ordered medicines and will be delivered shortly to your address!',
              'success'
               )
                }





             if (json.StatusCode == "None") {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Please use  *165# to complete the payment!',
                  footer: ''
                })

            }


             if (json.StatusCode == "2") {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Payment failed due to insufficient balance on your mobile number. Atleast 4050 ugx shillings required!',
                  footer: ''
                })

            }

            if (json.StatusCode == "4") {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Please use  *165# to complete the payment! or try again!',
                  footer: ''
                })

            }

            if (json.StatusCode == "-8") {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Transaction id already exists, please order medicine again or  call + 256 775 719 034!',
                  footer: ''
                })

            }



            if (json.StatusCode == "-9999") {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Phone number not captured',
                  footer: ''
                })

            }


            },
            // handle a non-successful response
            error : function(xhr,errmsg,err) {
                
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: ' We have encountered an error:',
                  footer: ''
                })

            

                 // add the error to the dom
                console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
            }
        });
    };

  


    // AJAX for deleting
    function delete_post(post_primary_key){
        if (confirm('are you sure you want to remove this post?')==true){
            $.ajax({
                url : "delete_post/", // the endpoint
                type : "DELETE", // http method
                data : { postpk : post_primary_key }, // data sent with the delete request
                success : function(json) {
                    // hide the post
                  $('#post-'+post_primary_key).hide(); // hide the post on success
                  console.log("post deletion successful");
                  alertify.alert("This is an alert dialog.", function(){
                    alertify.message('OK');
                  });
                },

                error : function(xhr,errmsg,err) {
                    // Show an error
                    $('#results').html("<div class='alert-box alert radius' data-alert>"+
                    "Oops! We have encountered an error. <a href='#' class='close'>&times;</a></div>"); // add error to the dom
                    console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
                }
            });
        } else {
            return false;
        }
    };


    // This function gets cookie with a given name
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');

    /*
    The functions below will create a header with csrftoken
    */

    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    function sameOrigin(url) {
        // test that a given url is a same-origin URL
        // url could be relative or scheme relative or absolute
        var host = document.location.host; // host + port
        var protocol = document.location.protocol;
        var sr_origin = '//' + host;
        var origin = protocol + sr_origin;
        // Allow absolute or scheme relative URLs to same origin
        return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
            (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
            // or any other URL that isn't scheme relative or absolute i.e relative.
            !(/^(\/\/|http:|https:).*/.test(url));
    }

    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
                // Send the token to same-origin, relative URLs only.
                // Send the token only if the method warrants CSRF protection
                // Using the CSRFToken value acquired earlier
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });

});
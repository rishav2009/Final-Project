function validate()
    {
        var pass = document.getElementById( "pass" ).value      ;
        var cpass = document.getElementById( "confirm" ).value  ;
        var fname = document.getElementById( "firstn" ).value  ;
        var lname = document.getElementById( "lastn" ).value   ;
        var contact = document.getElementById( "phone" ).value ;
        var mail = document.getElementById( "mail" ).value     ;


        if ( fname.length == 0 )
        {
            document.getElementById( "firstn" ).style.border = "groove red 10px" ;
            document.getElementById( "label1" ).innerHTML = "Provide your name !!" ;
            document.getElementById( "label1" ).style.color = "red" ;
            return false
        }

        if( fname.trim() == 0 )
        {
            document.getElementById( "firstn" ).style.border = "groove red 10px" ;
            document.getElementById( "label1" ).innerHTML = "Any field cannot contain only spaces !!" ;
            document.getElementById( "label1" ).style.color = "red" ;
            return false
        }
        
        if ( fname.length <= 2 )
        {
            document.getElementById( "firstn" ).style.border = "groove red 10px" ;
            document.getElementById( "label1" ).innerHTML = "First name should contain more than 2 words !!" ;
            document.getElementById( "label1" ).style.color = "red" ;
            return false
        }

        if ( lname.length == 0 )
        {
            document.getElementById( "lastn" ).style.border = "groove red 10px" ;
            document.getElementById( "label2" ).innerHTML = "Provide your surname !!" ;
            document.getElementById( "label2" ).style.color = "red" ;
            return false
        }

        if( lname.trim() == 0 )
        {
            document.getElementById( "lastn" ).style.border = "groove red 10px" ;
            document.getElementById( "label2" ).innerHTML = "Any field cannot contain only spaces !!" ;
            document.getElementById( "label2" ).style.color = "red" ;
            return false
        }
        
        if ( lname.length <= 2 )
        {
            document.getElementById( "lastn" ).style.border = "groove red 10px" ;
            document.getElementById( "label2" ).innerHTML = "Last name should contain more than 2 words !!" ;
            document.getElementById( "label2" ).style.color = "red" ;
            return false
        }

        if ( contact.length == 0 )
        {
            document.getElementById( "phone" ).style.border = "groove red 10px" ;
            document.getElementById( "label3" ).innerHTML = "Please provide your E-mail !!" ;
            document.getElementById( "label3" ).style.color = "red" ;
            return false
        }

        if( contact.trim() == 0 )
        {
            document.getElementById( "phone" ).style.border = "groove red 10px" ;
            document.getElementById( "label3" ).innerHTML = "Any field cannot contain only spaces !!" ;
            document.getElementById( "label3" ).style.color = "red" ;
            return false
        }

        if( contact.length <= 9 )
        {
            document.getElementById( "phone" ).style.border = "groove red 10px" ;
            document.getElementById( "label3" ).innerHTML = "Phone no. should be of 10 numbers and above !!" ;
            document.getElementById( "label3" ).style.color = "red" ;
            return false
        }

        if ( mail.length == 0 )
        {
            document.getElementById( "mail" ).style.border = "groove red 10px" ;
            document.getElementById( "label4" ).innerHTML = "Provide your name !!" ;
            document.getElementById( "label4" ).style.color = "red" ;
            return false
        }

        if( mail.trim() == 0 )
        {
            document.getElementById( "mail" ).style.border = "groove red 10px" ;
            document.getElementById( "label4" ).innerHTML = "Any field cannot contain only spaces !!" ;
            document.getElementById( "label4" ).style.color = "red" ;
            return false
        }
        
        if ( mail.length <= 15 )
        {
            document.getElementById( "mail" ).style.border = "groove red 10px" ;
            document.getElementById( "label4" ).innerHTML = "The E-mail should contain at least 16 characters !!" ;
            document.getElementById( "label4" ).style.color = "red" ;
            return false
        }

        if( pass.length == 0 )
        {
            document.getElementById( "pass" ).style.border = "groove red 10px" ;
            document.getElementById( "label5" ).innerHTML = "Please provide a password for your privacy !!" ;
            document.getElementById( "label5" ).style.color = "red" ;
            return false
        }

        if( pass.trim() == 0 )
        {
            document.getElementById( "pass" ).style.border = "groove red 10px" ;
            document.getElementById( "label5" ).innerHTML = "Any field cannot contain only spaces !!" ;
            document.getElementById( "label5" ).style.color = "red" ;
            return false
        }
        
        if( pass.length <= 4 )
        {
            document.getElementById( "pass" ).style.border = "groove red 10px" ;
            document.getElementById( "label5" ).innerHTML = "Password field should contain more than 4 characters !!" ;
            document.getElementById( "label5" ).style.color = "red" ;
            return false
        }
        
        if( pass != cpass )
        {
            document.getElementById( "confirm" ).style.border = "6px red groove" ; 
            document.getElementById( "wrong" ).innerHTML = "Passwords not matching !!" ; 
            document.getElementById( "wrong" ).style.color = "red" ;
            return false
        }

    }

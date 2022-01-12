function validateForm() {
    
        if( firstValidate() &&  secondValidate() && thirdValidate() && fourthValidate() && fifthValidate()){
            alert("Successfully Submitted");    
            return true;
        }
        else{
            return false;
        }


  }

        function firstValidate(){
            var first_name = $('#first_name').val();
            var regex = new RegExp("^[a-zA-Z]+$");
            if (first_name == "") {
                $('#one').html("*This field is required");
                return false;
            }
            else if(!first_name.match(regex)){
                $('#one').html("*Enter only alphabet");
                return false;
            }
            else{
                $('#one').html("");
                return true;
            }
        }

        function secondValidate(){
            var last_name = $('#last_name').val();
            var regex = new RegExp("^[a-zA-Z]+$");
            if (last_name == "") {
                $('#two').html("*This field is required");
                return false;
            }
            else if(!last_name.match(regex)){
                $('#two').html("*Enter only alphabet");
                return false;
            }
            else{
                $('#two').html("");
                return true;
            }
        }
        function thirdValidate(){
            var email = $('#email').val();
            var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var validEmail = regEx.test(email);
            if (email == "") {
                $('#three').html("*This field is required");
                return false;
            }
            else if(!validEmail){
                $('#three').html("*Enter valid email");
                return false;
            }
            else{
                $('#three').html("");
                return true;
            }
        }
        function fourthValidate(){
            var password = $('#password').val();
           
            if (password == "") {
                $('#fourth').html("*This field is required");
                return false;
            }
            else if(password.length < 8){
                $('#fourth').html("*Enter minimum 8 character");
                return false;
            }
            else{
                $('#fourth').html("");
                return true;
            }
        }

        function fifthValidate(){
            var cpassword = $('#cpassword').val();
            var password = $('#password').val();
           
            if (cpassword == "") {
                $('#fifth').html("*This field is required");
                return false;
            }
            else if(cpassword != password){
                $('#fifth').html("*Enter same password");
                return false;
            }
            else{
                $('#fifth').html("");
                return true;
            }
        }



















//
//for (var i in products) {
//        for (var j in cate) {
//            if (products[i]["category"] == cate[j]) {
//                html += "<div class='item'><img src='" + products[i]["image"] + "'><p>" + products[i]["name"] + "</p><p>Rs:" + products[i]["price"] + "</p></div>";
//            }
//        }




      

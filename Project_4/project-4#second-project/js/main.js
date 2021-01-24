
        var list1 = [];
		var list2 = [];
		var list3 = [];
		var list4 = [];
        var list5 = [];
        var list6 = [];
        var list7 = [];

		var n = 1;
        var x = 0;
        
		function myFunction(){

			var AddRown = document.getElementById('addedtasklist');
			var NewRow = AddRown.insertRow(n);

			list1[x] = document.getElementById("inputEmail4").value;
			list2[x] = document.getElementById("inputPassword4").value;
			list3[x] = document.getElementById("inputAddress").value;
            list4[x] = document.getElementById("inputAddress2").value;
            list5[x] = document.getElementById("inputCity").value;
            list6[x] = document.getElementById("inputState").value;
            list7[x] = document.getElementById("inputZip").value;

			var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
            var cel4 = NewRow.insertCell(3);
            var cel5 = NewRow.insertCell(4);
            var cel6 = NewRow.insertCell(5);
            var cel7 = NewRow.insertCell(6);

			cel1.innerHTML = list1[x];
			cel2.innerHTML = list2[x];
			cel3.innerHTML = list3[x];
            cel4.innerHTML = list4[x];
            cel5.innerHTML = list5[x];
            cel6.innerHTML = list6[x];
            cel7.innerHTML = list7[x];

			n++;
            x++;  
            
        }


        function validate() {
      
            if( document.myForm.Name.value == "" ) {
               alert( "Please provide your name!" );
               document.myForm.Name.focus() ;
               return false;
            }
            
            if( document.myForm.EMail.value == "" ) {
               alert( "Please provide your Email!" );
               document.myForm.EMail.focus() ;
               return false;
            }
            if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
               document.myForm.Zip.value.length != 5 ) {
               
               alert( "Please provide a zip in the format #####." );
               document.myForm.Zip.focus() ;
               return false;
            }
            if( document.myForm.City.value == "" ) {
               alert( "Please provide your city!" );
               return false;
            }
            if( document.myForm.State.value == "-1" ) {
                alert( "Please provide your state!" );
                return false;
            }
            
        
         
          
        myFunction();
        duplicate();
        
        
        
            return( true );
        
            
            
        }

        function duplicate(){
            
            for(i=0;i<=x;i++){
                for(j=1;j<i;j++){
                    if(list3[j]==list3[i]){
                        alert("repeated entry!");
                        document.myForm.EMail.focus();
                        return false;
                    }
                    
                    
                    
            }
            
        }
        
        }
        
    


        
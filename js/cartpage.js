window.onload = init;

function init(){
    var Today = new Date();//store current date to Today
    //+ = continue
    // getMonth()+ 1, January = 0
    document.getElementById('date').value = Today.getDate()+"/"+(Today.getMonth()+1) + "/" + Today.getFullYear();
    document.getElementById('customerName').focus();
}
document.forms[0].onsubmit = function() {
    if (this.checkValidity()) {
       
            if(document.getElementById('totalAmount').value>0 ) {
            
                    if (confirm("Are sure that you would like to submit the book order?") == 1){
                    name = document.getElementById('customerName').value;
                    alert( name + " , your order has been successfully submitted. You may receive your order items wihtin 10 days ")
               
                         window.print();
                         return true;// can proseat
                //document.book.submit();
                //location.href = "success.html";
                //window.location = "success.html" public name;   

            }
        }
        else{
            alert("Total Amount is invalid");
            return false;
        }
    }
}
//login page
function validate(){
    var e=document.getElementById("here").value;
    var d=document.getElementById("col").value;
    if(d==='openit' && e==='STUDENT'){
        console.log("Allow");
        window.location.assign("foundational.html");
    }else{
        alert("Login Unsuccessful!");
    }
}

function getstuff(){
    var list = document.querySelectorAll("#yellow");
for(var i=0; i<list.length;i++)
{list[i].onclick=talk;}
    
}
function(){
    alert("explit!");

}
window.onload=getstuff;

fuction myFunction(){
    var x =
    document.getElementById("myTopnav");
    if(x.className === "topnav") {
        x.className +="responsive;"
    }else{
        x.className ="topnav"
    }
}
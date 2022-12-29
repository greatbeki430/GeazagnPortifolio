var person = 
{
    FristName:"Great",
    LastName:"Bekele", 
    Age:"20",
information : function display()
{
    var id;
    var username;
    var password;
    return this.FristName + " " + this.LastName + " is " +this.Age + " Years old.";
    //var person = {FristName:"Great", LastName:"Bekele", Age:"20"};
    //document.writeln(person);
    //document.getElementById("great1").innerHTML=person.FristName+ person.LastName+" is " +person.Age+ "Years old!";
}
};

function displayDate()
{
 document.getElementById("great3").innerHTML = Date();
}
document.getElementById("great").innerHTML="Great You are Lucky";
//document.getElementById("great1").innerHTML=person.FristName+" " +person.LastName+" is " +person.Age+ " Years old!";
document.getElementById("great1").innerHTML=person.information();
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
document.getElementById("great4").innerHTML = txt;

function myFunction(value) {
  txt = txt + value + "<br>"; 
}
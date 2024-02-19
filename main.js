//crear la variable names_of_people como array
var names_of_people = [];
    
function submit()
{
    var GuestName = document.getElementById("name1").value;
	names_of_people.push(GuestName);
	//imprime en la consola la variable GuestName
	console.log(GuestName);
        
    console.log(names_of_people);
	//a la variable lenght_of_name declarala como names_of_people.length;
    var lenght_of_name = names_of_people.length;
    console.log(lenght_of_name);
	document.getElementById("display_name").innerHTML=names_of_people.toString();
	
   }

function sorting()
{
	//a la variable names_of_people establece .sort()
	names_of_people.sort();
	var i= names_of_people.join("<br>");
    console.log(names_of_people);		
	document.getElementById("sorted").innerHTML=i.toString();
	}

function show()
{
	var i= names_of_people.join("<br>");
	//imprime en consola names_of_people
	console.log(names_of_people);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("sort_button").style.display="block";
	}

function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<names_of_people.length; j++)
		{
			if(s==names_of_people[j]){
				//a la variable found, actualiza y suma 1
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}
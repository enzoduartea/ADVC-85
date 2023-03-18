menuListArray = [ "Pizza Mineira","Pizza Mexicana" , "Pizza Mista" , "Pizza de Queijo" , "Pizza Franbacon" , "Pizza Bacon" ,"Pizza Escarola", "Pizza de Atum", "Pizza Romana","Pizza de Calabresa", "Pizza Marguerita",
"Pizza de Pepperoni", "Pizza Espanhola"                                          ]; //Adicione mais nomes de pizza

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menuListArray.length; i++)
    {
        htmldata=htmldata+ menuListArray[i] + '<br>'
    }
    //Dê um nome apropriado ao Id, como displayMenu 
    document.getElementById("displayMenu").innerHTML = htmldata;
}

function add_suggestion(){
    //Dê um nome de id apropriado, como addItem
	var item = document.getElementById("addItem").value;
    //Use a função push() para colocar o item no menuListArray
    menuListArray.push(item);
}


function printDataProjects(){
    
    fetch("http://127.0.0.1:3001/projects/").then((resposta) => resposta.json())
    .then(function(data){
        if(data.length > 0){    
            
            var temp = '<div id="dataProjects">';
            data.forEach(element => {
                temp += '<p style="text-align:justify;">';

                temp += "<h4>" + element.nome + "</h4>";
                temp += '<p>' + element.descricao + "</p>";
                temp += "&nbsp;";
                temp += "</p> <hr />";            
            });
            temp += "</div>";
            console.log(temp); 
            document.getElementById("projetos").innerHTML = temp;           
        }

    }).catch(function(error){
        console.log(error)
    });
 
};
function printProjects(){
    fetch('projects.html').then((resposta) => resposta.text())
    .then(function(data){

        document.getElementById("page").innerHTML = data;
        printDataProjects();
       
        
 
  });
};


function printHome(){
    fetch('home.html').then((resposta) => resposta.text())
    .then(function(data){

        document.getElementById("page").innerHTML = data;
 
  });
};
printHome();
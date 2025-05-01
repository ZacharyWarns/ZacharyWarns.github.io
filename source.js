/*
    Author : Zachary Warns
    Title : source.js
    Time : May 2025

    creates buttons for displaying information about anything
*/


var portfolioList = [
    {
        name : "God Protection Service",
    description : "First Person Shooter" ,
    link : "https://hexagonal-spoon.itch.io/stiltless-stilt-guys-gps"

    }


]

$(createButtons)

/*
    creates all the buttons for selecting
*/
function createButtons(){
    for(let i = 0; i < portfolioList.length; i++ ){
        addButton(portfolioList[i]);
    }
}


function addButton(accomplishment){
    let newButton = document.createElement("div");
    $("#toggleproject").append(newButton);
    newButton.textContent = accomplishment.name;
    $(newButton).click(chanageProject);
}


function chanageProject(){
    let currentToggle = this;
    let projectList = $("#toggleproject *")
    let project = {};

    
    //find the project associated with the button clikced
    for(var i =0; i < projectList.length; i++){
        if(projectList[i] == currentToggle){
            project = portfolioList[i];
            
        }
    }
    
    //display the project
    chanageProjectDisplay(project)

}

function chanageProjectDisplay(project){
    keyValuePair = Object.entries(project);
    
    for(let i = 0; i < keyValuePair.length; i ++){
        let entry = $("#" + keyValuePair[i][0]);
        console.log(entry);
        if(entry.hasClass("haslink")){
            entry.attr("href" , keyValuePair[i][1]);
        }
        if(entry.hasClass("hastext")){
            console.log(keyValuePair[i][1])
            entry.text(keyValuePair[i][1]);
        }

    }
}
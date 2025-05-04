/*
    Author : Zachary Warns
    Title : source.js
    Time : May 2025

    creates buttons for displaying information about anything
*/


var portfolioList = [
    {
        project : "game",
        name : "God Protection Service",
        description : "First Person Shooter" ,
        link : "https://hexagonal-spoon.itch.io/stiltless-stilt-guys-gps"

    },
    {
        project : "game" ,
        name : "Water Taxi",
        description : "3D simulator",
        link : "https://hexagonal-spoon.itch.io/stiltless-stilt-guys-water-taxi"
    },
    {
        project : "website",
        name : "Fetch Your Friends" ,
        description : "adoption website",
        link : "https://github.com/Torrescc/Fetch-Your-Friend"

    },
    {
        project : "research",
        name : "AI Plays Ultimate Tic Tac Toe",
        description : "AI research",
        link : "AIPlaysUltimateTicTacToe.pdf"
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

/*
    for testing for extra items in the list
 */
function addtoportfolioList()
{

    for(let i = 0; i <20; i++){
        portfolioList.push({project : "research" , name : "wow"})
    }
}


function addButton(accomplishment){
    let newButton = $(document.createElement("div"));
    $("#toggleproject").append(newButton);
    newButton.text(accomplishment.name);
    newButton.click(chanageProject);
    // add type of div and type of project to be displayed
    newButton.addClass("projectbutton");
    newButton.addClass(accomplishment.project);
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
        if(entry.hasClass("haslink")){
            entry.attr("href" , keyValuePair[i][1]);
        }
        if(entry.hasClass("hastext")){
            entry.text(keyValuePair[i][1]);
        }
        if(entry.hasClass("hastype")){
            entry.removeClass();
            entry.addClass(keyValuePair[i][1]);
            entry.addClass("hastype")
        }
    }
}
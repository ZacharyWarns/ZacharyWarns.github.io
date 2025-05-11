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
        link : "https://hexagonal-spoon.itch.io/stiltless-stilt-guys-gps",
        summary : "God Protection Service is a game developed by a team of two through the video game development club. The project took 4 months to complete and was done through the godot engine. The game includes hordes of eniemes slain by the hero. This required clever soultions in physics optimizations allowing for 120 enemies to be simitulated with smooth frame rates.",
        skills : ["game physics" , "3d modeling" , "Godot"] ,
        photos : [["gps1.png" , "shotgun lasering sentient objects"] , ["gps2.png" , "main menu : stiltless stilt guy's god protection service" ] , [ "gps3.png"  , "shotgun shotting shells into sentient objects"]],
        

    },
    {
        project : "game" ,
        name : "Water Taxi",
        description : "3D simulator",
        link : "https://hexagonal-spoon.itch.io/stiltless-stilt-guys-water-taxi",
        summary : "Water Taxi is a game developed by a team of three through the video game development club. The project took 4 months to complete and was done through the unity engine. There were three themes that constrained our creative proccess requiring us to come up with clever soultions." ,
        skills  : ["Unity" , "game physics" , "C#"]
    },
    {
        project : "website",
        name : "Fetch Your Friends" ,
        description : "adoption website",
        link : "https://github.com/Torrescc/Fetch-Your-Friend",
        summary : "Fetch Your Friends is a full stack website complete with a server hosting scrtipt and a sql database. We had a team of three to complete this for our software engineering semster long project. The project was made to be an adoptition webstie that was a dating site parody so it was important to be usable on both mobile and desktop. our site also get's real time adoption data using a restful api.",
        skills : ["Node Js" , "javascript" , "front end" , "mobile application" , "SQL"]

    },
    {
        project : "research",
        name : "AI Plays Ultimate Tic Tac Toe",
        description : "AI research",
        link : "AIPlaysUltimateTicTacToe.pdf",
        summary : ""
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
    resetProject();
    // get each attribute of object
    keyValuePair = Object.entries(project);
    
    // iterate each through each atrbiute of an object
    for(let i = 0; i < keyValuePair.length; i ++){
        // entry is the html object assoicated with the attribute
        let entry = $("#" + keyValuePair[i][0]);

        // test entry for the classes it contains to determine what the attribute contributes to this project
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
        if(entry.hasClass("hasmany")){
            console.log(keyValuePair[i][1].length);
            for(let skill = 0; skill < keyValuePair[i][1].length; skill++){
                let newSkill = $(document.createElement("div"));
                newSkill.addClass("item");
                entry.append(newSkill);
                newSkill.text(keyValuePair[i][1][skill]);
            }
        }
        if(entry.hasClass("hasimages")){
            for(let index =0; index < keyValuePair[i][1].length; index++){
                let newPhoto = $(document.createElement("img"));
                newPhoto.addClass("photo");
                entry.append(newPhoto);
                newPhoto.attr("src" , keyValuePair[i][1][index][0]);
                newPhoto.attr("alt" , keyValuePair[i][1][index][1]);
            }
        }
    }
}
function resetProject(){
    $("#photos *").remove();
    $("#skills *").remove();

}

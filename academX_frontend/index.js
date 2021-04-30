let master;
let masterCount;
let masterCountMaxId;
let pointer = 0;
const modals = document.getElementById("myModal");
const scheduleEntry = document.getElementById("schedules-container");


const BASE_URL = "http://127.0.0.1:3000";

//global functions

//function for getting all schedules and children
//function for creating a new child
//function for creating a schedule
//function to show all schedules
//function to add both child and schedules together
//function to delete and a button
//function to add new records
//function to clear the modal



function getAllSchedulesWithChild(){
    fetch (`${BASE_URL}/schedules`)
    .then((resp) => {
        return resp.json();
    })
    .then((schedules) => {displaySchedules(schedules);
    })
    .catch((err) => {
        console.log("Figure out error message:", err);
    });

}


function displayMasterSchedules(masterSchedule){
    let id;
  for (let i = 0; i < masterCount; i++){
      id = masterSchedule[i].scheduleId;
      let child_id = masterSchedule[i].id;
      let firstName = masterSchedule[i].firstName;
      let lastName = masterSchedule[i].lastName;
      let age = masterSchedule[i].age;
      let grade = masterSchedule[i].grade;
      buildChild(id);
      let newPost = document.getElementById("schedules-container");
      newPost.insertAdjacentHTML(
        "beforeend",
        `<br>
        <div class="ui segment">
            <h4 class="ui horizontal divider header">
            <i class="child icon"></i>
            Child
            </h4>
            <h5>Id: ${child_id}</h5>
            <h5>First Name: ${firstName}</h5>
            <h5>Last Name: ${lastName}</h5>
            <h5>Age: ${age}</h5>
            <h5>Grade: ${grade}</h5>
            <h4 class="ui horizontal divider header">
             <i class="building icon"></i>
             Schedule
             </h4>
             <div id="children-container${id}"></div>
          <br />
          <button id=${id} class="delBtn" type="button">Discard</button>
          <br/ >
        <br />
      </div>`
    );
  }
  deleteButton();

}

//basic delete functionality - COME BACK TO THIS
// function deleteButton(){
//     let btns = document.querySelectorAll(".delBtn");
//     for (let i = 0; i < btns.length; i++){
//         btns[i].addEventListener("click", deleteEntry);
//   }
// }

// function deleteEntry(e){
//     let btnNumber = parseInt(e.target.id);
//     deleteSchedule(btnNumber);
// }

function buildChild(cid){
    fetch (`${BASE_URL}/children/$(cid)`) 
    .then((resp) => resp.json())
    .then((child) => {
        if (pointer < masterCount) {
            let childPost = document.getElementById(`children-container${cid}`);
            childPost.insertAdjacentHTML(
                "beforeend",
          `<div style="text-align: justify; width: 800px;">
            ${child.name}&emsp;
            <br /><br />
            ${child.age}&emsp;
            <br /><br />
            ${child.grade}&emsp;
            <br /><br />

          </div>`
            );
        }
        pointer++
    }) 
    
}

function addNewRecords(){}
function createSchedule(){}
function clearModal(){}
function createPost(){}

document.addEventListener("DOMContentLoaded", () => {});

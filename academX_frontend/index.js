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
    .then((schedules) => {masterCount = schedules.length; 
                        displayMasterSchedules(schedules);
    })
    .catch((err) => {
        console.log("Figure out error message:", err);
    });

}

function buildChild(cid){
    fetch (`${BASE_URL}/children/${cid}`) 
    .then((resp) => resp.json())
    .then((child) => {
        if (pointer <= masterCount) {
            let childPost = document.getElementById(`children-container${cid}`);
            childPost.insertAdjacentHTML(
                "beforeend",
          `<div style="text-align: justify; width: 800px;">
            <h5>First Name: ${child.first_name}&emsp;</h5>
            <h5>Last Name: ${child.last_name}&emsp;</h5>
            <h5>Age: ${child.age}&emsp;</h5>
            <h5>Grade: ${child.grade}&emsp;</h5>

          </div>`
            );
        }
        pointer++;
    }) 
    
}


function displayMasterSchedules(masterSchedule){
    let id;
  for (let i = 0; i <=masterCount; i++){
      id = masterSchedule[i].child_id;
      let schedule_id = masterSchedule[i].id;
      let weekday = masterSchedule[i].weekday;
      let date = masterSchedule[i].date;
      let subject = masterSchedule[i].subject;
      let content = masterSchedule[i].content;
      buildChild(id);
      let newPost = document.getElementById("schedules-container");
      newPost.insertAdjacentHTML(
        "beforeend",
        `<br>
        <div class="ui segment">
            <h4 class="ui horizontal divider header">
            <i class="child icon"></i>
            Schedule
            </h4>
            <h5>Id: ${schedule_id}</h5>
            <h5>Weekday: ${weekday}</h5>
            <h5>Date: ${date}</h5>
            <h5>Subject: ${subject}</h5>
            <h5>Content: ${content}</h5>
            <h4 class="ui horizontal divider header">
             <i class="building icon"></i>
             Child
             </h4>
             <div id="children-container${id}"></div>
          <br />
          <button id=${id} class="delBtn ui red right floated button" type="button">Discard</button>
          <br/ >
        <br />
      </div>`
    );
  }
  deleteButton();

}

// basic delete functionality - COME BACK TO THIS
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



// function addNewRecords(){
//   let childfirstName = document.querySelector("#input-firstname").value;
//   let childlastName = document.querySelector("#input-lastname").value;
//   let childGrade = document.querySelector("#input-grade").value;
//   let childAge = document.querySelector("#input-age").value;

//   let companyName = document.querySelector("#input-companyname").value;
//   let description = document.querySelector("#input-description").value;
// }














function createSchedule(){}
function clearModal(){}
function createPost(){}

document.addEventListener("DOMContentLoaded", () => {
    getAllSchedulesWithChild();
});

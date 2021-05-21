let scheduleCount;
let pointer = 0;
const scheduleEntry = document.getElementById("schedules-container");

const BASE_URL = "http://127.0.0.1:3000";

const childClass = new Child("childList", BASE_URL);
const scheduleClass = new Schedule(BASE_URL);

//global functions

//function for getting all schedules and children
//function for creating a new child
//function for creating a schedule
//function to show all schedules
//function to add both child and schedules together
//function to delete and a button
//function to add new records
//function to clear the modal
// basic delete functionality 


//gets data for all schedules upon start up and send them to display...
function getAllSchedulesWithChild() {
    scheduleClass.getAllSchedule();
    childClass.getAllChildren();
  }
  
  //gets data for one child upon start up and send them to display...
  function buildChild(cid) {
    fetch(`${BASE_URL}/children/${cid}`)
      .then((resp) => resp.json())
      .then((child) => {
        if (pointer < scheduleCount) {
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
      });
  }

function deleteButton(){
    let btns = document.querySelectorAll(".delBtn");
    for (let i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", deleteEntry);
  }

function deleteEntry(e){
    let btnNumber = parseInt(e.target.id);
    deleteSchedule(btnNumber);
 }
}

function displayMasterSchedules(masterSchedule){
    for (let i = 0; i < scheduleCount; i++){ 
        let id = masterSchedule[i].child_id;
      //   console.log(id);
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
              <i class="building icon"></i>
              Schedule
              </h4>
              <h5>Id: ${schedule_id}</h5>
              <h5>Weekday: ${weekday}</h5>
              <h5>Date: ${date}</h5>
              <h5>Subject: ${subject}</h5>
              <h5>Content: ${content}</h5>
              <h4 class="ui horizontal divider header">
               <i class="child icon"></i>
               Child
               </h4>
               <div id="children-container${id}"></div>
            <br />
            <button id=${schedule_id} class="delBtn ui red right floated button" type="button">Discard</button>
            <br/ >
          <br />
        </div>`
      );
    }
    deleteButton();
}

function addScheduleRecords() {
    let scheduleWeekday = document.querySelector("#input-weekday").value;
    let scheduleDate = document.querySelector("#input-date").value;
    let scheduleSubject = document.querySelector("#input-subject").value;
    let scheduleContent = document.querySelector("#input-content").value;
  
    let listbox = document.getElementById("childList");
    for (let c = 0; c < listbox.length; c++) {
      if (listbox[c].selected) {
        scheduleClass.saveChildSchedule(
          listbox[c].value,
          scheduleWeekday,
          scheduleDate,
          scheduleSubject,
          scheduleContent
        );
      }
    }
    alert(`${scheduleWeekday} Schedule saved!`);
}
  

function addCRecords() {
    let childfirstName = document.querySelector("#input-firstname").value;
    let childlastName = document.querySelector("#input-lastname").value;
    let childGrade = document.querySelector("#input-grade").value;
    let childAge = document.querySelector("#input-age").value;
  
    childClass.addChildRecords(
      childfirstName,
      childlastName,
      childGrade,
      childAge
    );
    alert(`${childfirstName} ${childlastName} record saved!`);
}

//CLEAR THE MODAL FIELDS AFTER ENTRY
function clearModal(){
    document.querySelector("#input-firstname").value = "";
    document.querySelector("#input-lastname").value = "";
    document.querySelector("#input-grade").value = "";
    document.querySelector("#input-age").value = "";
    document.querySelector("#input-weekday").value = "";
    document.querySelector("#input-date").value = "";
    document.querySelector("#input-subject").value = "";
    document.querySelector("#input-content").value = "";
}

function deleteSchedule(id) {
    // alert(id);
    pointer = 0;
    scheduleEntry.innerHTML = "";
    scheduleClass.delSchedule(id);
    alert("Schedule Deleted!");
    getAllSchedulesWithChild();
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    let saveChildBtn = document.getElementById("entryChildForm");
    saveChildBtn.addEventListener("submit", addCRecords);
    let saveScheduleBtn = document.getElementById("entryScheduleForm");
    saveScheduleBtn.addEventListener("submit", addScheduleRecords);
  
    getAllSchedulesWithChild();
  });



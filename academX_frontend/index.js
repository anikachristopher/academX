document.addEventListener("DOMContentLoaded", () => {});

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
    // .then((schedules) => {displaySchedules(schedules);
    // })
    // .catch((err) => {
    //     console.log("Figure out error message:", err);
    // });

}
function deleteEntry(){}
function deleteButton(){}
function createChild(){}
function displaySchedules(){}
function addNewRecords(){}
function createSchedule(){}
function clearModal(){}
function createPost(){}

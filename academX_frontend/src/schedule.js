class Schedule {
  addScheduleURL = "";
  //constructor function
  constructor(BASE_URL) {
    this.addScheduleURL = `${BASE_URL}/schedules`;
  }

  getAllSchedule() {
    fetch(this.addScheduleURL)
      .then((resp) => {
        return resp.json();
      })
      .then((schedules) => {
        scheduleCount = schedules.length;
        displayMasterSchedules(schedules);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }

  delSchedule(id) {
    let DEL_URL = this.addScheduleURL + `/${id}`;
    fetch(DEL_URL, {
      method: "DELETE",
    }).catch((err) => {
      console.log("Error:", err);
    });
  }

  saveChildSchedule(
    id,
    scheduleWeekday,
    scheduleDate,
    scheduleSubject,
    scheduleContent
  ) {
    fetch(this.addScheduleURL, {
      method: "POST",
      body: JSON.stringify({
        weekday: scheduleWeekday,
        date: scheduleDate,
        subject: scheduleSubject,
        content: scheduleContent,
        child_id: id,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }).catch((err) => {
      console.log("Error:", err);
    });
  }
}

//SCHEDULE MODAL CODE
const sModal = document.getElementById("myScheduleModal");

// Get the button that opens the modal
const sBtn = document.getElementById("myScheduleBtn");

// Get the <span> element that closes the modal
const sSpan = document.getElementById("sClose");

// const entryForm = document.querySelector("#entryForm");
// When the user clicks on the button, open the modal
sBtn.onclick = function () {
  sModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
sSpan.onclick = function () {
  sModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == sModal) {
    sModal.style.display = "none";
  }
};
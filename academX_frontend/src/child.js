class Child{
    //build constructor function
    //Properties
  ChildrenRegister = [];
  allChildURL = "";
  listElement = "";

  //build constructor function
  constructor(listElement, BASE_URL) {
    this.listElement = listElement;
    this.allChildURL = `${BASE_URL}/children`;
  }

  addChildRecords(childfirstName, childlastName, childGrade, childAge) {
    fetch(this.allChildURL, {
      method: "POST",
      body: JSON.stringify({
        first_name: childfirstName,
        last_name: childlastName,
        age: childAge,
        grade: childGrade,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }).catch((err) => {
      console.log("Error:", err);
    });
  }

  getAllChildren() {
    fetch(this.allChildURL)
      .then((resp) => {
        return resp.json();
      })
      .then((children) => {
        this.ChildrenRegister = children;
        this.buildChildList();
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }

  buildChildList() {
    let childReg = document.getElementById(this.listElement);
    for (let i = 0; i < this.ChildrenRegister.length; i++) {
      let ch_id = this.ChildrenRegister[i].id;
      let fName = this.ChildrenRegister[i].first_name;
      let lName = this.ChildrenRegister[i].last_name;
      let el = document.createElement("option");
      el.textContent = `${fName} ${lName}`;
      el.value = `${ch_id}`;
      childReg.appendChild(el);
    }

}













}
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














}
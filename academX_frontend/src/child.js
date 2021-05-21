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
}
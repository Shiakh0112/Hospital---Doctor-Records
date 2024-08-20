// fill in javascript code here

let forms = document.querySelector("form");
forms.addEventListener("submit", function (e) {
  e.preventDefault();
  HandleDrForm();
});
let ArrayOfDRData = [];
let localData = JSON.parse(localStorage.getItem("DR_Data")) || [];
ArrayOfDRData = localData;

function HandleDrForm() {
  let name = document.getElementById("name").value;
  let docID = Number(document.getElementById("docID").value);
  let Specialization = document.getElementById("dept").value;
  let Experience = Number(document.getElementById("exp").value);
  let email = document.getElementById("email").value;
  let number = Number(document.getElementById("mbl").value);
  console.log(name, docID, Specialization, Experience, email, number);
  let DrData = {
    name,
    docID,
    Specialization,
    Experience,
    email,
    number,
  };

  ArrayOfDRData.push(DrData);
  // console.log(ArrayOfDRData);
  localStorage.setItem("DR_Data", JSON.stringify(ArrayOfDRData));
  DisplayDrData();
  document.getElementById("name").value = "";
  document.getElementById("docID").value = "";
  document.getElementById("dept").value = "";
  document.getElementById("exp").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mbl").value = "";
}

function DisplayDrData() {
  let DRDataInTable = document.getElementById("Dr_Employee_Data");
  DRDataInTable.innerText = "";
  ArrayOfDRData.forEach(function (ele, i) {
    let td1 = document.createElement("td");
    td1.innerText = ele.name;
    let td2 = document.createElement("td");
    td2.innerText = ele.docID;
    let td3 = document.createElement("td");
    td3.innerText = ele.Specialization;
    let td4 = document.createElement("td");
    td4.innerText = ele.Experience;
    let td5 = document.createElement("td");
    td5.innerText = ele.email;
    let td6 = document.createElement("td");
    td6.innerText = ele.number;
    let td7 = document.createElement("td");
    if (ele.Experience > 5) {
      td7.innerText = "Senior";
    } else if (ele.Experience >= 2) {
      td7.innerText = "Junior";
    } else {
      td7.innerText = "Trainee";
    }
    let td8 = document.createElement("td");
    let DeleteElement = document.createElement("button");
    DeleteElement.innerHTML = "Delete";
    DeleteElement.className = "DeleteBtn";

    DeleteElement.addEventListener("click", function () {
      DeleteData(i);
      console.log("ashfaq");
    });
    td8.append(DeleteElement);
    let tr = document.createElement("tr");
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
    DRDataInTable.append(tr);
  });
}
function DeleteData(index) {
  ArrayOfDRData.splice(index, 1);
  localStorage.setItem("DR_Data", JSON.stringify(ArrayOfDRData));
  DisplayDrData();
}

document.addEventListener("DOMContentLoaded", function () {
  DisplayDrData();
});

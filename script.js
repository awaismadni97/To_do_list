// var selectedRow = 'Hello';
// if(selectedRow = 'Hello'){
//   insertData();
// }
// function insertData() {
//   let taskForm = document.getElementById("form_id");
//   taskForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//    let nameValue = document.getElementById("task").value;

//    if (selectedRow) {
//     console.log(selectedRow);
//     updateRecord(nameValue);
//     selectedRow = 'Hello'; // Clear the selected row after updating
//   }else{
//     let recordRow = document.createElement("tr");
//     recordRow.innerHTML = `
//         <td>${nameValue}</td>
//         <td>
//         <a onclick=EditRecord(this)>Edit</a>
//         <a onclick=DeleteRecord(this)>Delete</a>
//         </td>
//         `;
//     document.getElementById("t_id").append(recordRow);
//   }
//     document.getElementById("task").value = "";
//   });
// }

// function DeleteRecord(tr) {
//   tr.closest("tr").remove();
//   document.getElementById("task").value = "";
// }

// function EditRecord(tr) {
//   selectedRow= tr.closest('tr');

//   document.getElementById("task").value = selectedRow.cells[0].innerHTML;

// }

// function updateRecord(newValue) {

// selectedRow.cells[0].innerHTML = newValue;
// }

var selectedRow = null; // Initialize selectedRow as null

function insertData() {
  let taskForm = document.getElementById("form_id");
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let nameValue = document.getElementById("task").value;
    let nameDesr = document.getElementById("desc").value;

    if (nameValue == "" && nameDesr == "") {
      alert("Please Enter the Records");
    } else if (nameValue == "") {
      alert("Please Enter the Title");
    } else if (nameDesr == "") {
      alert("Please Enter the Description");
    } else {
      if (selectedRow) {
        updateRecord(nameValue, nameDesr);
        selectedRow = null; // Clear the selected row after updating
      } else {
        let recordRow = document.createElement("tr");
        recordRow.innerHTML = `
            <td>${nameValue}</td>
            <td>${nameDesr}</td>
            <td>
              <a onclick=EditRecord(this)><i class="fa-solid btn btn-info fa-pen-to-square"></i></a>
              <a onclick=DeleteRecord(this)><i class="fa-solid btn btn-danger fa-trash"></i></a>
             
            </td>
          `;
        document.getElementById("t_id").appendChild(recordRow);
        // document.getElementById('crossbtn').innerHTML= '';

        let storeTitle = document.getElementById("task").value;
        console.log(storeTitle);
        document.getElementById("task").innerHTML = storeTitle;
        document.getElementById("task").value = "";
        document.getElementById("desc").value = "";
      }
    }
  });
}

insertData(); // Call the insertData function to set up the event listener

function EditRecord(tr) {
  selectedRow = tr.closest("tr");
  document.getElementById("task").value = selectedRow.cells[0].innerHTML;
  document.getElementById("desc").value = selectedRow.cells[1].innerHTML;
}

function updateRecord(newValue, nameDesr) {
  selectedRow.cells[0].innerHTML = newValue;
  selectedRow.cells[1].innerHTML = nameDesr;
  document.getElementById("crossbtn").innerHTML = "";
  document.getElementById("task").value = "";
  document.getElementById("desc").value = "";
}

function DeleteRecord(tr) {
  if (confirm("Do you really want to delete?") == true) {
    tr.closest("tr").remove();
    document.getElementById("task").value = "";
    document.getElementById("desc").value = "";
  }
}

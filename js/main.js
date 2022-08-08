var arrList = [];
var selectedIndex = 0;
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const age = document.getElementById('age');
const updateButton = document.getElementById('update');
const addrow = document.getElementById('addrow');

function getInfo() {

    var objList = {
        firstname : firstname.value,
        lastname : lastname.value,
        age : age.value,  
    }

    arrList.push(objList);

    //Delete Data Form
    clearData();

    //Print list add
    printList();
}

function printList() {

    //Print Cell 
    var table = document.getElementById("table");

    //Delete Cell[i] for add to next Cell 
    for (var i=table.rows.length-1; i>0; i--){
        table.deleteRow(i);
    }

    for (var i=0; i<arrList.length; i++){

        var obj = arrList[i];
        var newRow = table.insertRow();
        
        var cel1 = newRow.insertCell(0)
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);
        var cel5 = newRow.insertCell(4);

        cel1.innerHTML = i+1;
        cel2.innerHTML = obj.firstname;
        cel3.innerHTML = obj.lastname;
        cel4.innerHTML = obj.age;        
        cel5.innerHTML = " <a href='#' onclick='editRow(this)'><i style='color:green;' class='fa-solid fa-pen-to-square'></i></a> / <a href='#' onclick='delRow(this)'><i style='color:red;' class='fa-solid fa-trash-can'></i></a>";        
    } 
}

function editRow(row){
    //Get data when you press button edit
    var selectedRow = row.parentElement.parentElement;

    var fname = selectedRow.cells[1].innerText;
    var lname = selectedRow.cells[2].innerText;
    var age_e = selectedRow.cells[3].innerText;

    //Show data to edit 
    firstname.value = fname;
    lastname.value = lname;
    age.value = age_e;

    //update selectedIndex 
    selectedIndex = parseInt(selectedRow.cells[0].innerText) - 1;

    //Show update button
    updateButton.style.display = "block";
    addrow.style.display = "none";
}

function delRow(row){
    var selectedRow = row.parentElement.parentElement;
    
    selectedIndex = parseInt(selectedRow.cells[0].innerText) - 1;

    if(confirm('Do you want delete this data')){
        arrList.splice(selectedIndex, 1);
        printList();
    }
    // var selectedRow = row.parentNode.parentNode;
    // if(confirm('Do you want delete this data')){
    //     selectedRow.parentNode.removeChild(selectedRow);
    // }
}
function clearData(){
    firstname.value = "";
    lastname.value = "";
    age.value = "";
}

function updateInfo() {
    arrList[selectedIndex].firstname = firstname.value;
    arrList[selectedIndex].lastname = lastname.value;
    arrList[selectedIndex].age = age.value;

    printList();

    clearData();

    updateButton.style.display = "none";
    addrow.style.display = "block";
}
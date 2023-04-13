// var var1 = parseInt(prompt("Enter an integer: "));
// var var2 = prompt("Enter a string: ");
// var var3 = Boolean(prompt("Enter a boolean (true/false): "));
// var var5 = prompt("Enter a value: ");
// if (var5 === '') {
//   var5 = null;
// }
// let variable1 = prompt("Enter variable 1:");
// let variable2 = prompt("Enter variable 2:");
// let variable3 = prompt("Enter variable 3:");
// let variable4 = prompt("Enter variable 4:");
// let variable5 = prompt("Enter variable 5:");

// let type1 = typeof variable1;
// let type2 = typeof variable2;
// let type3 = typeof variable3;
// let type4 = typeof variable4;
// let type5 = typeof variable5;

// console.log("Variable 1 is of type:", type1);
// console.log("Variable 2 is of type:", type2);
// console.log("Variable 3 is of type:", type3);
// console.log("Variable 4 is of type:", type4);
// console.log("Variable 5 is of type:", type5);
// var number = parseInt(prompt("Enter number: "));
 
// function checkDifference(number) {
//     let output = number - 13;
//     if (number>13){

//         console.log((output)*2);
//     }
//     else (console.log(`number is smaller than 13`))
//     return output;

// };
// checkDifference(number);
// var number1= parseInt(prompt("unesi prvi broj"))
// var number2=parseInt(prompt("unesi drugi broj"))
// let razlika1=100-number1;
// let razlika2=100-number2;
// function closer() {
// if (razlika1<razlika2) {

//     alert ("blizi do 100 je :"(number2))
// }
// else if (razlika2<razlika1){
// alert ("blizi do 100 je :"(number2))

// }
// else if (razlika1=razlika2) {
//     alert ("brojevi su isti");
// }
// else 
// alert ("unesi broj od 1 do 100")
// };
// closer()

// function sumArray(array){
//     let sum = 0 
//     for (let i = 0; i < 
//         array.length; i + 1) {
//             sum += array[i]
//         }

//         console.log(sum)
//         return sum
//     }
//     sumArray(10,10,8,9,10)
//     sum=sumArray
//     if ((sum/5)>8){
//         console.log("polozio")
//     }
//     else {
//         console.log("nije polozio")
//     };
// let array = [10,6,8,9,10];
// let sum = 0;

// array.map(x => sum += x);
// if ((sum/5)>8){
//     alert(`student pass`)
// }
// else alert(`student not pass`)
// let array=[1,50,100,150,200,"true",20,"","ovo je string"]
// for ( let i = 0 ; i<array.leght ;i+1) {
    
// }
// function storyTeller() {
//     const who = document.getElementById("who").value;
//     const what = document.getElementById("what").value;
//     const when = document.getElementById("when").value;
  
//     const story = `${who} ${what} ${when}!`;
  
//     const storyDiv = document.getElementById("story");
//     storyDiv.innerText = `Once upon a time, ${story}`;
//   }
let contacts = [];

function addContact() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;

    if (firstName === "" || lastName === "" || phoneNumber === "") {
        alert("Please fill out all fields.");
        return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
        alert("Please enter a valid phone number.");
        return;
    }

    let contact = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber
    };

    contacts.push(contact);

    displayContacts();
}

function displayContacts() {
    let table = document.getElementById("contactsTable");

    // clear table body
    table.innerHTML = "<tr><th>First Name</th><th>Last Name</th><th>Phone Number</th><th>Edit</th><th>Delete</th></tr>";

    for (let i = 0; i < contacts.length; i++) {
        let contact = contacts[i];
        let row = table.insertRow(i+1);
        let firstNameCell = row.insertCell(0);
        let lastNameCell = row.insertCell(1);
        let phoneNumberCell = row.insertCell(2);
        let editButtonCell = row.insertCell(3);
        let deleteButtonCell = row.insertCell(4);

        firstNameCell.innerHTML = contact.firstName;
        lastNameCell.innerHTML = contact.lastName;
        phoneNumberCell.innerHTML = contact.phoneNumber;

        let editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.onclick = function() { editContact(i) };
        editButtonCell.appendChild(editButton);

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = function() { deleteContact(i) };
        deleteButtonCell.appendChild(deleteButton);
    }
}

function editContact(index) {
    let contact = contacts[index];

    let newFirstName = prompt("Enter new first name", contact.firstName);
    let newLastName = prompt("Enter new last name", contact.lastName);
    let newPhoneNumber = prompt("Enter new phone number", contact.phoneNumber);

    if (newFirstName === "" || newLastName === "" || newPhoneNumber === "") {
        alert("Please fill out all fields.");
        return;
    }

    if (!validatePhoneNumber(newPhoneNumber)) {
        alert("Please enter a valid phone number.");
        return;
    }

    contacts[index] = {
        firstName: newFirstName,
        lastName: newLastName,
        phoneNumber: newPhoneNumber
    };

    displayContacts();
}

function deleteContact(index) {
    if (confirm("Are you sure you want to delete this contact?")) {
        contacts.splice(index, 1);
        displayContacts();
    }
}

function validatePhoneNumber(phoneNumber) {
    let pattern = /^\d{10}$/;
    return pattern.test(phoneNumber);
}


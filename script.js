let t = document.getElementById('time');
setInterval(() => {
    let time = new Date();
    t.innerHTML = time.toLocaleTimeString();
}, 1000);

// alert Message
function alert()
{
    document.getElementById("alert").style.display="block";
    // document.getElementById("myfrm").style.display="block";
}
//close function
function cls()
{
    document.getElementById("alert").style.display="none";
}
function cls1()
{
    document.getElementById("myfrm").style.display="none";
}

// change mode (dark/light)
function mode() {
    document.body.classList.toggle("mode");
}
//print function
function prt() {
    window.print();
}

//alert box
function next() {
    alert("No more...")
}


// Time Interval Function
setInterval(() => {
    let d = new Date();
    let date = d.toDateString();
    document.getElementById('date').innerHTML = date;
})



// fetching data

async function fet() {
    let a = await fetch("http://localhost:3000/student");
    let res = await a.json();
    let p = document.getElementById('display_data')
    let s = res.map((e) =>
        `
 <tr>
 <td>${e.id}</td>
 <td>${e.name}</td>
 <td>${e.address}</td>
 <td>${e.course}</td>
 <td>${e.grade}</td>
 <td><button onclick="mydelete('${e.id}')">Delete</button></td>
 <td><button onclick="myedit('${e.id}')">Update</button></td>
 </tr>
`).join(" ");
    p.innerHTML = s;
}
fet();

// Insert Data
function add() {
    let form_data = {
        "id": document.getElementById("id").value,
        "name": document.getElementById("name").value,
        "address": document.getElementById("address").value,
        "course": document.getElementById("course").value,
        "grade": document.getElementById("grade").value
    }
    fetch("http://localhost:3000/student", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(form_data)
    })
}

function mydelete(id) {
    fetch(`http://localhost:3000/student/${id}`, {
        method: "DELETE"
    })
        .then(res => alert("Do you want to Delete Data"))
}

let strid = 0;
function myedit(id) {
    strid = id;
    document.getElementById("myfrm").style.display = "block";
}

function editdata() {
    let myfrmdata = {
        "id": document.getElementById("id").value,
        "name": document.getElementById("name").value,
        "address": document.getElementById("address").value,
        "course": document.getElementById("course").value,
        "grade": document.getElementById("grade").value
    }
    fetch(`http://localhost:3000/student/${strid}`, {
        method: "PUT",
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(myfrmdata)
    })
        .then(res => alert("data edited!!"));
}

$(document).ready(function(){
    $('#main-content').slideDown(1000);
    $('#left').slideDown(1000);
    $('#navbar').slideDown(1000);
})
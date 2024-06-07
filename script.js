let t = document.getElementById('time');
setInterval(() => {
    let time = new Date();
    t.innerHTML = time.toLocaleTimeString();
}, 1000);

function login() {

}
// change mode (dark/light)
function mode() {
    var element = document.body;
    element.classList.toggle("mode");
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

// Insert Data
function add()
{
    let form_data = {
        "id":document.getElementById("id").value,
        "name":document.getElementById("name").value,
        "address":document.getElementById("address").value,
        "course":document.getElementById("course").value,
        "grade":document.getElementById("grade").value
    }
    fetch("http://localhost:3000/student",{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(form_data)
    })
}

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
 <td><button onclick="mymodify('${e.id}')">Modify</button></td>
 </tr>
`).join(" ");
    p.innerHTML = s;
}
fet();

function mydelete(id)
{
    fetch(`http://localhost:3000/student/${id}`,{
        method:"DELETE"
    })
    .then(res=>alert("Do you want to Delete Data"))
}

function mymodify(id)
{
    fetch(`http://localhost:3000/student/${id}`,{
        method:""
    })
}

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
 </tr>
`).join(" ");
    p.innerHTML = s;
}


let perc = document.getElementById('perc');
function per() {
    setInterval(() => {
        let n = Math.ceil(Math.random() * 10);
        perc.innerHTML = n;
    }, 400)
}
per();

let ghz = document.getElementById('ghz');
function gh() {
    setInterval(() => {
        let n = (Math.random() * 10.5);
        ghz.innerHTML = n;
    }, 400)
}
gh();

// lear More Function
function learMore() {
    window.open("https://www.canarahsbclife.com/blog/financial-planning/what-are-financial-goals-meaning-types-and-benefits", "width=600px", "height=600px", "left=450px", "top=100px")
}


// TEAM 

async function fetchData() {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let j = await a.json();
    let ot = "";
    let s = document.getElementById('displayData');
    let res = j.map((e) => ot += `

    <tr>
     <td>${e.id}</td>
     <td>${e.userId}</td>
     <td>${e.title}</td>
    </tr>
    `
    ).join(" ");
    s.innerHTML = res;
}


async function fetchData1() {
    let a = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
    let j = await a.json();
    let ot = "";
    let s = document.getElementById('displayData1');
    let res = j.map((e) => ot += `

    <tr>
     <td>${e.albumId}</td>
     <td>${e.id}</td>
     <td><img src="${e.url}"></td>
    </tr>
    `
    ).join(" ");
    s.innerHTML = res;
}



// Insert Items

var firstname = document.getElementById("firstname")
var lastname = document.getElementById("lastname")
var jsonBtn = document.getElementById("jsonbtn")
var jsonText = document.getElementById("jsontext")



jsonBtn.addEventListener("click", function () {
    var data = {
        "firstName": firstname.value,
        "lastName": lastname.value
    }
    jsonText.innerHTML = JSON.stringify(data)
})
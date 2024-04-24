let t = document.getElementById('time');
setInterval(() => {
    let time = new Date();
    t.innerHTML = time.toLocaleTimeString();
}, 1000);

function login() {

}

function mode() {
    var element = document.body;
    element.classList.toggle("mode");
}

function prt() {
    window.print();
}

function next()
{
    alert("No more...")
}

setInterval(()=>
{
    let d = new Date();
    let date = d.toDateString();
    document.getElementById('date').innerHTML = date;
})


// fetching data

async function fet()
{
    let a = await fetch("http://localhost:3000/student");
    let res = await a.json();
    let ot = "";
    let p = document.getElementById('display_data')
    let s = res.map((e)=>ot+=
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

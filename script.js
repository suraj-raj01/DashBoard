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


let perc = document.getElementById('perc');
function per()
{
    setInterval(()=>
{
    let n = Math.ceil(Math.random()*10);
    perc.innerHTML = n;
},400)
}
per();

let ghz = document.getElementById('ghz');
function gh()
{
    setInterval(()=>
{
    let n = (Math.random()*10.5);
    ghz.innerHTML = n;
},400)
}
gh();

// lear More Function
function learMore()
{
    window.open("https://www.canarahsbclife.com/blog/financial-planning/what-are-financial-goals-meaning-types-and-benefits","width=600px","height=600px","left=450px","top=100px")
}
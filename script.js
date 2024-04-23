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
function submit()
{
    window.open("http://127.0.0.1:5500/HtmlFiles/table.html");  
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
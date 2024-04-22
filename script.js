let t = document.getElementById('time');
setInterval(() => {
    let time = new Date();
    t.innerHTML = time.toLocaleTimeString();
}, 1000);

function login()
{

}

function mode() {
    var element = document.body;
    element.classList.toggle("mode");
 }
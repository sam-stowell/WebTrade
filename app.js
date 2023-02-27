function openPage(){
    var x = document.getElementById("search").value;

    if (x === "gta"){
        window.open("/gta.html");
    }

    if (x === "home"){
        window.open("/index.html");
    }

    if (x === "rl"){
        window.open("/rl.html");
    }

    if (x === "mc"){
        window.open("/mc.html");
    }
}
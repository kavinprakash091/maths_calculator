var play = false;
var s;
var action;
var timer;
var crt;
document.getElementById("start").onclick = function() {
    if (play == true) {
        location.reload();
    } else {
        play = true;
        s = 0;
        document.getElementById("scorevalue").innerHTML = s;
        show("time");
        document.getElementById("start").innerHTML = "Reset Game";
        hide("over");
        timer = 60;
        document.getElementById("rtime").innerHTML = timer;
        startcount();
        QA();
        for (i = 1; i <= 4; i++) {
            document.getElementById("c" + i).onclick = function() {
                if (play == true) {
                    if (this.innerHTML == crt) {
                        s += 5;
                        document.getElementById("scorevalue").innerHTML = s;
                        hide("wrong");
                        show("correct");
                        setTimeout(function() {
                            hide("correct");
                        }, 1000);
                        startcount();
                        QA();
                    } else {
                        hide("correct");
                        show("wrong");
                        setTimeout(function() {
                            hide("wrong");
                        }, 1000);
                    }
                }
            }
        }
    }
}

function startcount() {
    action = setInterval(function() {
        timer -= 1;
        document.getElementById("rtime").innerHTML = timer;
        if (timer == 0) {
            stopcount();
            show("over");
            document.getElementById("over").innerHTML = "<p>Game Over! :)</p><p>Your score is " + s + "</p>";
            hide("time");
            hide("correct");
            hide("wrong");
            play = false;
            document.getElementById("start").innerHTML = "Start Game";
        }
    }, 1000);
}

function stopcount() {
    clearInterval(action);
}

function hide(Id) {
    document.getElementById(Id).style.display = "none";
}

function show(Id) {
    document.getElementById(Id).style.display = "block";
}

function QA() {
    var x = 1 + Math.round(9 * Math.random());
    var y = 1 + Math.round(9 * Math.random());
    crt = x * y;
    document.getElementById("que").innerHTML = x + "x" + y;
    var crtpos = 1 + Math.round(3 * Math.random());
    document.getElementById("c" + crtpos).innerHTML = crt;
    var ans = [crt];
    for (i = 1; i <= 4; i++) {
        if (i != crtpos) {
            var wrg;
            do {
                wrg = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));
            } while (ans.indexOf(wrg) > -1);
            document.getElementById("c" + i).innerHTML = wrg;
            ans.push(wrg);
        }
    }
}
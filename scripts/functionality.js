var a;
var b;
var r;
var c;
var cal = 1;
var t = 1;
var r3;
var c3;
var r4;
var c4;
var flag = 0;
var imp1;
var inht;
var code;
var a1;
var cha = 1;
var rr;
var rc;
var color1;
var r5;
var c5;
var r6;
var c6;
var form1;
var code1;
var code3;
var get;
var char;

function leader() {
  for (i = 1; i <= a; i++) {
    for (j = 1; j <= b; j++) {
      if (
        document.getElementById(`box_${i}_${j}`).style.backgroundImage ==
        'linear-gradient(to right bottom, rgba(0, 0, 0, 0.4), rgb(0, 0, 0)), url("./assets/lock1.jpg")'
      ) {
        document.getElementById(`box_${i}_${j}`).style.backgroundImage = "";
        console.log("hello world");
      }
    }
  }
  console.log("hello");
  var leaderb = document.getElementsByTagName("body")[0];
  get = leaderb.innerHTML;
  leaderb.innerHTML = "";
  var node9 = document.createElement("div");
  node9.setAttribute("id", "leaderb");
  leaderb.appendChild(node9);
  node9.innerHTML = "LEADERBOARD";
  node11 = document.createElement("span");
  node11.setAttribute("id", "back");
  node11.innerHTML = "BACK";

  leaderb.appendChild(node11);
  node10 = document.createElement("div");
  node10.setAttribute("id", "leadbox");
  leaderb.appendChild(node10);

  node10.innerHTML = `HIGHEST-SCORE:${char} s`;
  document.getElementById("back").addEventListener("click", back);
}

function back() {
  document.getElementsByTagName("body")[0].innerHTML = "";
  document.getElementsByTagName("body")[0].innerHTML = get;
}
function mute() {
  if (document.getElementById("scontrol").innerHTML == "MUTE") {
    document.getElementById("scontrol").innerHTML = "UNMUTE";
    document.getElementById("music").muted = true;
  } else {
    if (document.getElementById("pause").innerHTML == "PAUSE") {
      document.getElementById("scontrol").innerHTML = "MUTE";

      document.getElementById("music").muted = false;
    }
  }
}
function stop() {
  if (document.getElementById("pause").innerHTML == "PAUSE") {
    clearInterval(code1);
    document.getElementById("music").muted = true;
    document.getElementById("game").style.transform = "rotateY(180deg)";
    inht = document.getElementById("game").innerHTML;
    setTimeout(func, 300);
    function func() {
      document.getElementById("game").innerHTML =
        "<span> MADE WITH LOVE BY ANKIT GARG</span>";
    }

    clearInterval(code);
    document.getElementById("pause").innerHTML = "RESUME";
  } else {
    code1 = setInterval(lock, 20000);

    if (document.getElementById("scontrol").innerHTML == "MUTE") {
      document.getElementById("music").muted = false;
    }
    document.getElementById("game").style.transform = "rotateY(360deg)";
    document.getElementById("pause").innerHTML = "PAUSE";
    setTimeout(func1, 300);
    function func1() {
      document.getElementById("game").innerHTML = inht;
      document.getElementById(`box_${rr}_${rc}`).style.backgroundImage = "";
    }

    code = setInterval(timer, 1000);
    trick = 2;
  }
}
document.addEventListener("keydown", keyw);
function keyw(event) {
  if (document.getElementById("pause").innerHTML == "PAUSE") {
    console.log(event);

    if (
      event.keyCode == "38" ||
      event.keyCode == "40" ||
      event.keyCode == "39" ||
      event.keyCode == "37"
    ) {
      console.log(document.getElementsByClassName(`item_${r4}_${c4}`)[0]);
      if (trick == 1) {
        code = setInterval(timer, 1000);

        trick++;
      }

      var gid = document.getElementsByClassName(`item_${r4}_${c4}`)[0].id;

      var pos = gid.split("_");
      var r5 = parseInt(pos[1]);
      var c5 = parseInt(pos[2]);
      if (event.keyCode == "40") {
        swap(r5 - 1, c5);
        var spl = document
          .getElementById(`box_${r5}_${c5}`)
          .innerHTML.split("<");
        if (parseInt(spl[0]) == (r5 - 1) * b + c5) {
          document.getElementById(`box_${r5}_${c5}`).style.backgroundColor =
            "orange";
        } else {
          if (
            document.getElementById(`box_${r5 - 1}_${c5}`).style
              .backgroundColor == "orange"
          ) {
            document.getElementById(
              `box_${r5 - 1}_${c5}`
            ).style.backgroundColor = "rgb(39,6,100)";
          }

          document.getElementById(`box_${r5}_${c5}`).style.backgroundColor =
            "rgb(206, 195, 43)";
        }
        document.getElementsByClassName(
          `item_${r3}_${c3}`
        )[0].style.backgroundColor = "rgb(39,6,100)";
      }
      if (event.keyCode == "38") {
        swap(r5 + 1, c5);
        var spl = document
          .getElementById(`box_${r5}_${c5}`)
          .innerHTML.split("<");
        if (parseInt(spl[0]) == (r5 - 1) * b + c5) {
          document.getElementById(`box_${r5}_${c5}`).style.backgroundColor =
            "orange";
        } else {
          if (
            document.getElementById(`box_${r5 + 1}_${c5}`).style
              .backgroundColor == "orange"
          ) {
            document.getElementById(
              `box_${r5 + 1}_${c5}`
            ).style.backgroundColor = "rgb(39,6,100)";
          }

          document.getElementById(`box_${r5}_${c5}`).style.backgroundColor =
            "rgb(206, 195, 43)";
        }
        document.getElementsByClassName(
          `item_${r3}_${c3}`
        )[0].style.backgroundColor = "rgb(39,6,100)";
      }
      if (event.keyCode == "37") {
        swap(r5, c5 + 1);
        var spl = document
          .getElementById(`box_${r5}_${c5}`)
          .innerHTML.split("<");
        if (parseInt(spl[0]) == (r5 - 1) * b + c5) {
          document.getElementById(`box_${r5}_${c5}`).style.backgroundColor =
            "orange";
        } else {
          if (
            document.getElementById(`box_${r5}_${c5 + 1}`).style
              .backgroundColor == "orange"
          ) {
            document.getElementById(
              `box_${r5}_${c5 + 1}`
            ).style.backgroundColor = "rgb(39,6,100)";
          }

          document.getElementById(`box_${r5}_${c5}`).style.backgroundColor =
            "rgb(206, 195, 43)";
        }
        document.getElementsByClassName(
          `item_${r3}_${c3}`
        )[0].style.backgroundColor = "rgb(39,6,100)";
      }
      if (event.keyCode == "39") {
        swap(r5, c5 - 1);
        var spl = document
          .getElementById(`box_${r5}_${c5}`)
          .innerHTML.split("<");
        if (parseInt(spl[0]) == (r5 - 1) * b + c5) {
          document.getElementById(`box_${r5}_${c5}`).style.backgroundColor =
            "orange";
        } else {
          if (
            document.getElementById(`box_${r5}_${c5 - 1}`).style
              .backgroundColor == "orange"
          ) {
            document.getElementById(
              `box_${r5}_${c5 - 1}`
            ).style.backgroundColor = "rgb(39,6,100)";
          }

          document.getElementById(`box_${r5}_${c5}`).style.backgroundColor =
            "rgb(206, 195, 43)";
        }
        document.getElementsByClassName(
          `item_${r3}_${c3}`
        )[0].style.backgroundColor = "rgb(39,6,100)";
      }
    }
  }
}

function newgame() {
  document.getElementById("game").innerHTML = "";
  numbergame(a, b);
  t = 0;
  document.getElementById("moves").innerHTML = "<p class='box'>Moves</p>" + t;
  t = 1;
  cal = 0;
  trick = 1;
  document.getElementById("stopwatch").innerHTML =
    "<p class='box'>Time</p>" + cal + " s";
  clearInterval(code);
  cal = 1;
}
function timer() {
  var a = cal;

  document.getElementById("stopwatch").innerHTML =
    "<p class='box'>Time</p>" + a + " s";
  cal = cal + 1;
}

function swap(r2, c2) {
  console.log(document.getElementById(`box_${r2}_${c2}`).style.backgroundImage);
  if (
    document.getElementById(`box_${r2}_${c2}`).style.backgroundImage !=
    'linear-gradient(to right bottom, rgba(0, 0, 0, 0.4), rgb(0, 0, 0)), url("./assets/lock1.jpg")'
  ) {
    var temp1 = document.getElementById(`box_${r2}_${c2}`).innerHTML;
    document.getElementById(`box_${r2}_${c2}`).innerHTML =
      document.getElementById(`box_${r}_${c}`).innerHTML;
    document.getElementById(`box_${r}_${c}`).innerHTML = temp1;
    var temp = document.getElementById(`box_${r2}_${c2}`).className;
    document.getElementById(`box_${r2}_${c2}`).className =
      document.getElementById(`box_${r}_${c}`).className;
    document.getElementById(`box_${r}_${c}`).className = temp;
    document.getElementById("moves").innerHTML = "<p class='box'>Moves</p>" + t;
    t++;
    flag = 0;

    r = r2;
    c = c2;
    if (cha == 1) {
      code1 = setInterval(lock, 20000);
      cha = 2;
    }
    for (l = 1; l <= a; l++) {
      for (k = 1; k <= b; k++) {
        imp1 = document.getElementById(`box_${l}_${k}`).innerHTML.split("<");
        if (parseInt(imp1[0]) == parseInt((l - 1) * b + k)) {
          flag++;
        }
      }
    }
    if (flag == a * b - 1) {
      clearInterval(code1);
      document.getElementById("game").style.display = "none";
      document.getElementById("newgame").style.display = "none";
      document.getElementById("moves").style.display = "none";
      document.getElementById("stopwatch").style.display = "none";
      document.getElementById("pause").style.display = "none";
      document.getElementById("music").muted = true;
      document.getElementById("music").load();
      document.getElementById("scontrol").display = "none";
    }
  }
}

var trick = 1;
function reply_click(clicked_id) {
  if (document.getElementById("pause").innerHTML == "PAUSE") {
    if (trick == 1) {
      code = setInterval(timer, 1000);

      trick++;
    }

    var pos = clicked_id.split("_");
    var r1 = parseInt(pos[1]);
    var c1 = parseInt(pos[2]);
    if (c1 < parseInt(b)) {
      if (
        document.getElementById(`box_${r1}_${c1 + 1}`).className ==
        document.getElementById(`box_${r}_${c}`).className
      ) {
        swap(r1, c1);

        var spl = document
          .getElementById(`box_${r1}_${c1 + 1}`)
          .innerHTML.split("<");
        if (parseInt(spl[0]) == (r1 - 1) * b + (c1 + 1)) {
          document.getElementById(`box_${r1}_${c1 + 1}`).style.backgroundColor =
            "orange";
        } else {
          if (
            document.getElementById(`box_${r1}_${c1}`).style.backgroundColor ==
            "orange"
          ) {
            document.getElementById(`box_${r1}_${c1}`).style.backgroundColor =
              "rgb(39,6,100)";
          }

          document.getElementById(`box_${r1}_${c1 + 1}`).style.backgroundColor =
            "rgb(206, 195, 43)";
        }
        document.getElementsByClassName(
          `item_${r3}_${c3}`
        )[0].style.backgroundColor = "rgb(39,6,100)";

        return;
      }
    }

    if (c1 > 1) {
      if (
        document.getElementById(`box_${r1}_${c1 - 1}`).className ==
        document.getElementById(`box_${r}_${c}`).className
      ) {
        swap(r1, c1);
        var spl = document
          .getElementById(`box_${r1}_${c1 - 1}`)
          .innerHTML.split("<");
        if (parseInt(spl[0]) == (r1 - 1) * b + (c1 - 1)) {
          document.getElementById(`box_${r1}_${c1 - 1}`).style.backgroundColor =
            "orange";
        } else {
          console.log(
            document.getElementById(`box_${r1}_${c1 - 1}`).style.backgroundColor
          );
          if (
            document.getElementById(`box_${r1}_${c1}`).style.backgroundColor ==
            "orange"
          ) {
            document.getElementById(`box_${r1}_${c1}`).style.backgroundColor =
              "rgb(39,6,100)";
          }

          document.getElementById(`box_${r1}_${c1 - 1}`).style.backgroundColor =
            "rgb(206, 195, 43)";
        }
        document.getElementsByClassName(
          `item_${r3}_${c3}`
        )[0].style.backgroundColor = "rgb(39,6,100)";

        return;
      }
    }
    if (r1 > 1) {
      if (
        document.getElementById(`box_${r1 - 1}_${c1}`).className ==
        document.getElementById(`box_${r}_${c}`).className
      ) {
        swap(r1, c1);
        var spl = document
          .getElementById(`box_${r1 - 1}_${c1}`)
          .innerHTML.split("<");
        if (parseInt(spl[0]) == (r1 - 2) * b + c1) {
          document.getElementById(`box_${r1 - 1}_${c1}`).style.backgroundColor =
            "orange";
        } else {
          console.log(
            document.getElementById(`box_${r1 - 1}_${c1}`).style.backgroundColor
          );
          if (
            document.getElementById(`box_${r1}_${c1}`).style.backgroundColor ==
            "orange"
          ) {
            document.getElementById(`box_${r1}_${c1}`).style.backgroundColor =
              "rgb(39,6,100)";
          }

          document.getElementById(`box_${r1 - 1}_${c1}`).style.backgroundColor =
            "rgb(206, 195, 43)";
        }
        document.getElementsByClassName(
          `item_${r3}_${c3}`
        )[0].style.backgroundColor = "rgb(39,6,100)";

        return;
      }
    }
    if (r1 < parseInt(a)) {
      if (
        document.getElementById(`box_${r1 + 1}_${c1}`).className ==
        document.getElementById(`box_${r}_${c}`).className
      ) {
        swap(r1, c1);
        var spl = document
          .getElementById(`box_${r1 + 1}_${c1}`)
          .innerHTML.split("<");
        if (parseInt(spl[0]) == r1 * b + c1) {
          document.getElementById(`box_${r1 + 1}_${c1}`).style.backgroundColor =
            "orange";
        } else {
          console.log(
            document.getElementById(`box_${r1 + 1}_${c1}`).style.backgroundColor
          );
          if (
            document.getElementById(`box_${r1}_${c1}`).style.backgroundColor ==
            "orange"
          ) {
            document.getElementById(`box_${r1}_${c1}`).style.backgroundColor =
              "rgb(39,6,100)";
          }

          document.getElementById(`box_${r1 + 1}_${c1}`).style.backgroundColor =
            "rgb(206, 195, 43)";
        }
        document.getElementsByClassName(
          `item_${r3}_${c3}`
        )[0].style.backgroundColor = "rgb(39,6,100)";

        return;
      }
    }
    var boxr = document.getElementsByClassName(`item_${r5}_${c5}`)[0].id;
    console.log(boxr);
    var pos3 = boxr.split("_");
    r6 = parseInt(pos3[1]);
    c6 = parseInt(pos3[2]);
    if ((r6 == r1 && c6 != c1) || (r6 != r1 && c6 == c1)) {
      slide(r1, c1);
    }
  }
}

function slide(r2, c2) {
  if (
    document.getElementById(`box_${r2}_${c2}`).style.backgroundImage !=
    'linear-gradient(to right bottom, rgba(0, 0, 0, 0.4), rgb(0, 0, 0)), url("./assets/lock1.jpg")'
  ) {
    if (c2 < c6) {
      for (j = c2; j < c6; j++) {
        if (
          document.getElementById(`box_${r2}_${j}`).style.backgroundImage ==
          'linear-gradient(to right bottom, rgba(0, 0, 0, 0.4), rgb(0, 0, 0)), url("./assets/lock1.jpg")'
        ) {
          return;
        }
      }
      for (i = c6; i > c2; i--) {
        var spl = document
          .getElementById(`box_${r6}_${i - 1}`)
          .innerHTML.split("<");
        var temp1 = document.getElementById(`box_${r6}_${i}`).innerHTML;
        document.getElementById(`box_${r6}_${i}`).innerHTML =
          document.getElementById(`box_${r6}_${i - 1}`).innerHTML;
        document.getElementById(`box_${r6}_${i - 1}`).innerHTML = temp1;
        var temp = document.getElementById(`box_${r6}_${i}`).className;
        document.getElementById(`box_${r6}_${i}`).className =
          document.getElementById(`box_${r6}_${i - 1}`).className;
        document.getElementById(`box_${r6}_${i - 1}`).className = temp;
        document.getElementById("moves").innerHTML =
          "<p class='box'>Moves</p>" + t;

        if (parseInt(spl[0]) == (r6 - 1) * b + i) {
          document.getElementById(`box_${r6}_${i}`).style.backgroundColor =
            "orange";
          document.getElementById(`box_${r2}_${i - 1}`).style.backgroundColor =
            "rgb(39,6,100)";
        } else {
          document.getElementById(`box_${r6}_${i}`).style.backgroundColor =
            "rgb(206, 195, 43)";
          document.getElementById(`box_${r2}_${i - 1}`).style.backgroundColor =
            "rgb(39,6,100)";
        }
      }
    }
    if (c2 > c6) {
      for (j = c2; j > c6; j--) {
        if (
          document.getElementById(`box_${r2}_${j}`).style.backgroundImage ==
          'linear-gradient(to right bottom, rgba(0, 0, 0, 0.4), rgb(0, 0, 0)), url("./assets/lock1.jpg")'
        ) {
          return;
        }
      }
      for (i = c6; i < c2; i++) {
        var spl = document
          .getElementById(`box_${r6}_${i + 1}`)
          .innerHTML.split("<");
        var temp1 = document.getElementById(`box_${r6}_${i}`).innerHTML;
        document.getElementById(`box_${r6}_${i}`).innerHTML =
          document.getElementById(`box_${r6}_${i + 1}`).innerHTML;
        document.getElementById(`box_${r6}_${i + 1}`).innerHTML = temp1;
        var temp = document.getElementById(`box_${r6}_${i}`).className;
        document.getElementById(`box_${r6}_${i}`).className =
          document.getElementById(`box_${r6}_${i + 1}`).className;
        document.getElementById(`box_${r6}_${i + 1}`).className = temp;
        document.getElementById("moves").innerHTML =
          "<p class='box'>Moves</p>" + t;

        if (parseInt(spl[0]) == (r6 - 1) * b + i) {
          document.getElementById(`box_${r6}_${i}`).style.backgroundColor =
            "orange";
          document.getElementById(`box_${r2}_${i + 1}`).style.backgroundColor =
            "rgb(39,6,100)";
        } else {
          document.getElementById(`box_${r6}_${i}`).style.backgroundColor =
            "rgb(206, 195, 43)";
          document.getElementById(`box_${r2}_${i + 1}`).style.backgroundColor =
            "rgb(39,6,100)";
        }
      }
    }
    if (r2 > r6) {
      for (j = r2; j > r6; j--) {
        if (
          document.getElementById(`box_${j}_${c2}`).style.backgroundImage ==
          'linear-gradient(to right bottom, rgba(0, 0, 0, 0.4), rgb(0, 0, 0)), url("./assets/lock1.jpg")'
        ) {
          return;
        }
      }
      for (i = r6; i < r2; i++) {
        var spl = document
          .getElementById(`box_${i + 1}_${c6}`)
          .innerHTML.split("<");
        var temp1 = document.getElementById(`box_${i}_${c6}`).innerHTML;
        document.getElementById(`box_${i}_${c6}`).innerHTML =
          document.getElementById(`box_${i + 1}_${c6}`).innerHTML;
        document.getElementById(`box_${i + 1}_${c6}`).innerHTML = temp1;
        var temp = document.getElementById(`box_${i}_${c6}`).className;
        document.getElementById(`box_${i}_${c6}`).className =
          document.getElementById(`box_${i + 1}_${c6}`).className;
        document.getElementById(`box_${i + 1}_${c6}`).className = temp;
        document.getElementById("moves").innerHTML =
          "<p class='box'>Moves</p>" + t;

        if (parseInt(spl[0]) == (i - 1) * b + c6) {
          document.getElementById(`box_${i}_${c6}`).style.backgroundColor =
            "orange";
          document.getElementById(`box_${i + 1}_${c2}`).style.backgroundColor =
            "rgb(39,6,100)";
        } else {
          document.getElementById(`box_${i}_${c6}`).style.backgroundColor =
            "rgb(206, 195, 43)";
          document.getElementById(`box_${i + 1}_${c2}`).style.backgroundColor =
            "rgb(39,6,100)";
        }
      }
    }
    if (r2 < r6) {
      for (j = r2; j < r6; j++) {
        if (
          document.getElementById(`box_${j}_${c2}`).style.backgroundImage ==
          'linear-gradient(to right bottom, rgba(0, 0, 0, 0.4), rgb(0, 0, 0)), url("./assets/lock1.jpg")'
        ) {
          return;
        }
      }
      for (i = r6; i > r2; i--) {
        var spl = document
          .getElementById(`box_${i - 1}_${c6}`)
          .innerHTML.split("<");
        var temp1 = document.getElementById(`box_${i}_${c6}`).innerHTML;
        document.getElementById(`box_${i}_${c6}`).innerHTML =
          document.getElementById(`box_${i - 1}_${c6}`).innerHTML;
        document.getElementById(`box_${i - 1}_${c6}`).innerHTML = temp1;
        var temp = document.getElementById(`box_${i}_${c6}`).className;
        document.getElementById(`box_${i}_${c6}`).className =
          document.getElementById(`box_${i - 1}_${c6}`).className;
        document.getElementById(`box_${i - 1}_${c6}`).className = temp;
        document.getElementById("moves").innerHTML =
          "<p class='box'>Moves</p>" + t;

        if (parseInt(spl[0]) == (i - 1) * b + c6) {
          document.getElementById(`box_${i}_${c6}`).style.backgroundColor =
            "orange";
          document.getElementById(`box_${i - 1}_${c2}`).style.backgroundColor =
            "rgb(39,6,100)";
        } else {
          document.getElementById(`box_${i}_${c6}`).style.backgroundColor =
            "rgb(206, 195, 43)";
          document.getElementById(`box_${i - 1}_${c2}`).style.backgroundColor =
            "rgb(39,6,100)";
        }
      }
    }
    t++;
    flag = 0;
    r = r2;
    c = c2;

    if (cha == 1) {
      code1 = setInterval(lock, 20000);
      cha = 2;
    }
    for (l = 1; l <= a; l++) {
      for (k = 1; k <= b; k++) {
        imp1 = document.getElementById(`box_${l}_${k}`).innerHTML.split("<");
        if (parseInt(imp1[0]) == parseInt((l - 1) * b + k)) {
          flag++;
        }
      }
    }
    if (flag == a * b - 1) {
      clearInterval(code1);
      document.getElementById("game").style.display = "none";
      document.getElementById("newgame").style.display = "none";
      document.getElementById("moves").style.display = "none";
      document.getElementById("stopwatch").style.display = "none";
      document.getElementById("pause").style.display = "none";
      document.getElementById("music").muted = true;
      document.getElementById("music").load();
      document.getElementById("scontrol").display = "none";
    }
  }
}

function entry() {
  a1 = document.forms[0].name.value;
  a = document.forms[0].text1.value;
  b = document.forms[0].text2.value;

  var c = document.forms[0].text3.value;
  var e = document.forms[0].button.value;
  char = Math.floor(Math.random() * 800);
  if (window.innerWidth <= "580") {
    if (a != 4 || b != 4) {
      alert("only 4*4 allowed in this viewport-width");
      return;
    }
  }
  if (window.innerWidth > "580" && window.innerWidth <= "750") {
    if (a > 7 || b > 7) {
      alert("rows and columns should be less than 8  in this viewport-width");
      return;
    }
  }
  if (window.innerWidth > "750" && window.innerWidth <= "850") {
    if (a > 8 || b > 8) {
      alert("rows and columns should be less than 9  in this viewport-width");
      return;
    }
  }

  if (
    a <= 0 ||
    b <= 0 ||
    a == 1 ||
    b == 1 ||
    b == 2 ||
    a > 10 ||
    b > 10 ||
    b == 3
  ) {
    alert("not allowed");
    return;
  }
  var d = confirm("the information that you entered cannot be changed later");

  if (d == true) {
    form1 = document.getElementById("form1");
    if (form1.style.display != "none") {
      form1.style.display = "none";
    }
    if (c == "number") {
      numbergame(a, b);
    }

    if (c == "image") {
      imagegame(a, b);
    }
  }
}
function numbergame(row, column) {
  clearInterval(code1);
  cha = 1;
  localStorage.setItem("test", a1);
  var lead = document.getElementById("leader");
  lead.style.width = "140px";
  lead.style.height = "40px";

  lead.innerHTML = "LEADERBOARD";
  var sou = document.getElementById("scontrol");
  sou.innerHTML = "MUTE";
  sou.style.width = "100px";
  sou.style.height = "40px";

  var mus = document.getElementById("music");
  mus.autoplay = true;
  mus.loop = true;
  mus.muted = false;
  mus.load();

  var multiply = row * column - 1;
  document.getElementById("newgame").style.visibility = "visible";

  document.getElementById("newgame").style.width = "100px";
  document.getElementById("newgame").style.height = "60px";
  document.getElementById("heading").innerHTML = multiply + " PUZZLE";
  document.getElementById("heading").style.marginBottom = "40px";
  document.getElementById("stopwatch").style.visibility = "visible";
  document.getElementById("stopwatch").style.width = "100px";
  document.getElementById("stopwatch").style.height = "60px";

  document.getElementById("moves").style.visibility = "visible";

  document.getElementById("moves").style.width = "100px";
  document.getElementById("moves").style.height = "60px";
  var game1 = document.getElementById("game");
  if (window.innerWidth > "580") {
    var w = 80 * parseInt(column);
    var h = 80 * parseInt(row);
  } else {
    var w = 80 * parseInt(column);
    var h = 80 * parseInt(row);
  }
  var head = document.getElementById("ahead");
  head.style.width = w + "px";
  head.style.height = "60px";

  game1.style.width = w + "px";
  game1.style.height = h + "px";
  game1.style.border = "2px solid blue";

  var array1 = new Array();
  r = Math.floor(Math.random() * row + 1);
  c = Math.floor(Math.random() * column + 1);
  r3 = r;
  c3 = c;
  r4 = r;
  c4 = c;
  r5 = r;
  c5 = c;
  var node1;
  var reduce = 2;
  var repeat = 1;

  for (k = 1; k < row * column; k++) {
    array1[k - 1] = k;
  }
  for (i = 1; i <= row; i++) {
    for (j = 1; j <= column; j++) {
      var node = document.createElement("div");
      node.setAttribute("id", `box_${i}_${j}`);
      var node5 = document.createElement("div");

      node5.setAttribute("class", "obox");

      var style = document.createElement("style");
      style.type = "text/css";
      node5.appendChild(node);

      if (i != r || j != c) {
        var index = array1.indexOf(repeat);
        if (index != -1) {
          array1.splice(index, 1);
        }
        var p = Math.floor(Math.random() * (row * column - reduce));
        var n = array1[p];
        var textnode = document.createTextNode(n);
        node.appendChild(textnode);
        node.setAttribute("onclick", "reply_click(this.id)");

        game1.appendChild(node5);
        array1.splice(p, 1);

        if (index != -1) {
          array1.push(repeat);
        }
        node1 = document.querySelector(`#box_${i}_${j}`);

        style.innerHTML = `.item_${i}_${j} { background-color:rgb(206, 195, 43);width:70px;height:70px;display:inline-block;box-shadow:6px 6px 6px black;color:white;text-shadow:6px 6px  4px black; text-align:center; }`;
        node1.appendChild(style);
        node1.className = `item_${i}_${j}`;
        reduce = reduce + 1;
        repeat = repeat + 1;
      } else {
        var textnode = document.createTextNode(".");
        node.appendChild(textnode);
        node.setAttribute("onclick", "reply_click(this.id)");

        game1.appendChild(node5);
        node1 = document.querySelector(`#box_${i}_${j}`);

        style.innerHTML = `.item_${i}_${j} { background-color:rgb(39,6,100);width:70px;height:70px;display:inline-block;color:rgb(39,6,100);}`;
        node1.appendChild(style);
        node1.className = `item_${i}_${j}`;
        repeat = repeat + 1;
      }
    }
  }

  if (window.innerWidth > "580") {
    for (q = 1; q <= row; q++) {
      for (s = 1; s <= column; s++) {
        if (q != r || s != c) {
          document.getElementById(`box_${q}_${s}`).style.animation =
            "zoom 0.6s 1";
        }
      }
    }
  } else {
    for (q = 1; q <= row; q++) {
      for (s = 1; s <= column; s++) {
        if (q != r || s != c) {
          document.getElementById(`box_${q}_${s}`).style.animation =
            "zoom1 0.6s 1";
        }
      }
    }
  }
  var pau = document.getElementById("pause");
  pau.style.width = w + "px";
  pau.style.visibility = "visible";
}
function lock() {
  rr = Math.floor(1 + Math.random() * a);
  rc = Math.floor(1 + Math.random() * b);

  if (
    document.getElementsByClassName(`item_${rr}_${rc}`)[0] ==
    document.getElementsByClassName(`item_${r}_${c}`)[0]
  ) {
    console.log("hello world");
  } else {
    color1 = document.getElementById(`box_${rr}_${rc}`).style.backgroundColor;

    document.getElementById(`box_${rr}_${rc}`).style.backgroundImage =
      'linear-gradient( to right bottom,rgba(0,0,0,0.4),rgba(0,0,0,1)),url("./assets/lock1.jpg")';
    document.getElementById(`box_${rr}_${rc}`).style.backgroundSize =
      "100% 100%";
    document.getElementById(`box_${rr}_${rc}`).style.backgroundRepeat =
      "no-repeat";
    document.getElementById(`box_${rr}_${rc}`).style.backgroundPosition =
      "center";

    setTimeout(function () {
      unlock(rr, rc, color1);
    }, 5000);
  }
}
function unlock(rr, rc, color1) {
  document.getElementById(`box_${rr}_${rc}`).style.backgroundImage = "";
}

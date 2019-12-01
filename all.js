var data = [{
    img: 1,
    h1: "Creative",
    h2: "Fella",
    h3: "Creative Fella",
    h6: "Call to action"



  },
  {
    img: 2,
    h1: "Friendly",
    h2: "Evil",
    h3: "Friendly Evil"
  },
  {
    img: 3,
    h1: "Tranquil ",
    h2: "Eye",
    h3: "Tranquil Eye"
  },
  {
    img: 4,
    h1: "Cocteau",
    h2: "Twins",
    h3: "Cocteau Twins"
  },
  {
    img: 5,
    h1: "Belle",
    h2: "Angus",
    h3: "Belle Angus"
  },
  {
    img: 6,
    h1: "Passion",
    h2: "amour",
    h3: "Passion amour"
  }
];

var general = function (id) {
  if (id.substr(0, 1) == ".") {
    return document.getElementsByClassName(id.substr(1));
  }
  return document.getElementById(id);
};

function addSilder() {
  var tpl_main = general("template-main")
    .innerHTML.replace(/^\s*/, "")
    .replace(/\s*$/, "");
  var tpl_ctrl = general("template-ctrl")
    .innerHTML.replace(/^\s*/, "")
    .replace(/\s*$/, "");

  var out_main = [];
  var out_ctrl = [];
  for (i in data) {
    var _html_main = tpl_main
      .replace(/{{index}}/g, data[i].img)
      .replace(/{{h2}}/g, data[i].h1)
      .replace(/{{h3}}/g, data[i].h2)

      .replace(/{{css}}/g, ["", "main-item-right"][i % 2]);

    var _html_ctrl = tpl_ctrl
      .replace(/{{index}}/g, data[i].img)
      .replace(/{{h4}}/g, data[i].h3)
      .replace(/{{h5}}/g, data[i].h6);
    out_main.push(_html_main);
    out_ctrl.push(_html_ctrl);
  }

  general("template-main").innerHTML = out_main.join("");
  general("template-ctrl").innerHTML = out_ctrl.join("");

  general("template-main").innerHTML += tpl_main
    .replace(/{{index}}/g, "{{index}}")
    .replace(/{{h2}}/g, data[i].h1)
    .replace(/{{h3}}/g, data[i].h2);
  general("main-{{index}}").id = "main-background";
}

function switchSlider(n) {
  var main = general("main-" + n);
  var ctrl = general("ctrl-" + n);

  var clear_main = general(".main-item");
  var clear_ctrl = general(".ctrl-item");

  for (i = 0; i < clear_ctrl.length; i++) {
    clear_main[i].className = clear_main[i].className.replace(
      " main-item-active",
      ""
    );
    clear_ctrl[i].className = clear_ctrl[i].className.replace(
      " ctrl-item-active",
      ""
    );
  }

  main.className += " main-item-active";
  ctrl.className += " ctrl-item-active";

  setTimeout(function () {
    general("main-background").innerHTML = main.innerHTML;
  }, 1000);
}

setTimeout(function () {
  document.getElementById("silder-txt").onmouseover = function () {
    this.style.backgroundColor = "blue";
  }

}, 1000)



window.onload = function () {
  addSilder();
  switchSlider(2);
};
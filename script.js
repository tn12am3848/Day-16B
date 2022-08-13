var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];
var list7 = [];
var list8 = [];
var list9 = [];
var list10 = [];
var list11 = [];
var list12 = [];
var list13 = [];

var n = 1;
var x = 0;

function addrow() {
  var addrown = document.getElementById("table");
  var newrow = addrown.insertRow(n);

  list1[x] = document.getElementById("fname").value;
  list2[x] = document.getElementById("lname").value;
  list3[x] = document.getElementById("address1").value;
  list4[x] = document.getElementById("address2").value;
  list5[x] = document.getElementById("city").value;
  list6[x] = document.getElementById("state").value;
  list7[x] = document.getElementById("country").value;
  list8[x] = document.getElementById("pincode").value;
  list9[x] = radval1();
  list9[x] = radval2();
  list9[x] = radval3();
  list9[x] = radval4();
  list9[x] = radval5();

  var cell1 = newrow.insertCell(0);
  var cell2 = newrow.insertCell(1);
  var cell3 = newrow.insertCell(2);
  var cell4 = newrow.insertCell(3);
  var cell5 = newrow.insertCell(4);
  var cell6 = newrow.insertCell(5);
  var cell7 = newrow.insertCell(6);
  var cell8 = newrow.insertCell(7);
  var cell9 = newrow.insertCell(8);
  var cell10 = newrow.insertCell(9);
  var cell11 = newrow.insertCell(10);
  var cell12 = newrow.insertCell(11);
  var cell13 = newrow.insertCell(12);

  cell1.innerHTML = list1[x];
  cell1.innerHTML = list1[x];
  cell2.innerHTML = list2[x];
  cell3.innerHTML = list3[x];
  cell4.innerHTML = list4[x];
  cell5.innerHTML = list5[x];
  cell6.innerHTML = list6[x];
  cell7.innerHTML = list7[x];
  cell8.innerHTML = list8[x];
  cell9.innerHTML = list9[x];
  cell10.innerHTML = list10[x];
  cell11.innerHTML = list11[x];
  cell12.innerHTML = list12[x];
  cell13.innerHTML = list13[x];

  n++;
  x++;
}

function radval1() {
  if (document.getElementById("chennai").checked) {
    return (list9[x] = document.getElementById("chennai").value);
  } else {
    return (list9[x] = "");
  }
}
function radval2() {
  if (document.getElementById("covai").checked) {
    return (list10[x] = document.getElementById("covai").value);
  } else {
    return (list10[x] = "");
  }
}
function radval3() {
  if (document.getElementById("madurai").checked) {
    return (list11[x] = document.getElementById("madurai").value);
  } else {
    return (list11[x] = "");
  }
}
function radval4() {
  if (document.getElementById("salem").checked) {
    return (list12[x] = document.getElementById("salem").value);
  } else {
    return (list12[x] = "");
  }
}
function radval5() {
  if (document.getElementById("vellore").checked) {
    return (list13[x] = document.getElementById("vellore").value);
  } else {
    return (list13[x] = "");
  }
}

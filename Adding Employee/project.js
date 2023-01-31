var employees = [];
var t1;
var employee = {
  fname: "",
  lname: "",
  department: "",
  employeeId: "",
  hireDate: "",
};

function employeeCreation() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  name = lname + ", " + fname;

  var dpt = document.getElementById("department").value;
  var random = Math.floor(10000000 + Math.random() * 90000000);

  var emp = Object.create(employee);
  emp.fname = fname;
  emp.lname = lname;
  emp.department = dpt;
  emp.employeeId = random;
  var hd = new Date();
  emp.hireDate = hd.toDateString();

  var jsonemp = JSON.stringify(emp);

  $.ajax({
    dataType: "json",
    url: "project.php",
    data: { myData: jsonemp },
    contentType: "application/json; charset=utf-8",

    success: function (data) {
      t1 = parseInt(data);
      document.getElementById("temp").innerHTML = "Total Employee: " + t1;
    },
    error: function (e) {
      console.log("error:  " + e.responseText);
    },
  });

  return emp;
}

function addToArray() {
  newemployee = employeeCreation();
  employees.push(newemployee);

  /*Checking Employee is unique*/
  for (i = 1; i < employees.length; i++) {
    if (newemployee.employeeId == employees[i - 1].employeeId) {
      employees.pop;
    }
  }

  console.log(employees);
  var temp = employees.length - 1;
  name = employees[temp].lname + ", " + employees[temp].fname;

  document.getElementById("name").innerHTML = "Name: " + name;

  document.getElementById("dprt").innerHTML =
    "Department: " + employees[temp].department;

  document.getElementById("empid").innerHTML =
    "Employee ID: " + employees[temp].employeeId;

  document.getElementById("hdate").innerHTML =
    "Hire Date: " + employees[temp].hireDate;

  var browser = (function () {
    var test = function (regexp) {
      return regexp.test(window.navigator.userAgent);
    };

    switch (true) {
      case test(/edg/i):
        $("#browser").addClass("fab fa-edge-legacy");
        return "Microsoft Edge";
      case test(/trident/i):
        $("#browser").addClass("fab fa-internet-explorer");
        return "Microsoft Internet Explorer";
      case test(/firefox|fxios/i):
        $("#browser").addClass("fab fa-firefox");
        return "Mozilla Firefox";
      case test(/opr\//i):
        $("#browser").addClass("fab fa-opera	");
        return "Opera";
      case test(/ucbrowser/i):
        $("#browser").addClass("fab fa-uniregistry");
        return "UC Browser";
      case test(/samsungbrowser/i):
        $("#browser").addClass("fab fa-edge");
        return "Samsung Browser";
      case test(/chrome|chromium|crios/i):
        $("#browser").addClass("fab fa-chrome");
        return "Google Chrome";
      case test(/safari/i):
        $("#browser").addClass("fab fa-safari");
        return "Apple Safari";
      default:
        return "Other";
    }
  })();
  document.getElementById("browser").innerHTML = " " + browser;

  return false;
}

function init(e) {
  ("use strict");

  document.getElementById("form").onsubmit = addToArray;
}
window.onload = init;

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

function getDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  }

  if(mm<10) {
      mm = '0'+mm
  }

  today = mm + '/' + dd + '/' + yyyy;
  return today;
}


// Add a "checked" symbol when clicking on a list item
let listItem = document.querySelector('li');
console.log(listItem);
listItem.addEventListener('click', event => {
  listItem.style.backgroundColor = "green";
  listItem.appendChild(listItem);
})
// list.addEventListener('click', event => {
//   if (ev.target.tagName === 'LI') {
//     ev.target.style.color = "green";
//   }
// }, false);

const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click",() => {
  newElement();
})
// Create a new list item when clicking on the "Add" button
function newElement() {
  var todoList = document.getElementById("myUL");
  var doneList = document.getElementById("completed-items");
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        var timeStamp = document.createTextNode(" " + new Date());
        todoList.removeChild(div);
        div.appendChild(timeStamp);
        div.removeChild(this);

        doneList.appendChild(div);
      }
    }
  }
}

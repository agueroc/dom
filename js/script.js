const list = document.querySelector("#favchap");
const input = document.querySelector("input");
const buildButton = document.querySelector("button");
  document.getElementById("submit").addEventListener("click", function(){

    button.onclick = function() {
      let mylist = document.getElementById("favchap").value;
      input.value = '';

      const listItem = document.createElement("li");
      const listText = document.createElement("span");
      const listBtn = document.createElement("button");

      listItem.appendChild(listText);
      listText.textContent = mylist;
      listItem.appendChild(listBtn);
      listBtn.textContent = "Delete";
      list.appendChild(listItem);

      listBtn.onclick = function(e) {
      list.removeChild(listItem);
      input.focus();
      }
    }
  });
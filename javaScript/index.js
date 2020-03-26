console.log("Hello JS");
const todo_list = document.querySelector(".todo-list");


const $header = document.createElement("div");

$header.setAttribute("class","header"); 
todo_list.appendChild($header);

let $myheader = document.createElement("my-header");
$myheader.setAttribute("class","my-header");
$header.appendChild($myheader);

const $title = document.createElement("h2");
// title.appendChild(my$header);
const $h2Title = document.createTextNode("My To Do List");
$myheader.appendChild($title).appendChild($h2Title);

const $header_inp = document.createElement("INPUT");
$header_inp.type = "text";
$header_inp.class = "myInput";
$header_inp.placeholder = "Title...";
$myheader.appendChild($header_inp);


 const $headerBtn = document.createElement("button");
 $headerBtn.setAttribute("class","header_button");
 const $headerBtnTxt = document.createTextNode("ADD");
 $headerBtn.appendChild($headerBtnTxt);
 $myheader.appendChild($headerBtn);
let $ul = document.createElement("ul");
$myheader.appendChild($ul);

const $BtnRemove = document.createElement("button");
$BtnRemove.setAttribute("class","BtnRemove");
$BtnRemoveBtnTxt1 = document.createTextNode("Remove")
$BtnRemove.appendChild($BtnRemoveBtnTxt1);

const $BtnDone = document.createElement("button");
$BtnDone.setAttribute("class","BtnDone");
$BtnDoneBtnTxt1 = document.createTextNode("Done")
$BtnDone.appendChild($BtnDoneBtnTxt1);

$headerBtn.addEventListener("click", (event) => {
    var value = $header_inp.value;
    var $li = document.createElement("li");
    $li.innerHTML = value;  
   $li.appendChild($BtnRemove);  
    $li.appendChild($BtnDone);
$ul.appendChild($li);
    $header_inp.value = "";
},false);


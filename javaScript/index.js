console.log("Hello JS");

const todo_list = document.querySelector(".todo-list");

const $header = document.createElement("div");

$header.setAttribute("class", "header");
todo_list.appendChild($header);

let $myheader = document.createElement("my-header");
$myheader.setAttribute("class", "my-header");
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

// document.onkeydown = function checkKeycode(event)
// {
// 	var keycode;
// 	if(!event) var event =  $$header_inp.value.event;
// 	if (event.keyCode) keycode = event.keyCode; // IE
// 	else if(event.which) keycode = event.which; // all browsers
// 	console.log("keycode: "+keycode);
// }


const $headerDivBtn = document.createElement("div");
$headerDivBtn.setAttribute('class', "buttons");
$myheader.appendChild($headerDivBtn)

const $headerBtn = document.createElement("button");
$headerBtn.setAttribute("class", "header_button");
const $headerBtnTxt = document.createTextNode("ADD");

const $headerBtnDone = document.createElement("button");
$headerBtnDone.setAttribute("class", "header_button_done");
const $headerBtnTxtDone = document.createTextNode("Done");

$headerDivBtn.appendChild($headerBtn);
$headerBtn.appendChild($headerBtnTxt);

$headerDivBtn.appendChild($headerBtnDone);
$headerBtnDone.appendChild($headerBtnTxtDone);

const $removeChangeDiv = document.createElement("div");
$removeChangeDiv.setAttribute('class', 'removeAll chengeColorDiv');
const $removeAllBtn = document.createElement("button");
$removeAllBtn.setAttribute('class', 'removeAllItems')
$removeAllBtnTxt = document.createTextNode("Remove All Items");


const $colorBtn = document.createElement("button");
$colorBtn.setAttribute('class', 'colorBtn');
$colorBtnTxt = document.createTextNode("Chenge Color");

$myheader.appendChild($removeChangeDiv)
         .appendChild($removeAllBtn).appendChild($removeAllBtnTxt)
$myheader.appendChild($removeChangeDiv)
                .appendChild($colorBtn).appendChild($colorBtnTxt);

                
$colorBtn.addEventListener('click', () => {

  if($header.style.border === "5px solid blue"){
      $header.style.border = "5px solid green";
  } else {
      $header.style.border = "5px solid blue"
    
  }

     })

let $ul = document.createElement("ul");
$myheader.appendChild($ul);

   const headBtn = $headerBtn.addEventListener(
    "click",
    event => {

      
      const value = $header_inp.value;
      if(value !== "") {


        const $divBtn = document.createElement("div");
      $divBtn.setAttribute("class", "divBtn");
       $ul.appendChild($divBtn);
     

        const $BtnRemove = document.createElement("button");
      $BtnRemove.setAttribute("class", "BtnRemove");
      $BtnRemoveBtnTxt1 = document.createTextNode("Remove");
      $BtnRemove.appendChild($BtnRemoveBtnTxt1);
      $divBtn.appendChild($BtnRemove);
      
      const $BtnDone = document.createElement("button");
      $BtnDone.setAttribute("class", "BtnDone");
      $BtnDoneBtnTxt1 = document.createTextNode("Done");
      $BtnDone.appendChild($BtnDoneBtnTxt1);
      $divBtn.appendChild($BtnDone);

      const $li = document.createElement("li");
      $li.innerHTML = value;
      $li.appendChild($divBtn);
      // $li.appendChild($BtnDone);
      $ul.appendChild($li);

      $header_inp.value = "";
  
      $BtnRemove.addEventListener("click", function(){
          $li.remove();
      })
      $BtnDone.addEventListener("click", ()=>{
        $li.style.textDecoration=$li.style.textDecoration ==="line-through"?"none":"line-through";
      })
      $removeAllBtn.addEventListener('click', () => {
        $li.remove()
      })

      

      const $headerBtnDone1 = $headerBtnDone.addEventListener("click", ()=>{
       if( $li.style.textDecoration !== "line-through"){
        //  $li.remove();
        $li.style.display = "none";
        $li.innerHTML = $headerBtnDone1;
        $headerBtnDone.style.backgroundColor = "green";
       }
      })

    }
      },

    false
    
  );
  

    

  

    
  
      
    

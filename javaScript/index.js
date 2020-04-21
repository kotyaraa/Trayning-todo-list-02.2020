

const todo_list = document.querySelector(".todo-list");
const $header = document.querySelector(".header")
let $myheader = document.querySelector(".my-header");
const $header_inp = document.querySelector(".myInput");
const $headerDivBtn = document.querySelector(".buttons");
const $todoBtn = document.querySelector(".todoBtn");
const $doneBtn = document.querySelector(".doneBtn");
const $removeAllBtn = document.querySelector(".remove");
const $colorBtn = document.querySelector(".chengeColorBtn");



$colorBtn.addEventListener('click', () => {

  if($header.style.border === "5px solid blue"){
      $header.style.border = "5px solid green";
  } else {
      $header.style.border = "5px solid blue"
  }

     })

let $ul = document.createElement("ul");
$headerDivBtn.appendChild($ul);

   const headBtn = $todoBtn.addEventListener(
     "click",
     (event) => {
       const value = $header_inp.value;
       if (value !== "") {
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
         $ul.appendChild($li);

         $header_inp.value = "";

         $BtnRemove.addEventListener("click", function () {
           $li.remove();
         });
         $BtnDone.addEventListener("click", () => {
           $li.style.textDecoration = $li.style.textDecoration === "line-through" ? "none" : "line-through";
         });
         $removeAllBtn.addEventListener("click", () => {
           $li.remove();
         });

         const $headerBtnDone1 = $doneBtn.addEventListener("click", () => {
           if ($li.style.textDecoration !== "line-through") {
             $li.style.display = "none";
             $li.innerHTML = $headerBtnDone1;
             $doneBtn.style.backgroundColor = "green";
           }
         });
       }
     },

     false
   );
  

    

  

    
  
      
    

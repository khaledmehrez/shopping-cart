

   //function to add to cart
    function addtocart1(i){
  
    
    /*add photo */ 
    let img= document.querySelectorAll(".image")
    
    
    

   cloneing=img[i].cloneNode(true)
   
   
   
   
   document.getElementById("here").appendChild(cloneing)
 
   /*add name*/
   let name= document.querySelectorAll(".name")
   let clonename=name[i].cloneNode(true)
   document.getElementById("here").appendChild(clonename)
   /**add price */
  let prix= document.querySelectorAll(".price")
  
   let cloneprice=prix[i].cloneNode(true)
   document.getElementById("here").appendChild(cloneprice)
   //add remove btn
   let removebtn= document.querySelectorAll(".removeobj")
   let cloneremovebtn=removebtn[i].cloneNode(true)
   document.getElementById("here").appendChild(cloneremovebtn).style.display="block";
   


   
}
Tabsomme=[]

function addpriceTotab(j){
   let btnn=document.querySelectorAll(".bouton")
  
   let clickedbtn=btnn[j]
  
   
   let valprice=clickedbtn.value
  
   
   

 
 
 
 Tabsomme.push(parseInt(valprice))
 
 
 calculatSomme(Tabsomme)
 
 
 
}


function calculatSomme(Tabsomme){
   console.log(Tabsomme)


let som=0
for(let j=0;j<Tabsomme.length;j++){
 som=som+Tabsomme[j]}
 
 
 
 
 let textnodesom = document.createTextNode("your cart coast"+" "+som+" "+"click to buy");
 



 document.getElementById("sommelocation").innerHTML=""
document.getElementById("sommelocation").appendChild(textnodesom)







somaftercoupon=som


}



Tabname=[];
Tabemail=[];
Tabpassword=[];

function signUp(){
   let name=document.getElementById("registration-name")
   let mail= document.getElementById("registration-email")
   let password=document.getElementById("registration-password")
   
   
   if (name.value!="" && password.value!="" &&mail.value!="" && mail.value.indexOf("@")>-1){
   Tabname.push(name.value)
   Tabemail.push(mail.value)
   Tabpassword.push(password.value)
   alert("your sign-up is completed please sign in to your account")
}
   else 
   return alert("please verify your informations")
}
 
function signIn(){
   let signmail=document.getElementById("signin-email")
   let signpassword=document.getElementById("signin-password")
   if(signmail.value===Tabemail[0] && signpassword.value===Tabpassword[0])
   {document.getElementById("btnloginsign-up").href="homeafterlog.html"
   }
   else 
   {alert("please enter valid information")}
  
}

/*function removeObject(x){
  let cartposition= document.getElementById("here")
  cartposition.deleteRow(x)
  
 

}*/
//coupon function
somaftercoupon=0
function addCoupon(){
if (document.getElementById("coupon").value!="")
{let textsom = document.createTextNode("Congratulation you have earned a 25% reduction your cart now coasts: "+(somaftercoupon-(somaftercoupon/4)));
 



document.getElementById("sommelocation").innerHTML=""
document.getElementById("sommelocation").appendChild(textsom)
}

}
//alert purshase
function sucessPurchase(){
   if (document.querySelector("#sommelocation").textContent!=0)
 alert("your puchase is successfully done")

}

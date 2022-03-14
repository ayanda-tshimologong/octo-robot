const element = document.querySelector(".blue");
const element1 = document.querySelector(".yellow");
const element2 = document.querySelector(".flame");
const element3 = document.querySelector(".light-blue");

element.addEventListener("mouseover", event => {
 
  element.innerHTML="#0B2343";
});

element.addEventListener("mouseout", event => {

 
  element.innerHTML="";
}); 

element1.addEventListener("mouseover", event => {
 
    element1.innerHTML="#FFCCO5";
  });
  
  element1.addEventListener("mouseout", event => {
   
    element1.innerHTML="";
  }); 

  element2.addEventListener("mouseover", event => {
 
    element2.innerHTML="#FF6B40";
  });
  
  element2.addEventListener("mouseout", event => {
   
    element2.innerHTML="";
  }); 

  element3.addEventListener("mouseover", event => {
 
    element3.innerHTML="#00BAE4";
  });
  
  element3.addEventListener("mouseout", event => {
   
    element3.innerHTML="";
  }); 
/* Form Validation */
function  validated() {
  const myForm = document.forms['my-form'];
  const fName = document.getElementById('fname').value;

 document.querySelector('.userName').innerHTML = fName;

 if (fName == ''){
   alert("Name must be filled out.")
 }
 return false;

}


/* Animated Area Js */
function animated() {
  const animatedBox = document.querySelector('.animated_box');
  let boxPosition = 0;

  let interval = setInterval(farm, 5);

  function farm() {
    if (boxPosition < 350){
      boxPosition++;
      animatedBox.style.top = boxPosition + 'px';
      animatedBox.style.left = boxPosition + 'px';
    } else {
      clearInterval(interval);
    }
  }
}


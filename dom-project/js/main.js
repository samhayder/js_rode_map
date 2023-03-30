const  milestonesData = JSON.parse(data).data;

//Load  milestone data
function  loadMilestone() {
  const milestones = document.querySelector('.milestones');
  milestones.innerHTML = `${milestonesData.map((milestone) => {
    return `<div class="milestone border-b" id="${milestone._id}">
    <div class="flex">
      <div class="checkbox"><input type="checkbox" onclick= "checkedMilestone(this, ${milestone._id})"/></div>
      <div onclick= "showMilestone(this, ${milestone._id})">
        <p>
          ${milestone.name}
          <span><i class="fas fa-chevron-down"></i></span>
        </p>
      </div>
    </div>
    <div class="hidden_panel">
      ${milestone.modules.map((module) => {
        return `<div class="module border-b">
        <p>${module.name}</p>
      </div>`
      }).join("")}
    </div>
  </div>`
  }).join("")}`
}

//Show single milestone panel
function  showMilestone(milestoneModule,id) {
  const currentPanel = milestoneModule.parentNode.nextElementSibling;
  const showPanel = document.querySelector('.show');
  const activeNote = document.querySelector('.active');

  //first hide previous show class [other then the clicked element]
  if (showPanel && !currentPanel.classList.contains('show')){
    showPanel.classList.remove('show');
  }
  //current panel toggle [show one element]
  currentPanel.classList.toggle('show');

  //remove active class [other than the clicked element]
  if (activeNote && !currentPanel.classList.contains('active')){
    activeNote.classList.remove('active');
  }
  //active show panel [one clicked element]
  milestoneModule.classList.toggle('active');

  //call milestone details information
  milestoneDetails(id);
}

//show milestone details information
function milestoneDetails(id) {
  const milestoneImage = document.querySelector('.milestoneImage');
  const title = document.querySelector('.title');
  const details = document.querySelector('.details');

  milestoneImage.style.opacity = '0';
  milestoneImage.src = milestonesData[id].image
  title.innerText = milestonesData[id].name;
  details.innerText = milestonesData[id].description;
}

//set event listening by hero images
const milestoneImage = document.querySelector('.milestoneImage');
milestoneImage.onload = function () {
  this.style.opacity = '1';
}

//checked milestone list by done
function checkedMilestone (checkbox, id) {
  const milestoneList = document.querySelector('.milestones');
  const doneList = document.querySelector('.doneList');
  const item = document.getElementById(id);

  if (checkbox.checked){
    milestoneList.removeChild(item);
    doneList.appendChild(item);
  }else {
    milestoneList.appendChild(item);
    doneList.removeChild(item);
  }
  
}

loadMilestone();
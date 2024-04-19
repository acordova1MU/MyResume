//Creating Dynamic Fields
//Education
const addSchoolBtn = document.querySelector("form .add-school");
const education = document.querySelector("form .education");
const eduBtns = document.querySelector("form .education-buttons");
const submitBtn = document.querySelector("submit");

function addSchool(){
    //Add School Label and Input Elements
    var addSchoolName = document.createElement("input");
    var addSchoolNameLabel = document.createElement("label");

    addSchoolNameLabel.setAttribute("for", "schoolName");
    addSchoolNameLabel.innerHTML = "School Name ";
    addSchoolName.type="text";

    //Add Degree Label and Input Elements
    var addDegree = document.createElement("input");
    var addDegreeLabel = document.createElement("label");

    addDegreeLabel.setAttribute("for", "degree");
    addDegreeLabel.innerHTML = "Degree or Certificate ";
    addDegree.type="text";

    //Add Graduation Year Label and Input Elements
    var addGraduation = document.createElement("input");
    var addGraduationLabel = document.createElement("label");

    addGraduationLabel.setAttribute("for", "degree");
    addGraduationLabel.innerHTML = "Graduation Year ";
    addGraduation.type="text";

    //Add Delete Button
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "-";
    deleteBtn.className = "del-school";
    deleteBtn.addEventListener("click", deleteSchool);
    deleteBtn.type = "button"

    //Add Button
    var addBtn = document.createElement("button");
    addBtn.innerHTML = "+";
    addBtn.className = "add-school";
    addBtn.addEventListener("click", addSchool);
    addBtn.type = "button"

    //Add and Del Education Button Div for Styling
    const createdBtnsDiv = document.createElement("div");
    createdBtnsDiv.className = "education-add";
    createdBtnsDiv.appendChild(deleteBtn);
    createdBtnsDiv.appendChild(addBtn);

    //Adding Div
    const educationDiv = document.createElement("div");
    educationDiv.className = "created-education";
    educationDiv.appendChild(addSchoolNameLabel)
    educationDiv.appendChild(addSchoolName);
    educationDiv.appendChild(addDegreeLabel);
    educationDiv.appendChild(addDegree);
    educationDiv.appendChild(addGraduationLabel);
    educationDiv.appendChild(addGraduation);
    educationDiv.appendChild(createdBtnsDiv);
    education.appendChild(educationDiv);
    educationDiv.before(eduBtns);
}

function deleteSchool() {
    this.parentElement.parentElement.remove();
}

//Work Experience
const addExperienceBtn = document.querySelector("form .add-experience");
const experience = document.querySelector("form .experience");
const expBtns = document.querySelector("form .experience-buttons")

function addExperience(){
    //Add School Label and Input Elements
    var addJobTitle = document.createElement("input");
    var addJobTitleLabel = document.createElement("label");

    addJobTitleLabel.setAttribute("for", "title");
    addJobTitleLabel.innerHTML = "Job Title ";
    addJobTitle.type="text";

    //Add Degree Label and Input Elements
    var addEmployer = document.createElement("input");
    var addEmployerLabel = document.createElement("label");

    addEmployerLabel.setAttribute("for", "employer");
    addEmployerLabel.innerHTML = "Employer Name ";
    addEmployer.type="text";

    //Add Graduation Year Label and Input Elements
    var addDescription = document.createElement("textarea");
    var addDescriptionLabel = document.createElement("label");

    addDescriptionLabel.setAttribute("for", "description");
    addDescriptionLabel.innerHTML = "Role Description ";

    //Add Delete Button
    var deleteExpBtn = document.createElement("button")
    deleteExpBtn.innerHTML = "-";
    deleteExpBtn.className = "del-experience";
    deleteExpBtn.addEventListener("click", deleteExperience);
    deleteExpBtn.type = "button";

    //Add Button
    var addExpBtn = document.createElement("button")
    addExpBtn.innerHTML = "+";
    addExpBtn.className = "add-experience";
    addExpBtn.addEventListener("click", addExperience);
    addExpBtn.type = "button";

    //Add and Del Experience Button Div for Styling
    const createdExpBtnsDiv = document.createElement("div");
    createdExpBtnsDiv.className = "experience-add";
    createdExpBtnsDiv.appendChild(deleteExpBtn);
    createdExpBtnsDiv.appendChild(addExpBtn);

    //Adding Div
    const experienceDiv = document.createElement("div");
    experienceDiv.appendChild(addJobTitleLabel);
    experienceDiv.appendChild(addJobTitle);
    experienceDiv.appendChild(addEmployerLabel);
    experienceDiv.appendChild(addEmployer);
    experienceDiv.appendChild(addDescriptionLabel);
    experienceDiv.appendChild(addDescription);
    experienceDiv.appendChild(createdExpBtnsDiv)
    experience.appendChild(experienceDiv);
    experienceDiv.before(expBtns);
}

function deleteExperience() {
    this.parentElement.parentElement.remove();
}

addExperienceBtn.addEventListener("click", addExperience);
addSchoolBtn.addEventListener("click", addSchool);

//Dynamic Multi-Step Form Functionality
const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next");
const backBtn = document.querySelectorAll("form .back");
const form = document.querySelector("form");

nextBtn.forEach(button=>{
    button.addEventListener("click", (e) => {
        changeStep("next");
    })
})

backBtn.forEach(button=>{
    button.addEventListener("click", (e) => {
        changeStep("back");
    })
})

function changeStep(btn) {
    let index = 0;
    const active = document.querySelector("form .step.active");
    index = steps.indexOf(active)
    steps[index].classList.remove("active");
    if (btn === "next"){
        index ++;
    }else if(btn === "back"){
        index--;
    }

    steps[index].classList.add("active");
    console.log(btn)
    console.log(active)
}

//Form Data

//Contact Info
const formResume = document.getElementById('resume');
const nameForm = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');

//Objective Statement
const objective = document.getElementById('objective');

//Education
const schoolName = document.getElementById('schoolName');
const degree = document.getElementById('degree');
const graduation = document.getElementById('graduation');

const schoolName2 = document.getElementById('schoolName2');
const degree2 = document.getElementById('degree2');
const graduation2 = document.getElementById('graduation2');

const schoolName3 = document.getElementById('schoolName3');
const degree3 = document.getElementById('degree3');
const graduation3 = document.getElementById('graduation3');

//Experience
const title = document.getElementById('title');
const employer = document.getElementById('employer');
const description = document.getElementById('description');

const title2 = document.getElementById('title2');
const employer2 = document.getElementById('employer2');
const description2 = document.getElementById('description2');

const title3 = document.getElementById('title3');
const employer3 = document.getElementById('employer3');
const description3 = document.getElementById('description3');

//Skills
const skill = document.getElementById('skill');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    //Contact Information
    const nameValue = nameForm.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const addressValue = address.value;
    const cityValue = city.value;
    const stateValue = state.value;
    
    //Objective Statement
    const objectiveValue = objective.value;
    
    //Education
    const schoolNameValue = schoolName.value;
    const degreeValue = degree.value;
    const graduationValue = graduation.value;

    const schoolNameValue2 = schoolName2.value;
    const degreeValue2 = degree2.value;
    const graduationValue2 = graduation2.value;

    const schoolNameValue3 = schoolName3.value;
    const degreeValue3 = degree3.value;
    const graduationValue3 = graduation3.value;
    
    //Experience
    const titleValue = title.value;
    const employerValue = employer.value;
    const descriptionValue = description.value;

    const titleValue2 = title2.value;
    const employerValue2 = employer2.value;
    const descriptionValue2 = description2.value;

    const titleValue3 = title3.value;
    const employerValue3 = employer3.value;
    const descriptionValue3 = description3.value;
    
    //Skills
    const skillValue = skill.value;

    localStorage.setItem('name', nameValue);
    localStorage.setItem('email', emailValue);
    localStorage.setItem('phone', phoneValue);
    localStorage.setItem('address', addressValue);
    localStorage.setItem('city', cityValue);
    localStorage.setItem('state', stateValue);

    localStorage.setItem('objective', objectiveValue);

    localStorage.setItem('school', schoolNameValue);
    localStorage.setItem('degree', degreeValue);
    localStorage.setItem('graduation', graduationValue);

    localStorage.setItem('school2', schoolNameValue2);
    localStorage.setItem('degree2', degreeValue2);
    localStorage.setItem('graduation2', graduationValue2);

    localStorage.setItem('school3', schoolNameValue3);
    localStorage.setItem('degree3', degreeValue3);
    localStorage.setItem('graduation3', graduationValue3);

    localStorage.setItem('title', titleValue);
    localStorage.setItem('employer', employerValue);
    localStorage.setItem('description', descriptionValue);

    localStorage.setItem('title2', titleValue2);
    localStorage.setItem('employer2', employerValue2);
    localStorage.setItem('description2', descriptionValue2);

    localStorage.setItem('title3', titleValue3);
    localStorage.setItem('employer3', employerValue3);
    localStorage.setItem('description3', descriptionValue3);

    localStorage.setItem('skill', skillValue);

    window.location.href = "preview.html";
})

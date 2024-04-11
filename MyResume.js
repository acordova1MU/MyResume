//Creating Dynamic Fields
//Education
const addSchoolBtn = document.querySelector("form .add-school");
const education = document.querySelector("form .education");
const eduBtns = document.querySelector("form .education-buttons")

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
    var deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "-";
    deleteBtn.className = "del-school";
    deleteBtn.addEventListener("click", deleteSchool);

    //Add Button
    var addBtn = document.createElement("button")
    addBtn.innerHTML = "+";
    addBtn.className = "add-school";
    addBtn.addEventListener("click", addSchool);

    //Adding Div
    const educationDiv = document.createElement("div");
    educationDiv.appendChild(addSchoolNameLabel)
    educationDiv.appendChild(addSchoolName);
    educationDiv.appendChild(addDegreeLabel);
    educationDiv.appendChild(addDegree);
    educationDiv.appendChild(addGraduationLabel);
    educationDiv.appendChild(addGraduation);
    educationDiv.appendChild(deleteBtn);
    educationDiv.appendChild(addBtn);
    education.appendChild(educationDiv);
    educationDiv.before(eduBtns);
}

function deleteSchool() {
    this.parentElement.remove();
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

    //Add Button
    var addExpBtn = document.createElement("button")
    addExpBtn.innerHTML = "+";
    addExpBtn.className = "add-experience";
    addExpBtn.addEventListener("click", addExperience);

    //Adding Div
    const experienceDiv = document.createElement("div");
    experienceDiv.appendChild(addJobTitleLabel);
    experienceDiv.appendChild(addJobTitle);
    experienceDiv.appendChild(addEmployerLabel);
    experienceDiv.appendChild(addEmployer);
    experienceDiv.appendChild(addDescriptionLabel);
    experienceDiv.appendChild(addDescription);
    experienceDiv.appendChild(deleteExpBtn);
    experienceDiv.appendChild(addExpBtn);
    experience.appendChild(experienceDiv);
    experienceDiv.before(expBtns);
}

function deleteExperience() {
    this.parentElement.remove();
}

addExperienceBtn.addEventListener("click", addExperience);
addSchoolBtn.addEventListener("click", addSchool);

//Dynamic Multi-Step Form Functionality
const steps =Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next");
const backBtn = document.querySelectorAll("form .back");
const form =document.querySelector("form");

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
}
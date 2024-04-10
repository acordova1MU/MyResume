//Creating Dynamic Fields
const addSchoolBtn = document.querySelector("form .add-school");
const education = document.querySelector("form .education");

function addSchool(){
    //Add School Label and Input Elements
    var addSchoolName = document.createElement("input");
    var addSchoolNameLabel = document.createElement("label");

    addSchoolNameLabel.setAttribute("for", "schoolName");
    addSchoolNameLabel.innerHTML = "School Name ";
    addSchoolName.type="text";
    addSchoolName.setAttribute("placeholder", "School Name");

    //Add Degree Label and Input Elements
    var addDegree = document.createElement("input");
    var addDegreeLabel = document.createElement("label");

    addDegreeLabel.setAttribute("for", "degree");
    addDegreeLabel.innerHTML = "Degree or Certificate ";
    addDegree.type="text";
    addDegree.setAttribute("placeholder", "Degree");

    //Add Graduation Year Label and Input Elements
    var addGraduation = document.createElement("input");
    var addGraduationLabel = document.createElement("label");

    addGraduationLabel.setAttribute("for", "degree");
    addGraduationLabel.innerHTML = "Graduation Year ";
    addGraduation.type="text";
    addGraduation.setAttribute("placeholder", "Graduation Year");

    //Add Delete Button
    var deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "Delete School";
    deleteBtn.addEventListener("click", deleteSchool);

    //Adding Div
    const educationDiv = document.createElement("div");
    educationDiv.appendChild(addSchoolNameLabel)
    educationDiv.appendChild(addSchoolName);
    educationDiv.appendChild(addDegreeLabel);
    educationDiv.appendChild(addDegree);
    educationDiv.appendChild(addGraduationLabel);
    educationDiv.appendChild(addGraduation);
    educationDiv.appendChild(deleteBtn)
    education.appendChild(educationDiv);
    educationDiv.before(addSchoolBtn)
}

function deleteSchool() {
    this.parentElement.remove();
}

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
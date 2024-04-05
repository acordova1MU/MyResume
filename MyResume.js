//Creating Dynamic Fields
const addSchoolBtn = document.querySelector("#add-school");
const education = document.getElementById("education");

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
    addGraduationLabel.innerHTML = "Geaduation Year ";
    addGraduation.type="text";
    addGraduation.setAttribute("placeholder", "Graduation Year");

    //Adding Div
    const educationDiv = document.createElement("div");
    educationDiv.appendChild(addSchoolNameLabel)
    educationDiv.appendChild(addSchoolName);
    educationDiv.appendChild(addDegreeLabel);
    educationDiv.appendChild(addDegree);
    educationDiv.appendChild(addGraduationLabel);
    educationDiv.appendChild(addGraduation);
    education.appendChild(educationDiv);
}

addSchoolBtn.addEventListener("click", addSchool);

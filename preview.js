//Loading Data
//Contact Information
const namePreview = localStorage.getItem('name');
const email = localStorage.getItem('email');
const phone = localStorage.getItem('phone');
const address = localStorage.getItem('address');
const city = localStorage.getItem('city');
const state = localStorage.getItem('state');

//Objective
const objective = localStorage.getItem('objective');

//Education
const school = localStorage.getItem('school');
const degree = localStorage.getItem('degree');
const graduation = localStorage.getItem('graduation');

const school2 = localStorage.getItem('school2');
const degree2 = localStorage.getItem('degree2');
const graduation2 = localStorage.getItem('graduation2');

const school3 = localStorage.getItem('school3');
const degree3 = localStorage.getItem('degree3');
const graduation3 = localStorage.getItem('graduation3');

//Experience
const title = localStorage.getItem('title');
const employer = localStorage.getItem('employer');
const description = localStorage.getItem('description');

const title2 = localStorage.getItem('title2');
const employer2 = localStorage.getItem('employer2');
const description2 = localStorage.getItem('description2');

const title3 = localStorage.getItem('title3');
const employer3 = localStorage.getItem('employer3');
const description3 = localStorage.getItem('description3');

//Skills
const skill = localStorage.getItem('skill');
const skill2 = localStorage.getItem('skill2');
const skill3 = localStorage.getItem('skill3');

document.getElementById('name').textContent = namePreview;
document.getElementById('email').textContent = email;
document.getElementById('phone').textContent = phone;
document.getElementById('address').textContent = address;
document.getElementById('city').textContent = city;
document.getElementById('state').textContent = state;

document.getElementById('objective').textContent = objective;

document.getElementById('school').textContent = school;
document.getElementById('degree').textContent = degree;
document.getElementById('graduation').textContent = graduation;

document.getElementById('school2').textContent = school2;
document.getElementById('degree2').textContent = degree2;
document.getElementById('graduation2').textContent = graduation2;

document.getElementById('school3').textContent = school3;
document.getElementById('degree3').textContent = degree3;
document.getElementById('graduation3').textContent = graduation3;

document.getElementById('title').textContent = title;
document.getElementById('employer').textContent = employer;
document.getElementById('description').textContent = description;

document.getElementById('title2').textContent = title2;
document.getElementById('employer2').textContent = employer2;
document.getElementById('description2').textContent = description2;

document.getElementById('title3').textContent = title3;
document.getElementById('employer3').textContent = employer3;
document.getElementById('description3').textContent = description3;

document.getElementById('skill').textContent = skill;
document.getElementById('skill2').textContent = skill2;
document.getElementById('skill3').textContent = skill3;

//Using PDF Library
function generatePDF(){
    var element = document.getElementById("resume-container");
    html2pdf(element);
}
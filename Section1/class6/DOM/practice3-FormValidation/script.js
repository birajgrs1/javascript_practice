document.getElementById("jobApplicationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let linkedin = document.getElementById("linkedin").value;
    let experience = document.getElementById("experience").value;
    let resume = document.getElementById("resume").files[0];

    //only letters
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        alert("Name should contain only letters.");
        return;
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email.");
        return;
    }

    //  only numbers, minimum length
    if (!/^\d{10,15}$/.test(phone)) {
        alert("Phone number should contain only numbers and be at least 10 digits.");
        return;
    }

    // LinkedIn URL validation
    if (!linkedin.startsWith("https://www.linkedin.com/")) {
        alert("Please enter a valid LinkedIn profile URL.");
        return;
    }

    if (experience < 0 || experience > 50) {
        alert("Experience should be between 0 and 50 years.");
        return;
    }
  
    if (!resume) {
        alert("Please upload your resume.");
        return;
    }
    let fileType = resume.name.split('.').pop().toLowerCase();
    if (!["pdf", "doc", "docx"].includes(fileType)) {
        alert("Only PDF, DOC, or DOCX files are allowed for the resume.");
        return;
    }
    if (resume.size > 2 * 1024 * 1024) {  
        alert("Resume file size should not exceed 2 MB.");
        return;
    }

    alert("Form submitted successfully!");
});

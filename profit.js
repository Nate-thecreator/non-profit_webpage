document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {

        const email = document.getElementById("email").value;
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const organization = document.getElementById("organization").value;
        const phonenumber = document.getElementById("phonenumber").value;
        const begindate = document.getElementById("begindate").value;
        const enddate = document.getElementById("enddate").value;
        const message = document.getElementById("message").value;


        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            event.preventDefault(); 
            return;
        }

        if (!fname || !lname) {
            alert("Please fill in your first and last name.");
            event.preventDefault(); 
            return;
        }

        if (!organization || !phonenumber) {
            alert("please fill in your organization and phone number.");
            event.preventDefault();
            return;
        }

        if (!begindate || !enddate) {
            alert("Please fill out begin and end date.");
            event.preventDefault();
            return;
        }


        alert(`Thank you, ${fname}! Your form has been submitted.`);
    });
});
function sendMail(contactForm) {
    emailjs.send("service_hs5tljx", "template_o9nml2i", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        }, 
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}
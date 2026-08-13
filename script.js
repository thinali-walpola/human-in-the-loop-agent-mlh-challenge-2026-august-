const userRequest = document.getElementById("userRequest");

const generateBtn =
    document.getElementById("generateBtn");

const agentSection =
    document.getElementById("agentSection");

const statusIcon =
    document.getElementById("statusIcon");

const statusTitle =
    document.getElementById("statusTitle");

const statusText =
    document.getElementById("statusText");

const emailPreview =
    document.getElementById("emailPreview");

const emailTo =
    document.getElementById("emailTo");

const emailSubject =
    document.getElementById("emailSubject");

const emailBody =
    document.getElementById("emailBody");

const approvalBox =
    document.getElementById("approvalBox");

const approvalButtons =
    document.getElementById("approvalButtons");

const approveBtn =
    document.getElementById("approveBtn");

const rejectBtn =
    document.getElementById("rejectBtn");

const result =
    document.getElementById("result");


// Generate email

generateBtn.addEventListener("click", function () {

    const request = userRequest.value.trim();


    if (request === "") {

        alert("Please describe what you want the agent to do.");

        return;
    }


    // Show agent section

    agentSection.classList.remove("hidden");


    statusIcon.textContent = "🤖";

    statusTitle.textContent = "Agent is working...";

    statusText.textContent =
        "Analyzing your request and preparing an email.";


    emailPreview.classList.add("hidden");

    approvalBox.classList.add("hidden");

    approvalButtons.classList.add("hidden");

    result.classList.add("hidden");


    // Simulate autonomous agent processing

    setTimeout(function () {

        generateEmail(request);

    }, 1000);

});


// Generate email

function generateEmail(request) {

    statusIcon.textContent = "⚠️";

    statusTitle.textContent =
        "Approval required";

    statusText.textContent =
        "The agent prepared an email, but it cannot send it without your approval.";


    emailTo.textContent =
        "teacher@example.com";


    emailSubject.textContent =
        "Request for Assignment Extension";


    emailBody.textContent =
        `Dear Sir/Madam,

I am writing to kindly request an extension for my assignment.

${request}

I would greatly appreciate your consideration.

Thank you for your understanding.

Best regards,
Student`;


    emailPreview.classList.remove("hidden");

    approvalBox.classList.remove("hidden");

    approvalButtons.classList.remove("hidden");

}


// Approve

approveBtn.addEventListener("click", function () {

    statusIcon.textContent = "📨";

    statusTitle.textContent =
        "Email sent";

    statusText.textContent =
        "The human approved the sensitive action.";


    approvalBox.classList.add("hidden");

    approvalButtons.classList.add("hidden");


    result.textContent =
        "✅ Approved! The email has been sent successfully.";


    result.className =
        "result success";

});


// Reject

rejectBtn.addEventListener("click", function () {

    statusIcon.textContent = "🛑";

    statusTitle.textContent =
        "Action cancelled";

    statusText.textContent =
        "The human rejected the sensitive action.";


    approvalBox.classList.add("hidden");

    approvalButtons.classList.add("hidden");


    result.textContent =
        "❌ Rejected. The email was NOT sent.";


    result.className =
        "result cancelled";

});

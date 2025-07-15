const form = document.getElementById("custom-contact-form");
const modal = document.getElementById("confirmation-modal");
const summaryList = document.getElementById("submission-summary");

const nameField = document.getElementById("full-name");
const emailField = document.getElementById("email");
const customBuildRadios = document.getElementsByName("custom-build");

// Add real-time validation
[nameField, emailField].forEach((field) => {
  field.addEventListener("input", () => validateField(field));
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isNameValid = validateField(nameField);
  const isEmailValid = validateField(emailField);
  const isCustomValid = validateRadioGroup(customBuildRadios);

  if (isNameValid && isEmailValid && isCustomValid) {
    // Build modal content
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const customBuild = document.querySelector('input[name="custom-build"]:checked')?.value || "Not selected";
    const weddingDate = document.getElementById("wedding-date").value || "Not provided";
    const message = document.getElementById("message").value || "No message";

    summaryList.innerHTML = `
      <li><strong>Full Name:</strong> ${name}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Custom Build:</strong> ${customBuild}</li>
      <li><strong>Wedding Date:</strong> ${weddingDate}</li>
      <li><strong>Message:</strong> ${message}</li>
    `;

    modal.style.display = "block";
    form.reset();
  }
});

// Close modal logic
function closeModal() {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};

// Validate text/email field
function validateField(field) {
  const errorId = `${field.id}-error`;
  let error = document.getElementById(errorId);
  if (!error) {
    error = document.createElement("div");
    error.id = errorId;
    error.className = "field-error";
    field.after(error);
  }

  if (!field.validity.valid) {
    if (field.validity.valueMissing) {
      error.textContent = "This field is required.";
    } else if (field.type === "email" && field.validity.typeMismatch) {
      error.textContent = "Please enter a valid email address.";
    } else if (field.pattern && field.validity.patternMismatch) {
      error.textContent = field.title;
    } else {
      error.textContent = "Invalid input.";
    }
    error.style.display = "block";
    return false;
  } else {
    error.textContent = "";
    error.style.display = "none";
    return true;
  }
}

// Validate radio group
function validateRadioGroup(radioNodeList) {
  const errorId = "custom-build-error";
  let error = document.getElementById(errorId);
  if (!error) {
    error = document.createElement("div");
    error.id = errorId;
    error.className = "field-error";
    radioNodeList[radioNodeList.length - 1].parentElement.after(error);
  }

  const isChecked = [...radioNodeList].some((radio) => radio.checked);
  if (!isChecked) {
    error.textContent = "Please select an option.";
    error.style.display = "block";
    return false;
  } else {
    error.textContent = "";
    error.style.display = "none";
    return true;
  }
}

const form = document.getElementById("custom-contact-form");
const modal = document.getElementById("confirmation-modal");
const summaryList = document.getElementById("submission-summary");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("full-name").value.trim();
  const email = document.getElementById("email").value.trim();
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
});

function closeModal() {
  document.getElementById("confirmation-modal").style.display = "none";
}

window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};

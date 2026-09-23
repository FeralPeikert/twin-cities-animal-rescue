// Twin Cities Animal Rescue - Interactive Features

const interestOptions = {
  adopt: {
    title: "Interested in Adoption?",
    message: "Learn more about our available animals and let us help you find the right match for your home."
  },
  foster: {
    title: "Interested in Fostering?",
    message: "Foster families provide temporary, loving homes for animals while they wait for adoption."
  },
  volunteer: {
    title: "Interested in Volunteering?",
    message: "Volunteers help with animal care, transportation, events, community outreach, and more."
  }
};

const interestTypes = ["adopt", "foster", "volunteer"];

function displayInterest(type) {
  const result = document.getElementById("interest-result");

  if (!result || !interestOptions[type]) {
    return;
  }

  result.innerHTML =
    "<h3>" + interestOptions[type].title + "</h3>" +
    "<p>" + interestOptions[type].message + "</p>";

  localStorage.setItem("rescueInterest", type);
}

function loadSavedInterest() {
  const savedInterest = localStorage.getItem("rescueInterest");

  if (savedInterest && interestTypes.includes(savedInterest)) {
    const selector = document.getElementById("interest-selector");

    if (selector) {
      selector.value = savedInterest;
      displayInterest(savedInterest);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const selector = document.getElementById("interest-selector");

  if (selector) {
    selector.addEventListener("change", function () {
      displayInterest(this.value);
    });
  }

  loadSavedInterest();
});
// Form validation

function validateName(name) {
  return name.trim().length >= 2;
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validateForm(event) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");

  let formIsValid = true;

  nameError.textContent = "";
  emailError.textContent = "";

  if (!validateName(nameInput.value)) {
    nameError.textContent = "Please enter a name with at least 2 characters.";
    formIsValid = false;
  }

  if (!validateEmail(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
    formIsValid = false;
  }

  if (!formIsValid) {
    event.preventDefault();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("form");

  if (contactForm) {
    contactForm.addEventListener("submit", validateForm);
  }
});

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

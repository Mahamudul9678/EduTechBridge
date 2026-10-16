// Day 11: Search and category filters

const searchInput = document.getElementById("resourceSearch");
const resourceCards = document.querySelectorAll(".resource-card");
const searchMessage = document.getElementById("searchMessage");
const filterButtons = document.querySelectorAll(".filter-btn");

let selectedCategory = "all";

function filterResources() {
  const searchText = searchInput.value.toLowerCase().trim();
  let visibleCards = 0;

  resourceCards.forEach(function (card) {
    const cardText = card.textContent.toLowerCase();
    const cardCategory = card.dataset.category;

    const matchesSearch = cardText.includes(searchText);

    const matchesCategory =
      selectedCategory === "all" ||
      cardCategory === selectedCategory;

    if (matchesSearch && matchesCategory) {
      card.style.display = "flex";
      visibleCards++;
    } else {
      card.style.display = "none";
    }
  });

  if (visibleCards === 0) {
    searchMessage.textContent = "No resources found. Try another filter.";
  } else {
    searchMessage.textContent =
      visibleCards + " resource(s) found.";
  }
}

// Search as the user types
searchInput.addEventListener("input", filterResources);

// Filter when a category button is clicked
filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    selectedCategory = button.dataset.category;

    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");
    filterResources();
  });
});
// Day 12: Filter syllabus by semester

const semesterSelect = document.getElementById("semesterSelect");
const syllabusCards = document.querySelectorAll(".syllabus-card");
const syllabusMessage = document.getElementById("syllabusMessage");

semesterSelect.addEventListener("change", function () {
  const selectedSemester = semesterSelect.value;
  let visibleSubjects = 0;

  syllabusCards.forEach(function (card) {
    const cardSemester = card.dataset.semester;

    if (
      selectedSemester === "all" ||
      cardSemester === selectedSemester
    ) {
      card.style.display = "block";
      visibleSubjects++;
    } else {
      card.style.display = "none";
    }
  });

  if (visibleSubjects === 0) {
    syllabusMessage.textContent =
      "No sample subjects available for this semester yet.";
  } else {
    syllabusMessage.textContent =
      visibleSubjects + " subject(s) found.";
  }
});
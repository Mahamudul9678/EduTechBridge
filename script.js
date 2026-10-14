// Day 10: Search learning resources

const searchInput = document.getElementById("resourceSearch");
const resourceCards = document.querySelectorAll(".resource-card");
const searchMessage = document.getElementById("searchMessage");

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase().trim();

  let visibleCards = 0;

  resourceCards.forEach(function (card) {
    const cardText = card.textContent.toLowerCase();

    if (cardText.includes(searchText)) {
      card.style.display = "flex";
      visibleCards++;
    } else {
      card.style.display = "none";
    }
  });

  if (visibleCards === 0) {
    searchMessage.textContent = "No resources found. Try another keyword.";
  } else {
    searchMessage.textContent =
      visibleCards + " resource(s) found.";
  }
});
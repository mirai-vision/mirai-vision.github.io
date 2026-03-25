import { highlightSearchTerm } from "./highlight-search-term.js";

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("bibsearch");
  if (!searchInput) return;

  let currentView = "selected";

  const updateGroupingVisibility = () => {
    document.querySelectorAll("h2.bibliography").forEach(function (element) {
      let iterator = element.nextElementSibling; // get next sibling element after h2, which can be h3 or ol
      let hideFirstGroupingElement = true;
      // iterate until next group element (h2), which is already selected by the querySelectorAll(-).forEach(-)
      while (iterator && iterator.tagName !== "H2") {
        if (iterator.tagName === "OL") {
          const ol = iterator;
          const unloadedSiblings = ol.querySelectorAll(":scope > li.unloaded");
          const totalSiblings = ol.querySelectorAll(":scope > li");

          if (unloadedSiblings.length === totalSiblings.length) {
            ol.previousElementSibling.classList.add("unloaded"); // Add the '.unloaded' class to the previous grouping element (e.g. year)
            ol.classList.add("unloaded"); // Add the '.unloaded' class to the OL itself
          } else {
            hideFirstGroupingElement = false; // there is at least some visible entry, don't hide the first grouping element
          }
        }
        iterator = iterator.nextElementSibling;
      }
      // Add unloaded class to first grouping element (e.g. year) if no item left in this group
      if (hideFirstGroupingElement) {
        element.classList.add("unloaded");
      }
    });
  };

  const filterItems = (searchTerm) => {
    document.querySelectorAll(".bibliography, .unloaded").forEach((element) => element.classList.remove("unloaded"));

    let nonMatchingElements = [];

    // highlight-search-term
    if (searchTerm) {
      if (CSS.highlights) {
        nonMatchingElements = highlightSearchTerm({ search: searchTerm, selector: ".bibliography > li" });
        if (nonMatchingElements == null) {
          return;
        }
      } else {
        // Simply add unloaded class to all non-matching items if Browser does not support CSS highlights
        document.querySelectorAll(".bibliography > li").forEach((element) => {
          const text = element.innerText.toLowerCase();
          if (text.indexOf(searchTerm) == -1) {
            nonMatchingElements.push(element);
          }
        });
      }
      nonMatchingElements.forEach((element) => {
        element.classList.add("unloaded");
      });
    }

    document.querySelectorAll(".bibliography > li").forEach((element) => {
      const isSelected = element.querySelector(".publication-status-marker")?.dataset.selected === "true";
      if (currentView === "selected" && !isSelected) {
        element.classList.add("unloaded");
      }
    });

    updateGroupingVisibility();
  };

  const updateInputField = () => {
    const hashValue = decodeURIComponent(window.location.hash.substring(1)); // Remove the '#' character
    searchInput.value = hashValue;
    filterItems(hashValue);
  };

  const updateViewToggle = () => {
    document.querySelectorAll("[data-publication-view]").forEach((button) => {
      button.classList.toggle("active", button.dataset.publicationView === currentView);
    });
  };

  document.querySelectorAll("[data-publication-view]").forEach((button) => {
    button.addEventListener("click", function () {
      currentView = this.dataset.publicationView;
      updateViewToggle();
      filterItems(searchInput.value.trim().toLowerCase());
    });
  });

  // Sensitive search. Only start searching if there's been no input for 300 ms
  let timeoutId;
  searchInput.addEventListener("input", function () {
    clearTimeout(timeoutId); // Clear the previous timeout
    const searchTerm = this.value.toLowerCase();
    timeoutId = setTimeout(() => filterItems(searchTerm), 300);
  });

  window.addEventListener("hashchange", updateInputField); // Update the filter when the hash changes

  updateViewToggle();
  updateInputField(); // Update filter when page loads
});

// ===============
// FILTER LOGIC
// ===============

function applyFilters() {
  // Get selected filter values from checkboxes
  const selectedCategories = [...document.querySelectorAll('input[name="category"]:checked')].map(cb => cb.value);
  const selectedPrices = [...document.querySelectorAll('input[name="price"]:checked')].map(cb => cb.value);
  const selectedBrands = [...document.querySelectorAll('input[name="brand"]:checked')].map(cb => cb.value);

  // Select all product cards
  const cards = document.querySelectorAll(".deal-card");

  // Loop through each product card and apply filters
  cards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    const cardPrice = card.getAttribute('data-price');
    const cardBrand = card.getAttribute('data-brand');

    // Match logic
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(cardCategory);
    const priceMatch = selectedPrices.length === 0 || selectedPrices.includes(cardPrice);
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(cardBrand);

    // Show or hide card based on match results
    if (categoryMatch && priceMatch && brandMatch) {
      card.style.opacity = "1";
      card.style.visibility = "visible";
      card.style.height = "auto";
      card.style.margin = "initial";
    } else {
      card.style.opacity = "0";
      card.style.visibility = "hidden";
      card.style.height = "0";
      card.style.margin = "0";
    }
  });
}

// ===============
// CLEAR FILTERS
// ===============

function clearFilters() {
  // Uncheck all checkboxes
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.checked = false;
  });

  // Show all cards again
  const cards = document.querySelectorAll(".deal-card");
  cards.forEach(card => {
    card.style.opacity = "1";
    card.style.visibility = "visible";
    card.style.height = "auto";
    card.style.margin = "initial";
  });
}

// ===============
// EVENT ATTACHMENT (OPTIONAL)
// ===============

// You can also use DOMContentLoaded to ensure your buttons are ready before script runs
document.addEventListener("DOMContentLoaded", function () {
  const applyBtn = document.querySelector('.sidebar button[onclick="applyFilters()"]');
  const clearBtn = document.querySelector('.sidebar button[onclick="clearFilters()"]');

  // Optionally replace inline onclick attributes with JS event listeners
  if (applyBtn && clearBtn) {
    applyBtn.addEventListener('click', applyFilters);
    clearBtn.addEventListener('click', clearFilters);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const cartButtons = document.querySelectorAll(".deal-card button");

  cartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".deal-card");
      const title = card.querySelector("h3").innerText;
      const price = card.querySelector(".new-price").innerText;
      const imgSrc = card.querySelector("img").src;

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.push({ title, price, imgSrc });

      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`${title} added to cart!`);

      window.location.href = "cart.html";

    });
  });
});

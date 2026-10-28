"use strict";

const products = document.querySelector(".list-products");
const total = document.querySelector(".total");
const emptyMessage = document.querySelector(".empty-cart");

// Recalculate from the cards still in the DOM after every cart change.
function updateTotal() {
  let totalCents = 0;
  products.querySelectorAll(".card").forEach(card => {
    const priceCents = Math.round(parseFloat(card.querySelector(".unit-price").textContent) * 100);
    const quantity = Number(card.querySelector(".quantity").textContent);
    totalCents += priceCents * quantity;
  });
  total.textContent = `${(totalCents / 100).toFixed(2)} $`;
  emptyMessage.hidden = products.querySelector(".card") !== null;
}

// Give each button a descriptive name for keyboard and screen-reader users.
products.querySelectorAll(".card").forEach(card => {
  const name = card.querySelector(".card-title").textContent;
  const labels = {
    increase: `Increase ${name} quantity`,
    decrease: `Decrease ${name} quantity`,
    delete: `Delete ${name} from cart`,
    like: `Like ${name}`
  };
  card.querySelectorAll("[data-action]").forEach(button => {
    button.setAttribute("aria-label", labels[button.dataset.action]);
    if (button.dataset.action === "like") button.setAttribute("aria-pressed", "false");
  });
});

// Event delegation also handles clicks on the symbols inside the buttons.
products.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button || !products.contains(button)) return;
  const card = button.closest(".card");
  const quantity = card.querySelector(".quantity");
  const current = Number(quantity.textContent);

  switch (button.dataset.action) {
    case "increase":
      quantity.textContent = current + 1;
      break;
    case "decrease":
      // Quantities cannot be negative; deletion has its own button.
      quantity.textContent = Math.max(0, current - 1);
      break;
    case "delete":
      // Remove the wrapper too, so it does not leave an empty layout column.
      card.parentElement.remove();
      break;
    case "like": {
      const liked = button.getAttribute("aria-pressed") !== "true";
      button.setAttribute("aria-pressed", String(liked));
      button.classList.toggle("is-liked", liked);
      break;
    }
  }
  updateTotal();
});

updateTotal();

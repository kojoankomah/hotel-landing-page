const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#mainNavigation");
const navigationLinks = navigation.querySelectorAll("a");

function setMenu(open) {
  navigation.classList.toggle("nav-open", open);
  menuButton.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenu(!isOpen);
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
    menuButton.focus();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1020) {
    setMenu(false);
  }
});

const bookingForm = document.querySelector("#bookingForm");
const checkinInput = document.querySelector("#checkin");
const checkoutInput = document.querySelector("#checkout");
const roomType = document.querySelector("#roomType");
const formSuccess = document.querySelector("#formSuccess");
const roomEnquiryLinks = document.querySelectorAll(".room-enquiry");

function toDateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function tomorrowFrom(dateValue) {
  const date = dateValue ? new Date(`${dateValue}T00:00:00`) : new Date();
  date.setDate(date.getDate() + 1);
  return toDateInputValue(date);
}

const today = toDateInputValue(new Date());
checkinInput.min = today;
checkoutInput.min = tomorrowFrom(today);

checkinInput.addEventListener("change", () => {
  const earliestCheckout = tomorrowFrom(checkinInput.value);
  checkoutInput.min = earliestCheckout;

  if (!checkoutInput.value || checkoutInput.value < earliestCheckout) {
    checkoutInput.value = earliestCheckout;
  }

  checkoutInput.setCustomValidity("");
  formSuccess.hidden = true;
});

checkoutInput.addEventListener("change", () => {
  checkoutInput.setCustomValidity("");
  formSuccess.hidden = true;
});

roomEnquiryLinks.forEach((link) => {
  link.addEventListener("click", () => {
    roomType.value = link.dataset.room;
    formSuccess.hidden = true;
  });
});

bookingForm.addEventListener("input", () => {
  formSuccess.hidden = true;
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (checkoutInput.value <= checkinInput.value) {
    checkoutInput.setCustomValidity("Check-out must be after check-in.");
    checkoutInput.reportValidity();
    return;
  }

  checkoutInput.setCustomValidity("");
  formSuccess.hidden = false;
  bookingForm.reset();
  checkinInput.min = today;
  checkoutInput.min = tomorrowFrom(today);
  formSuccess.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

const navToggle = document.getElementById("navToggle");
const navPanel = document.getElementById("navPanel");
const toTop = document.getElementById("toTop");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

// Mobile nav
navToggle?.addEventListener("click", () => {
  const isOpen = navPanel.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (e) => {
  const target = e.target;
  if (!navPanel || !navToggle) return;

  const clickedInside = navPanel.contains(target) || navToggle.contains(target);
  if (!clickedInside && navPanel.classList.contains("open")) {
    navPanel.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// Close nav on link click
navPanel?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    if (navPanel.classList.contains("open")) {
      navPanel.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

// Accordion
document.querySelectorAll("[data-accordion] .acc-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    const panel = btn.nextElementSibling;

    // close all
    document.querySelectorAll("[data-accordion] .acc-item").forEach((b) => {
      b.setAttribute("aria-expanded", "false");
      const p = b.nextElementSibling;
      if (p) p.hidden = true;
    });

    // open current if it was closed
    if (!expanded) {
      btn.setAttribute("aria-expanded", "true");
      if (panel) panel.hidden = false;
    }
  });
});

// Scroll to top button
const onScroll = () => {
  const show = window.scrollY > 420;
  toTop.classList.toggle("show", show);
};
window.addEventListener("scroll", onScroll);
onScroll();

toTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Simple form validation (demo)
const form = document.getElementById("contactForm");

function setError(name, message) {
  const el = document.querySelector(`[data-error="${name}"]`);
  if (el) el.textContent = message || "";
}

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const fd = new FormData(form);
  const name = (fd.get("name") || "").toString().trim();
  const phone = (fd.get("phone") || "").toString().trim();
  const email = (fd.get("email") || "").toString().trim();
  const message = (fd.get("message") || "").toString().trim();

  let ok = true;

  setError("name", "");
  setError("phone", "");
  setError("email", "");
  setError("message", "");

  if (name.length < 2) { setError("name", "Please enter your full name."); ok = false; }
  if (phone.length < 6) { setError("phone", "Please enter a valid phone number."); ok = false; }
  if (!/^\S+@\S+\.\S+$/.test(email)) { setError("email", "Please enter a valid email address."); ok = false; }
  if (message.length < 10) { setError("message", "Please write a short message so I can help you."); ok = false; }

  if (!ok) return;

  // Demo success behaviour
  form.reset();
  alert("Thank you. Your message is ready to be sent. Connect this form to EmailJS, Formspree, or a backend to deliver it.");
});

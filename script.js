const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navigation");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const requestForm = document.querySelector("#request-form");
const formNote = document.querySelector("#form-note");

if (requestForm && formNote) {
  requestForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(requestForm);
    const message = [
      "Hey Tage! I'd like to ask about working with you.",
      "",
      "Name: " + formData.get("name"),
      "Service: " + formData.get("type"),
      "Project details: " + formData.get("details"),
      "",
      "Sent from your portfolio."
    ].join("\n");

    try {
      await navigator.clipboard.writeText(message);
      formNote.textContent = "Message copied! Open Discord and send it to @itz_55k.exe.";
    } catch {
      formNote.textContent = "Your message is ready. Copy the details below and send them to @itz_55k.exe on Discord.";
      const fallback = document.createElement("textarea");
      fallback.value = message;
      fallback.setAttribute("readonly", "");
      fallback.style.position = "absolute";
      fallback.style.left = "-9999px";
      document.body.appendChild(fallback);
      fallback.select();
      document.execCommand("copy");
      fallback.remove();
    }
  });
}
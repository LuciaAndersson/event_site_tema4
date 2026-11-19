// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

// Här är min kod för garnnystanet och dragspelen
const knotMode = document.getElementById("knot-mode");
const knotDesign = document.getElementById("knot-design");
const knotHomedecor = document.getElementById("knot-homedecor"); // Ändrat till homedecor

const detailsMode = document.getElementById("details-mode");
const detailsDesign = document.getElementById("details-design");
const detailsHomedecor = document.getElementById("details-homedecor"); // Ändrat till homedecor

// 1. Mode (Öppna / Stänga)
if (knotMode && detailsMode) {
  knotMode.addEventListener("click", () => {
    detailsMode.open = !detailsMode.open;
    if (detailsMode.open) {
      detailsMode.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// 2. Design (Öppna / Stänga)
if (knotDesign && detailsDesign) {
  knotDesign.addEventListener("click", () => {
    detailsDesign.open = !detailsDesign.open;
    if (detailsDesign.open) {
      detailsDesign.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// 3. Homedecor (Öppna / Stänga)
if (knotHomedecor && detailsHomedecor) {
  knotHomedecor.addEventListener("click", () => {
    detailsHomedecor.open = !detailsHomedecor.open;
    if (detailsHomedecor.open) {
      detailsHomedecor.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}
// Körs när sidan har laddats
document.addEventListener("DOMContentLoaded", function () {
  // 1. Läs av parametrarna i URL-adressen från formuläret
  const params = new URLSearchParams(window.location.search);

  // 2. Hämta värdena (och sätt standardvärden om fälten var tomma)
  const name = params.get("name") || "Your Name";
  const skill = params.get("skill") || "Not specified";
  const favoriteYarn = params.get("favorite_yarn") || "Not specified";
  const project = params.get("project") || "Not specified";
  const color = params.get("color") || "black";

  // 3. Hämta elementen i HTML-koden på opsamling.html
  const nameElem = document.getElementById("ticketName");
  const skillElem = document.getElementById("ticketSkill");
  const yarnElem = document.getElementById("ticketYarn");
  const projectElem = document.getElementById("ticketProject");
  const ticketCard = document.getElementById("ticketCard");

  // 4. Skriv ut texten i biljetten ifall vi är på opsamling.html
  if (ticketCard) {
    nameElem.textContent = name;
    skillElem.textContent = skill;
    yarnElem.textContent = favoriteYarn;
    projectElem.textContent = project;

    // Lägg till färgklassen på biljettkortet (t.ex. ticket-blue, ticket-pink)
    ticketCard.classList.add("ticket-" + color);
  }
});

const themeBtn = document.querySelector("#theme-toggle");

themeBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

/* ==========================================================================
   SCROLL REVEAL ANIMATIONER FÖR ALLA SIDOR
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.12, // Startar när 12% av elementet syns på skärmen
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Animeras bara första gången man scrollar förbi
      }
    });
  }, observerOptions);

  // Välj ut text, sektioner, formulär och korthållare på ALLA sidor
  const selectors = [
    ".artist_section",
    ".explore-section",
    ".artist_image img",
    ".svg-intro",
    ".svg-layout > *",
    ".accordion-item",
    ".form-header",
    ".form-group",
    ".form-fieldset",
    ".color-picker-group",
    ".how-it-works-section",
    ".opsamling-ticket-col",
    ".opsamling-info-col",
    ".next-steps-list li",
  ];

  const elementsToAnimate = document.querySelectorAll(selectors.join(", "));

  elementsToAnimate.forEach((el) => {
    el.classList.add("scroll-reveal");
    observer.observe(el);
  });
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("open");
  });
}

const signalResults = document.querySelector("#signal-results");
const signalButtons = document.querySelectorAll(".signal-button");

const projects = [
  { title: "Streaming Analytics Data Warehouse", type: "data", detail: "ETL, MySQL, SQLite, R, and data visualization." },
  { title: "Event Scheduler", type: "software", detail: "Java Swing, MVC architecture, and JUnit." },
  { title: "Energy-Efficient Transfer Learning for LLMs", type: "ai", detail: "Adaptive fine-tuning, pruning, and model evaluation." }
];

function renderSignals(filter = "all") {
  if (!signalResults) return;
  const matches = filter === "all" ? projects : projects.filter((project) => project.type === filter);
  signalResults.innerHTML = matches.map((project) => `
    <article class="signal-item">
      <strong>${project.title}</strong>
      <div>${project.detail}</div>
    </article>
  `).join("");
}

signalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    signalButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderSignals(button.dataset.filter);
  });
});

renderSignals();

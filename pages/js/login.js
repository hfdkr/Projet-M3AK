const dropdown = document.getElementById("languageDropdown");
const menu = document.getElementById("languageMenu");
const selected = document.getElementById("selectedLanguage");
const options = document.querySelectorAll(".language-option");

// Open on hover
dropdown.addEventListener("mouseenter", () => {
    menu.classList.remove("hidden");
});

// Close when leaving
dropdown.addEventListener("mouseleave", () => {
    menu.classList.add("hidden");
});

// Select option
options.forEach(option => {
    option.addEventListener("click", () => {
        selected.innerHTML = `
            ${option.textContent}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
        `;

        menu.classList.add("hidden");
    });
});
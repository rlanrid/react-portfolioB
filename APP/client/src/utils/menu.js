export function menu() {
    const nav = document.querySelector(".nav");
    const navToggle = document.querySelector("#navToggle");

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            nav.classList.toggle("show");

            const expanded = nav.classList.contains('show') ? 'true' : 'false';
            navToggle.setAttribute('aria-expanded', expanded);

            if (expanded === "true") {
                navToggle.classList.add("close__nav");
            } else {
                navToggle.classList.remove("close__nav");
            }
        })
    }
}
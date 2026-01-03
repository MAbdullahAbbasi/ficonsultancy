const toggleBtn = document.getElementById("themeToggle");
        const body = document.body;

        // Load saved theme (if any)
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            body.classList.add("dark");
            toggleBtn.textContent = "☀️";
        }

        // Toggle theme on button click
        toggleBtn.addEventListener("click", () => {
            body.classList.toggle("dark");

            if (body.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
                toggleBtn.textContent = "☀️";
            } else {
                localStorage.setItem("theme", "light");
                toggleBtn.textContent = "🌙";
            }
        });
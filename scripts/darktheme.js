const toggleBtn = document.getElementById("themeToggle");
        const body = document.body;
        const headerLogo = document.getElementById("headerlogo");

        // Determine correct logo path based on current page location
        const getLogoPath = (isDark) => {
            const currentPath = window.location.pathname;
            const isInSubfolder = currentPath.includes('/pages/');
            const basePath = isInSubfolder ? '../' : '';

            return isDark
                ? `${basePath}images/common/logos/logofooter.png`
                : `${basePath}images/common/logos/logo.png`;
        };

        // Load saved theme (if any)
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            body.classList.add("dark");
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            if (headerLogo) headerLogo.src = getLogoPath(true);
        } else {
            toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }

        // Toggle theme on button click
        toggleBtn.addEventListener("click", () => {
            body.classList.toggle("dark");

            if (body.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
                toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
                if (headerLogo) headerLogo.src = getLogoPath(true);
            } else {
                localStorage.setItem("theme", "light");
                toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
                if (headerLogo) headerLogo.src = getLogoPath(false);
            }
        });
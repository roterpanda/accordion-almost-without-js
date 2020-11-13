const details = document.querySelectorAll("details");

details.forEach((element) => {
    element.addEventListener("click", () => {
        details.forEach((detail) => {
            if (detail !== element) {
                detail.removeAttribute("open");
            }
        });
    });
});


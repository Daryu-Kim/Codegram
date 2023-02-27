// Header
const header_radio = document.querySelectorAll(".header-item-radio");

// Content
const content_object = document.querySelector(".content-object");

// Footer
const footer_radio = document.querySelectorAll(".footer-item-radio");

header_radio.forEach((element) => {
    element.addEventListener("change", function() {
        content_object.data = element.value;
    });
});

footer_radio.forEach((element) => {
    element.addEventListener("change", function () {
        header_radio[0].checked = "checked";
        content_object.data = element.value;
    });
});
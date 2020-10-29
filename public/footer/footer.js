const currentYear = new Date().getFullYear();

const footerCopyright = document.getElementById("footer-copyright");
const copyrightElement = document.createTextNode("© " + currentYear + " | Created & Designed by Patrick Picard Jønsson");
footerCopyright.appendChild(copyrightElement);

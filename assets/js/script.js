function toTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.style.opacity = "0";
  }, 1200);
  if (window.screen.width < 992) {
    const navButton = document.getElementById("navButton");
    const navLinks = document.querySelectorAll(".nav-link");

    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", () => {
        navButton.click();
      });
    }
  }
});

$(".hover").mouseleave(function () {
  $(this).removeClass("hover");
});

const form = document.getElementById("contact-us");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  let jsonObject = {};
  for (const [key, value] of formData.entries()) {
    jsonObject[key] = value;
  }
  fetch(
    "https://iqj4ownpvi.execute-api.ap-south-1.amazonaws.com/production/send-email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonObject),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      window.location.href = "/thank-you";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

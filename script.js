document.addEventListener("DOMContentLoaded", () => {
  // ---------------- Menu Toggle ----------------
  const menuicon = document.getElementById("menuicon");
  const menulist = document.getElementById("menulist");

  if (menuicon && menulist) {
    menuicon.addEventListener("click", (event) => {
      event.stopPropagation();
      menulist.style.display = menulist.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", (event) => {
      if (!menulist.contains(event.target) && !menuicon.contains(event.target)) {
        menulist.style.display = "none";
      }
    });
  }

  // ---------------- AOS Animation for Movies ----------------
  function updateAOS() {
    const oddMovies = document.querySelectorAll(".oddmovie .photo img");
    const evenMovies = document.querySelectorAll(".evenmovie .photo img");

    if (window.innerWidth < 1240) {
      oddMovies.forEach(img => img.setAttribute("data-aos", "fade-down"));
      evenMovies.forEach(img => img.setAttribute("data-aos", "fade-up"));
    } else {
      oddMovies.forEach(img => img.setAttribute("data-aos", "fade-right"));
      evenMovies.forEach(img => img.setAttribute("data-aos", "fade-left"));
    }
  }
  window.addEventListener("load", updateAOS);
  window.addEventListener("resize", updateAOS);

  // ---------------- Characters Modal ----------------
  const modal = document.getElementById("charModal");
  const modalImg = document.getElementById("modalImg");
  const modalName = document.getElementById("modalName");
  const modalDesc = document.getElementById("modalDesc");
  const modalQuote = document.getElementById("modalQuote");
  const closeBtn = document.querySelector(".close");

  const characters = {
    "Harry Potter": {
      img: "image/harry.jpg",
      desc: "The Boy Who Lived, a Gryffindor student known for his bravery and destiny to defeat Voldemort.",
      quote: '"I solemnly swear that I am up to no good."'
    },
    "Hermione Granger": {
      img: "image/hermione.jpg",
      desc: "One of Harry’s best friends, brilliant, resourceful, and the brightest witch of her age.",
      quote: '"When in doubt, go to the library."'
    },
    "Ron Weasley": {
      img: "image/ron.jpg",
      desc: "Harry’s loyal friend, from a large wizarding family, known for his humor and courage.",
      quote: '"Don’t let the muggles get you down."'
    },
    "Draco Malfoy": {
      img: "image/draco.png",
      desc: "A Slytherin student and Harry’s rival, born into a wealthy pure-blood wizarding family.",
      quote: '"You will soon find out that some wizarding families are better than others."'
    },
    "Ginny Weasley": {
      img: "image/ginny.jpg",
      desc: "The youngest Weasley sibling, strong-willed, and later an accomplished witch and Quidditch player.",
      quote: '"Anything’s possible if you’ve got enough nerve."'
    },
    "Severus Snape": {
      img: "image/snape.jpg",
      desc: "Potions Master at Hogwarts, a complex character torn between darkness and loyalty.",
      quote: '"Always."'
    },
    "Albus Dumbledore": {
      img: "image/dumbledore.jpg",
      desc: "Headmaster of Hogwarts, wise and powerful, mentor to Harry and leader against Voldemort.",
      quote: '"Happiness can be found even in the darkest of times, if one only remembers to turn on the light."'
    },
    "Rubeus Hagrid": {
      img: "image/hagrid.jpg",
      desc: "Keeper of Keys and Grounds at Hogwarts, half-giant, with a big heart and love for magical creatures.",
      quote: '"I am what I am, an’ I’m not ashamed."'
    },
    "Sirius Black": {
      img: "image/black.jpg",
      desc: "Harry’s godfather, member of the Order of the Phoenix, brave and rebellious.",
      quote: '"The ones that love us never really leave us."'
    },
    "Tom Riddle": {
      img: "image/tom riddle.jpg",
      desc: "A brilliant student who later became Lord Voldemort, obsessed with power and immortality.",
      quote: '"Greatness inspires envy, envy engenders spite, spite spawns lies."'
    }
  };

  document.querySelectorAll(".char-card").forEach(card => {
    card.addEventListener("click", () => {
      const name = card.dataset.name;
      const char = characters[name];
      if (!char) return;

      modalImg.src = char.img;
      modalName.textContent = name;
      modalDesc.textContent = char.desc;
      modalQuote.textContent = char.quote;

      modal.style.display = "flex";
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // ---------------- Sorting Hat ----------------
  const hatBtn = document.getElementById("hatBtn");
  const hatResult = document.getElementById("hatResult");

  if (hatBtn && hatResult) {
    const houses = [
      { name: "Gryffindor", color: "#ae0001" },
      { name: "Hufflepuff", color: "#ecb939" },
      { name: "Ravenclaw", color: "#222f5b" },
      { name: "Slytherin", color: "#2a623d" }
    ];

    hatBtn.addEventListener("click", () => {
      const randomHouse = houses[Math.floor(Math.random() * houses.length)];
      hatResult.innerHTML = `✨ You have been sorted into <strong style="color:${randomHouse.color}">${randomHouse.name}</strong>!`;
    });
  }

  // ---------------- Contact Form ----------------
  if (typeof emailjs !== "undefined") {
    emailjs.init("b88wfYdit0Z-DswXh"); 

    const form = document.getElementById("contact-form");
    if (form) {
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        emailjs.sendForm("service_khlt3ew", "template_t7jeuij", this)
          .then(() => {
            alert("🦉 Your owl has been sent successfully!");
            form.reset();
          })
          .catch((error) => {
            console.error("Failed...", error);
            alert("⚠️ Oops! The owl got lost in the Forbidden Forest.");
          });
      });
    }
  }
});

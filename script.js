(function () {
  "use strict";

  // ─── Footer year ──────────────────────────────────────────────────────────────
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ─── Preloader ────────────────────────────────────────────────────────────────
  var preloader = document.getElementById("preloader");
  var fill = document.getElementById("preloaderFill");
  var progress = 0;
  var fillInterval = setInterval(function () {
    progress += Math.random() * 18;
    if (progress >= 90) progress = 90;
    if (fill) fill.style.width = progress + "%";
  }, 70);

  window.addEventListener("load", function () {
    clearInterval(fillInterval);
    if (fill) fill.style.width = "100%";
    setTimeout(function () {
      if (preloader) preloader.classList.add("hidden");
    }, 380);
  });

  // ─── Scroll progress bar ──────────────────────────────────────────────────────
  var scrollBar = document.getElementById("scrollProgress");
  window.addEventListener("scroll", onScroll, { passive: true });

  function onScroll() {
    var docEl = document.documentElement;
    var pct = (docEl.scrollTop / (docEl.scrollHeight - window.innerHeight)) * 100;
    if (scrollBar) scrollBar.style.width = pct + "%";
    updateActiveNav();
    updateHeaderShadow();
  }

  // ─── Header shadow on scroll ─────────────────────────────────────────────────
  var header = document.getElementById("siteHeader");
  function updateHeaderShadow() {
    if (!header) return;
    if (window.scrollY > 12) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  // ─── Dark mode ────────────────────────────────────────────────────────────────
  var html = document.documentElement;
  var themeToggle = document.getElementById("themeToggle");
  var savedTheme = localStorage.getItem("kbdTheme") || "light";
  html.setAttribute("data-theme", savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", next);
      localStorage.setItem("kbdTheme", next);
    });
  }

  // ─── Scroll reveal (Intersection Observer) ───────────────────────────────────
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var delay = parseInt(el.dataset.delay || "0", 10);
      setTimeout(function () {
        el.classList.add("visible");
      }, delay);
      revealObserver.unobserve(el);
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -36px 0px" });

  // Stagger work cards
  document.querySelectorAll(".work-grid .reveal").forEach(function (el, i) {
    el.dataset.delay = (i % 2) * 100;
  });
  // Stagger contact cards
  document.querySelectorAll(".contact-grid .reveal").forEach(function (el, i) {
    el.dataset.delay = i * 80;
  });
  // Stagger timeline items
  document.querySelectorAll(".timeline-item.reveal").forEach(function (el, i) {
    el.dataset.delay = i * 160;
  });

  document.querySelectorAll(".reveal").forEach(function (el) {
    revealObserver.observe(el);
  });

  // ─── Typing effect ────────────────────────────────────────────────────────────
  var typedEl = document.getElementById("typed");
  var phrases = [
    "quantitative tools.",
    "data pipelines.",
    "risk models.",
    "financial analytics."
  ];
  var phraseIdx = 0, charIdx = 0, deleting = false, typeDelay = 110;

  function typeLoop() {
    var current = phrases[phraseIdx];
    if (deleting) {
      if (typedEl) typedEl.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      typeDelay = 48;
    } else {
      if (typedEl) typedEl.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      typeDelay = 110;
    }
    if (!deleting && charIdx === current.length) {
      deleting = true; typeDelay = 1700;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typeDelay = 480;
    }
    setTimeout(typeLoop, typeDelay);
  }
  // Start typing after preloader would have cleared
  setTimeout(typeLoop, 900);

  // ─── Active nav link ──────────────────────────────────────────────────────────
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".nav-link");

  function updateActiveNav() {
    var scrollY = window.scrollY;
    sections.forEach(function (section) {
      var top = section.offsetTop - 100;
      var bottom = top + section.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach(function (link) {
          var isMatch = link.getAttribute("href") === "#" + section.id;
          link.classList.toggle("active", isMatch);
        });
      }
    });
  }

  // ─── Mobile nav ───────────────────────────────────────────────────────────────
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open");
      toggle.classList.toggle("is-open");
    });
    nav.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
      });
    });
  }

  // ─── Custom cursor ────────────────────────────────────────────────────────────
  var cursor = document.getElementById("cursor");
  var follower = document.getElementById("cursorFollower");

  if (window.matchMedia("(pointer: fine)").matches) {
    document.body.classList.add("has-custom-cursor");
    var mx = 0, my = 0, fx = 0, fy = 0;

    document.addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY;
      if (cursor) {
        cursor.style.left = mx + "px";
        cursor.style.top  = my + "px";
      }
    });

    (function animateFollower() {
      fx += (mx - fx) * 0.11;
      fy += (my - fy) * 0.11;
      if (follower) {
        follower.style.left = fx + "px";
        follower.style.top  = fy + "px";
      }
      requestAnimationFrame(animateFollower);
    })();

    document.querySelectorAll("a, button").forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        if (cursor) cursor.style.transform = "translate(-50%, -50%) scale(2.2)";
        if (follower) {
          follower.style.width  = "52px";
          follower.style.height = "52px";
        }
      });
      el.addEventListener("mouseleave", function () {
        if (cursor) cursor.style.transform = "translate(-50%, -50%) scale(1)";
        if (follower) {
          follower.style.width  = "34px";
          follower.style.height = "34px";
        }
      });
    });
  } else {
    if (cursor)   cursor.style.display   = "none";
    if (follower) follower.style.display = "none";
  }

})();

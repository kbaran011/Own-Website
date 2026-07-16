(function () {
  "use strict";

  // ─── Footer year ──────────────────────────────────────────────────────────────
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

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

  // ─── Active nav link ──────────────────────────────────────────────────────────
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".nav-link");
  var sectionBounds = [];

  function measureSections() {
    sectionBounds = [];
    sections.forEach(function (section) {
      var top = section.offsetTop - 100;
      sectionBounds.push({
        id: section.id,
        top: top,
        bottom: top + section.offsetHeight
      });
    });
  }

  function updateActiveNav() {
    var scrollY = window.scrollY;
    sectionBounds.forEach(function (bounds) {
      if (scrollY >= bounds.top && scrollY < bounds.bottom) {
        navLinks.forEach(function (link) {
          var isMatch = link.getAttribute("href") === "#" + bounds.id;
          link.classList.toggle("active", isMatch);
        });
      }
    });
  }

  measureSections();
  window.addEventListener("load", measureSections);
  window.addEventListener("resize", measureSections, { passive: true });
  window.addEventListener("orientationchange", measureSections, { passive: true });

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

})();

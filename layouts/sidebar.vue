<template>
  <header class="fixed top-0 right-0 left-0 w-screen flex justify-between p-4">
    <div class="logo">
      <NuxtLink to="#" class="text-[1.7rem] font-extrabold">Transsoft</NuxtLink>
    </div>
    <nav class="header-nav flex">
      <button class="nav-btn" @click="toggleNav">
        <span class="hamburger"></span>
      </button>
      <Navigation name="nav-list" />

      <div id="overlay" @click="toggleNav"></div>
    </nav>
  </header>

  <nav class="sidebar-nav">
    <Navigation name="sidebar-nav-list" />
  </nav>
  <slot />
</template>

<script setup lang="ts">
let navBtn: Element;
let navList: Element;
let overlay: Element;
let secondaryNavBtns: NodeListOf<Element>;

// this code run on client side
if (!import.meta.env.SSR) {
  navBtn = document.querySelector(".nav-btn")!;
  navList = document.querySelector(".nav-list")!;
  overlay = document.getElementById("overlay")!;

  secondaryNavBtns = document.querySelectorAll(".secondary-nav-btn")!;

  // event listner on all secondary nav btn
  secondaryNavBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const secondaryNavList = (event.target as HTMLElement).nextElementSibling;

      if (secondaryNavList) {
        btn.classList.toggle("up-arrow");
        secondaryNavList.classList.toggle("open");
      }
    });
  });
}

// for opening primary nav
function toggleNav() {
  navBtn.classList.toggle("nav-open");
  navList.classList.toggle("nav-list-open");
  overlay.classList.toggle("active");
}
</script>

<style scoped>
header {
  padding: 20px;
  background-color: #333;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

/* hamburger icon */

.nav-btn {
  transition: transform 300ms ease-in;
}

.hamburger {
  @apply relative inline-block mb-1;
}

.hamburger,
.hamburger::before,
.hamburger::after {
  @apply h-[2px] w-[2.5em] bg-[#fff];
  transition: transform 500ms ease-in-out, opacity 300ms linear, background-color 300ms;
}

.hamburger::before,
.hamburger::after {
  @apply absolute left-0;
  content: "";
}

.hamburger::before {
  @apply top-[-6px];
}

.hamburger::after {
  @apply top-[6px];
}

.nav-open .hamburger {
  transform: scale(0.8) rotate(45deg);
}

.nav-open .hamburger::before {
  opacity: 0;
}

.nav-open .hamburger::after {
  transform: rotate(90deg) translate(-5px);
}

.nav-open .hamburger,
.nav-open .hamburger::after {
  @apply h-[3px] bg-[#333];
}

#overlay.active {
  display: block;
  @apply fixed top-[0] bottom-[0] left-[0] right-[0] z-[10];
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: all;
}

.nav-open {
  @apply relative z-[21];
}

.sidebar-nav {
  display: none;
}

@media (min-width: 1000px) {
  .hamburger,
  #overlay.active {
    display: none;
  }

  .logo {
    font-size: 24px;
    color: #fff;
  }

  /* CSS for the sidebar */
  .sidebar-nav {
    @apply mt-[5rem] overflow-scroll;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    background-color: #f1f1f1;
    padding: 20px;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
  }
}
</style>

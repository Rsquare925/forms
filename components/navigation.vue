<template>
  <ul :class="props.name">
    <li class="nav-list-item">
      <button id="secondary-nav-open" class="secondary-nav-btn">
        Administration
        <span></span>
      </button>

      <ul class="pl-3 secondary-nav-list">
        <li class="secondary-nav-list-item">
          <button id="secondary-nav-open" class="secondary-nav-btn">
            Master
            <span></span>
          </button>
        </li>
        <li class="secondary-nav-list-item">
          <button id="secondary-nav-open" class="secondary-nav-btn">
            Transaction
            <span></span>
          </button>
        </li>
        <li class="secondary-nav-list-item">
          <button id="secondary-nav-open" class="secondary-nav-btn">
            MIS
            <span></span>
          </button>
        </li>
      </ul>
    </li>
    <li class="nav-list-item">
      <button id="secondary-nav-open" class="secondary-nav-btn">
        Operation
        <span></span>
      </button>
    </li>
    <li class="nav-list-item">
      <button id="secondary-nav-open" class="secondary-nav-btn">
        Accounts
        <span></span>
      </button>
    </li>
    <li class="nav-list-item">
      <button id="secondary-nav-open" class="secondary-nav-btn">
        Inventory
        <span></span>
      </button>
    </li>
    <li class="nav-list-item">
      <button id="secondary-nav-open" class="secondary-nav-btn">
        Utilities
        <span></span>
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{ name: string }>();
</script>

<style scoped>
.nav-list {
  @apply fixed top-0 right-0 bottom-0 w-[60vw] max-w-[350px]  flex flex-col p-4 pt-20 text-[1rem] overflow-scroll;
  background: #f1f1f1;
  transform: translate(100%);
  opacity: 0;
  transition: transform 350ms ease-in-out, opacity 250ms ease-in 100ms;
  z-index: 20;
}
.nav-list-open {
  @apply overflow-scroll;
  transform: translate(0);
  opacity: 1;
}

.nav-list-item {
  @apply px-[.5em];
}

.secondary-nav-btn span {
  @apply inline-block w-[3px] h-[3px] p-[3px] ml-1;
  border: 3px solid #333;
  transform: rotate(45deg);
  border-top: 0;
  border-left: 0;
  transition: border 250ms ease-in-out, transform 250ms ease-in-out;
}

.up-arrow span {
  transform: rotate(45deg);
  border: 3px solid #333;
  border-bottom: 0;
  border-right: 0;
}

.secondary-nav-list {
  display: none;
}

.secondary-nav-list-open {
  display: block;
}

.secondary-nav-btn {
  @apply w-[100%] text-left;
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}

.secondary-nav-btn:hover,
.secondary-nav-btn:focus {
  background-color: #ddd;
  color: #333;
}

/* Initially hide the secondary nav list */
.secondary-nav-list {
  display: none;
  transition: display ease-in 3000ms;
}

/* Animate the opening of the secondary nav list */
.secondary-nav-list.open {
  display: block;
  animation: slide-down 0.5s ease-out forwards;
}

@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (min-width: 1000px) {
  .nav-list {
    display: none;
  }

  nav ul li {
    margin-bottom: 10px;
  }
}
</style>

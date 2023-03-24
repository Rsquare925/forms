<template>
  <div class="background-div absolute top-0 right-0 bottom-0 left-0"></div>

  <div class="login-container form-container max-w-[400px]">
    <h1 class="text-center text-3xl font-bold">TRANSOFT</h1>
    <form class="login-form p-4 mt-4">
      <div>
        <label for="userName">Username</label><br />
        <input
          v-model="userName"
          type="text"
          name="userName"
          id="userName"
          placeholder="Username"
          required
        />
      </div>
      <div class="mt-4">
        <label for="password">Password</label><br />
        <input
          v-model="password"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
      </div>
      <button class="submit-btn" @click.prevent="">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
const userName = ref("");
const password = ref("");
</script>

<style scoped>
.background-div {
  background: linear-gradient(135deg, #9897d9, #5d59ca),
    url(../assets/img/logistics-background.avif);
  background-blend-mode: multiply;

  @apply z-[-1] bg-cover bg-no-repeat;
  /* mix-blend-mode: multiply; */
}

.login-container {
  @apply bg-[#264460] text-white opacity-[0.9] m-auto;
}
</style>

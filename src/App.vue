<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
import HelloWorld from './components/HelloWorld.vue'
import { ref, onMounted } from 'vue'

const auth0 = useAuth0();
const { loginWithRedirect, logout } = useAuth0();

const isAuthenticated = ref(auth0.isAuthenticated);
const isLoading = ref(auth0.isLoading);
const user = ref(auth0.user);

const login = () => {
    loginWithRedirect();
}

const logOut = () => {
  logout({ logoutParams: { returnTo: window.location.origin } });
}

onMounted(() => {
  console.log(isAuthenticated.value, isLoading.value, user.value)
})

</script>

<template>
  <button v-if="!isAuthenticated && !isLoading" @click="login">Log in</button>
  <button v-if="isAuthenticated && !isLoading" @click="logOut">Log out</button>

  <div v-if="isAuthenticated && !isLoading">
    <h2>Hi! {{ user?.nickname }}</h2>
    <h3>Welcome to Vue + Auth0</h3>
  </div>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld v-if="isAuthenticated && !isLoading" msg="Vite + Vue" />
  <h2 v-else>After login you'll be able to see the content!!</h2>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue';
import './style.css'
import App from './App.vue'


const app = createApp(App);


app.use(
  createAuth0({
    domain: "dev-b5hvctly.us.auth0.com",
    clientId: "n7FrHyJIFOS2o51Yyi4xbwTls0cy2aNs",
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })
);

app.mount('#app')

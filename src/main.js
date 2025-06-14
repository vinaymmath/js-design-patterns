import { router } from "./router.js";
// import './index.css';

window.addEventListener('popstate', await router);
window.addEventListener('hashchange', await router);
window.addEventListener('load', await router);
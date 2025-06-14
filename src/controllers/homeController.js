import RenderHome from "../views/home.js"
async function fetchPosts() {
    try {
        return await fetch("https://jsonplaceholder.typicode.com/posts");
    } catch (e) {
       console.log("failed to fetch posts", e);
    }
}

async function initialize() {
    let response = await fetchPosts();
    let data = await response.json();
    RenderHome(data);
}

export default {
    initialize
}
export default function home(posts) {
    document.getElementById("app").innerHTML = `
        <p>
            Note: This is a test page, it makes an api call, fetches a list of posts and presents it on the UI as below:
        </p>
        <div class="post-wrapper">
            ${posts.map(element => `<div class="post">User ${element.userId}: ${element.body}</div>`).join('')}
        </div>
    `
}
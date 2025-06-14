export default function home(posts) {
    return `
        <div class="post-wrapper">
            ${posts.map(element => `<div class="post">User ${element.userId}: ${element.body}</div>`).join('')}
        </div>`
}
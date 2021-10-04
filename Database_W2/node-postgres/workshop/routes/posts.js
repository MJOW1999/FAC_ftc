const db = require("../database/connection.js");

function get(request, response) {
    db.query("SELECT blog_posts.text_content, users.username FROM blog_posts INNER JOIN users ON users.id = blog_posts.user_id").then((result) => {
        const posts = result.rows;
        console.log(result.rows);
        const postList = posts.map((p) => `<li>${p.username} : ${p.text_content}</li>`).join("");
        response.send(`<ul>${postList}</ul>`);
    });
}

module.exports = { get };
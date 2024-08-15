function logBlogPosts(response) {
    let posts = JSON.parse(response.body);

    for (let post in posts) {
        console.log(posts[post].title);
    }
}

let url = "http://192.168.0.62:3030/jsonstore/blog/posts";

Shelly.call("HTTP.GET", { url: url }, function (result, error_code, error_message) {
    if (error_code === 0) {
        logBlogPosts(result);
    } else {
        console.log("Error", error_message);
    }
})
// Part 1: Parse and stringify
const json = '{"name":"Wanjiku","grades":{"math":88,"english":92}}';

// Text → object
const student = JSON.parse(json);
console.log(student.grades.math);

// Object → text (2 = indent, for readability)
const backToText = JSON.stringify(student, null, 2);
console.log(backToText);
console.log(typeof backToText);

// Part 2: Posts
const postsJson = '[{"id":1,"title":"Welcome","likes":12,"published":true},{"id":2,"title":"Draft ideas","likes":0,"published":false},{"id":3,"title":"Week 4 recap","likes":30,"published":true}]';

// 1. Parse it into an array
const posts = JSON.parse(postsJson);
console.log(posts);

// 2. Filter the published posts
const publishedPosts = posts.filter(post => post.published);
console.log(publishedPosts);

// 3. Sort the published posts by likes (descending)
const sortedPosts = publishedPosts.sort((a, b) => b.likes - a.likes);
console.log(sortedPosts);

// 4. Map published posts to summary strings
const postSummaries = sortedPosts.map(
  post => `${post.title} (${post.likes} likes)`
);
console.log(postSummaries);

// 5. Convert the published posts back to JSON
const publishedPostsJson = JSON.stringify(publishedPosts, null, 2);
console.log(publishedPostsJson);

// Part 3 Handlin bad JSON

// Part 3: try/catch
const badJson = "{name: 'Brian'}";   // invalid: no quotes on the key, single quotes on the value

try {
    const result = JSON.parse(badJson);
    console.log(result);
} catch (error) {
    console.log("Could not read that data:", error.message);
}
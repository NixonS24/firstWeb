var mongoose = require("mongoose");

//Mongoose Model Schema - toRefactor into seperate file
var blogSchema = new mongoose.Schema({
    author: String,
    title: String,
    type: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog",blogSchema);

//TESTDATA
// Blog.create({
//     author: "Admin",
//     title: "Test Blog 1",
//     type: "Data and Programming",
//     image: "https://images.unsplash.com/photo-1537183754667-555a01c76d04?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b66a304e5b70a6b201eb596270552923&auto=format&fit=crop&w=800&q=60",
//     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisi ligula, facilisis eget tellus sed, blandit interdum justo. Sed elit lectus, cursus in accumsan eu, imperdiet et est. Etiam auctor efficitur dui ut tristique. Mauris vestibulum libero in ipsum accumsan, ac iaculis eros ullamcorper. Proin lacinia consequat dui, in vestibulum turpis luctus eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc pellentesque ullamcorper lacus, eget luctus leo interdum a. Nullam feugiat, nulla ac faucibus ornare, dui eros porttitor elit, a laoreet ex eros quis magna. Aenean vestibulum a arcu ut varius. Donec a rhoncus elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer non auctor erat, sed faucibus purus. Pellentesque blandit diam nec facilisis convallis. Nam tincidunt neque sem, eu gravida magna pulvinar vel. Fusce tincidunt risus sit amet orci finibus, vel tincidunt ex egestas.",
// }, function(error, blog){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('test Blog local database');
//         console.log(blog);
//     }
// });

// Blog.create({
//     author: "Admin",
//     title: "Test Blog 2",
//     type: "Creative and Design",
//     image: "https://images.unsplash.com/photo-1537192793442-4ddeb85da435?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5eef1accd19548d05ac02ede6df78ee6&auto=format&fit=crop&w=800&q=60",
//     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisi ligula, facilisis eget tellus sed, blandit interdum justo. Sed elit lectus, cursus in accumsan eu, imperdiet et est. Etiam auctor efficitur dui ut tristique. Mauris vestibulum libero in ipsum accumsan, ac iaculis eros ullamcorper. Proin lacinia consequat dui, in vestibulum turpis luctus eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc pellentesque ullamcorper lacus, eget luctus leo interdum a. Nullam feugiat, nulla ac faucibus ornare, dui eros porttitor elit, a laoreet ex eros quis magna. Aenean vestibulum a arcu ut varius. Donec a rhoncus elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer non auctor erat, sed faucibus purus. Pellentesque blandit diam nec facilisis convallis. Nam tincidunt neque sem, eu gravida magna pulvinar vel. Fusce tincidunt risus sit amet orci finibus, vel tincidunt ex egestas.",
// }, function(error, blog){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('test Blog local database');
//         console.log(blog);
//     }
// });







module.exports = Blog;
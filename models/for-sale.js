var mongoose = require("mongoose");


//Mongoose Model Schema - toRefactor into seperate file
var forSaleSchema = new mongoose.Schema({
    author: String,
    title: String,
    price: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var ForSale = mongoose.model("ForSale",forSaleSchema);


//TESTDATA - this worked loading the data
// ForSale.create({
//     author: "Admin",
//     title: "Test Sale 1",
//     price: "$10,000",
//     image: "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e736a405c184e09646262d85a81a8e30&auto=format&fit=crop&w=2181&q=80",
//     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisi ligula, facilisis eget tellus sed, blandit interdum justo. Sed elit lectus, cursus in accumsan eu, imperdiet et est. Etiam auctor efficitur dui ut tristique. Mauris vestibulum libero in ipsum accumsan, ac iaculis eros ullamcorper. Proin lacinia consequat dui, in vestibulum turpis luctus eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc pellentesque ullamcorper lacus, eget luctus leo interdum a. Nullam feugiat, nulla ac faucibus ornare, dui eros porttitor elit, a laoreet ex eros quis magna. Aenean vestibulum a arcu ut varius. Donec a rhoncus elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer non auctor erat, sed faucibus purus. Pellentesque blandit diam nec facilisis convallis. Nam tincidunt neque sem, eu gravida magna pulvinar vel. Fusce tincidunt risus sit amet orci finibus, vel tincidunt ex egestas.",
// }, function(error, blog){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('test Blog local database');
//         console.log(blog);
//     }
// });


module.exports = ForSale;
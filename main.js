/*
 * Jalani Eanochs - Pitch and Fix Hackathon
 *
 */


const express = require("express");
const ejs_render = require("ejs");
const client = require("./product_holder");
const app = express();

// Port number 
const port = 7777;

app.set("view engine", "ejs");
app.set("views", "./public/templates");
app.set("query parser", "simple");
app.use(express.static('public'));

// List of matches for category title
category_titles = {
	"sports_outdoors": "Sports and Outdoors",

};


// Route to main
app.get("/products.html", (req, res) => {
	console.log(req.query);

	if (Object.keys(req.query).length == 0) {
		client.query("SELECT * FROM products;")
			.then(result => {
				console.log("Pulling all.");
				res.render("product_gen", {product_listing: result.rows, category_name: ""});
			})
			.catch(err => {
				console.log(err);
			});
	}

	else {
		client.query(`SELECT * FROM products WHERE category='${req.query["category"]}';`)
			.then(result => {
				// Get the correct category title.
				category_title = category_titles[req.query["category"]];
				res.render("product_gen", {product_listing: result.rows, category_name: category_title});
			})
			.catch(err => {
				console.log(err);
			});
	}

});



app.listen(port, () => {
	console.log("Server alive.");
	console.log(`http://localhost:${port}`);
});


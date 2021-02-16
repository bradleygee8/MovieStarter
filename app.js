/*
 Authors:
 Your name and student #: Bradley Gee A01031100
 Your Partner's Name and student #:
 (Make sure you also specify on the Google Doc)
*/
const express = require("express");
const fs = require("fs")
let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", (req, res) => res.render("pages/index"));

app.get("/myForm", (req, res) => res.render("pages/myForm"));

app.post("/myForm", (req, res) => {
  // Add your implementation here 
  let movies = req.body.Movies
  movies = movies.split(",")
  let myHtml = ""
  movies.forEach(movie => myHtml += ('<label class="todo-list__label"><input type="checkbox" name="" id="" /><i class="check"></i> <span>' + movie +'</span> </label>'))
  res.render("pages/index.ejs", {movieVariable: myHtml})
  console.log(myHtml)
});

app.get("/myListQueryString", (req, res) => {
  // Add your implementation here
  let firstMovie = req.query.movie1
  let secondMovie = req.query.movie2
  movies = '<label class="todo-list__label"><input type="checkbox" name="" id="" /><i class="check"></i><span>' + firstMovie +'</span> </label>' + '<label class="todo-list__label"><input type="checkbox" name="" id="" /><i class="check"></i><span>' + secondMovie +'</span> </label>'
  res.render("pages/index.ejs",{movieVariable: movies})
});
app.get("/search/:movieName", (req, res) => {
  // Add your implementation here
  const fs = require("fs")
  fs.readfile('movieDescriptions.txt', (err,data) => { 
    if (err){
      res.send('<h1> Movie Could not be found <h1>')
    }
    else{
      let move = req.param.movieName;
      if (movieName.includes(data)){
        res.send('<h1> ${movieName}</p>')
      }
      else{
        res.send('<h1> Movie Could not be found <h1>')
      }
    }
  })

});

app.listen(3000, () => {
  console.log("Server is running on port 3000 🚀");
});
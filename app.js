let express = require("express"); 
let app = express(); 


app.get("/", (req, res) => { 
    res.send("Hi, Welcome to my assignment"); 
}); 

/* making a conditional route */
app.get("/speak/:animal", (req, res) => { 
    let animal = req.params.animal; 
    let sound = ""; 
    if (animal === "pig"){ 
       sound = "oink"; 
    } else if (animal === "cow"){ 
        sound = "moo"; 
    } else if (animal === "dog"){ 
        sound = "woof"; 
    }
    res.send("The " + req.params.animal + " says " + sound);   
});



// if you go to any route not predefined in app.js you get a 404 ERROR MESSAGE.
app.get ("*", (req, res) => { 
    res.send("Sorry, page not found... What are you doing with your life?"); 
}); 


// to use the route express needs to listen at the requested port 
app.listen(3000, () => { 
console.log("the server has started"); 
}); 

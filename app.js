let express = require("express"); 
let app = express(); 


app.get("/", (req, res) => { 
    res.send("Hi, Welcome to my assignment"); 
}); 

/* making a conditional route */
app.get("/speak/:animal", (req, res) => { 
    let animal = req.params.animal; 
    let sounds = { 
        pig: "oink", 
        cow: "moo", 
        dog: "woof"
    }
    let sound = sounds[animal];
    res.send("The " + req.params.animal + " says " + sound);
    
}); 
/* making a route that sends a message number of times specified in the path */ 
app.get("/repeat/:message/:times", (req, res) => { 
    let message = req.params.message; 
    let times = Number(req.params.times); 
    let result = ""; 
    for(let i = 0; i < times; i++){
        result += message + " "; 
    }
    res.send(result); 
});

// if you go to any route not predefined in app.js you get a 404 ERROR MESSAGE.
app.get ("*", (req, res) => { 
    res.send("Sorry, page not found... What are you doing with your life?"); 
}); 


// to use the route express needs to listen at the requested port 
app.listen(3000, () => { 
console.log("the server has started"); 
}); 

var  result;

exports.calculate = function (req, res) {
    var action = req.param("calculate");
    var num1 = req.param("input1");
    var num2 = req.param("input2");
    if (action === "+") {
        result = (num1 - 0) + (num2 - 0);
        res.render("index", {result: result});

    }
    else if (action === "-") {
        result = (num1 - 0) - (num2 - 0);
        res.render("index", {result: result});
    }
    else if (action === "*") {
        result = (num1 - 0) * (num2 - 0);
        res.render("index", {result: result});
    }
    else if (action === "/") {
        if (num2 === '0') {
            result = "Error : Cannot divide by zero";
            res.render("index", {result: result});
        } else {
            result = (num1 - 0) / (num2 - 0);
            res.render("index", {result: result});
        }
    }
    else {
        res.render("index", {result: "Invalid selection!"});
    }

};

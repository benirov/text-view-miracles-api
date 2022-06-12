const Suggestion = require('../model/suggestion');

function suggestion(req, res){
	res.header("Access-Control-Allow-Origin", "*");


    newsuggestion = new Suggestion(req.body);
    newsuggestion.save();
    res.json({msg: "registrado"});
}

module.exports = {
	suggestion
}
const Suggestion = require('../model/suggestion');

function suggestion(req, res){
    let newsuggestion = new Suggestion(req.body);
    newsuggestion.save();
    res.json({msg: "registrado"});
}

module.exports = {
	suggestion
}
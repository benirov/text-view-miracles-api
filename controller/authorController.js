const Author = require('../model/authors');


function getAuthors(req, res){
	
	Author.find({}, (error, authors) =>{
		if(error){
			return res.status(500).send({message: `error al realizar la peticiòn: ${error}`});
		}
		else if(!authors){
			return res.status(404).send({message: `No existen resultados`});	
		}else{
			return res.status(200).send({authors})
		}
	});
}







module.exports = {
	getAuthors,
}
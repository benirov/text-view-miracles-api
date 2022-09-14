const Genre = require('../model/genres');


function getGenres(req, res){
	
	Genre.find({}, (error, genres) =>{
		if(error){
			return res.status(500).send({message: `error al realizar la peticiòn: ${error}`});
		}
		else if(!genres){
			return res.status(404).send({message: `No existen resultados`});	
		}else{
			return res.status(200).send({genres})
		}
	});
}







module.exports = {
	getGenres,
}
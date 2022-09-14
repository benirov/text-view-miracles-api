const TextViewLibrary = require('../model/textview');

function getTextViews(req, res){
	let perPage = 10;
	let Start =  req.params.start || 1;
	//let End =  req.params.end;
	
	TextViewLibrary.find({}, (error, textview) =>{
		if(error){
			return res.status(500).send({message: `error al realizar la peticiòn: ${error}`});
		}
		else{
			TextViewLibrary.count((errorP, countP) =>{
				if(errorP){
					return res.status(500).send({message: `error al realizar la peticiòn: ${error}`});
				}else{
					return res.status(200).send({
							textview,
							current: Start,
							pages: Math.ceil(countP / perPage)
						})
				}
			});
		}
		
	}).skip((perPage * Start) - perPage).limit(perPage).sort({"order":-1});
}


function getTextView(req, res){

	
	let id = req.params.id;
	TextViewLibrary.findById(id, (error, textview) =>{
		if(error){
			return res.status(500).send({message: `error al realizar la peticiòn: ${error}`});
		}
		else if(!textview){
			return res.status(404).send({message: `El libro no existe`});	
		}else{
			return res.status(200).send({textview})
		}
	});
}

function getTextViewFilter(req, res){
	let filterString = req.query.query;
	let filterAuthor = '';
	let filterGenres = '';
	let authors = req.query.authors;
	let genres = req.query.genres;
	if(authors){
		let regexAuthors = authors.replace(",", "|");
		if(filterString ){
			filterAuthor = `${filterString}|${regexAuthors}`;
		}else{
			filterAuthor = `${regexAuthors}`;
		}
	}
	let filterGeneric = {$or : []};

	if(genres){
		let regexGenres = genres.replace(",", "|");
		filterGenres = `${regexGenres}`;
	}

	if(filterString){
		filterGeneric.$or.push({title:{'$regex': filterString, '$options': 'i'}});
		filterGeneric.$or.push({texto:{'$regex': filterString, '$options': 'i'}});
	}
	if(filterAuthor != ''){
		filterGeneric.$or.push({author:{'$regex': filterAuthor, '$options': 'i'}});
	}

	if(filterGenres != ''){
		filterGeneric.$or.push({genero:{'$regex': filterGenres, '$options': 'i'}});
	}
	TextViewLibrary.find(filterGeneric, (error, textview) =>{
		if(error){
			return res.status(500).send({message: `error al realizar la peticiòn: ${error}`});
		}
		else if(!textview){
			return res.status(404).send({message: `No existen resultados`});	
		}else{
			return res.status(200).send({textview})
		}
	});
}







module.exports = {
	getTextViews,
	getTextView,
	getTextViewFilter,
}
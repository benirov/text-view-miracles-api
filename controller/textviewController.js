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

	res.header("Access-Control-Allow-Origin", "*");
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
	res.header("Access-Control-Allow-Origin", "*");
	let filterString = req.params.search;
	let filter = { $or: [{ title: {'$regex': filterString, '$options': 'i'} }, { texto: {'$regex': filterString, '$options': 'i'} }, { author: {'$regex': filterString, '$options': 'i'} }] }
	TextViewLibrary.find(filter, (error, textview) =>{
		if(error){
			return res.status(500).send({message: `error al realizar la peticiòn: ${error}`});
		}
		else if(!textview){
			return res.status(404).send({message: `Noexisten resultados`});	
		}else{
			return res.status(200).send({textview})
		}
	});
}



module.exports = {
	getTextViews,
	getTextView,
	getTextViewFilter
}
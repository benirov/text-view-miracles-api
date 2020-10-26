'use strict';



function getTextViews(req, res)
{

	let perPage = 10;
	let Start =  req.params.start || 1;
	//let End =  req.params.end;
	
	TextViewLibrary.find({}, (error, textview) =>
	{
		if(error)
		{
			return res.status(500).send({message: `error al realizar la peticiòn: ${error}`});
		}
		else
		{
			TextViewLibrary.count((errorP, countP) =>
			{
				if(errorP)
				{
					return res.status(500).send({message: `error al realizar la peticiòn: ${error}`});
				}else
				{
					return res.status(200).send(
						{
							textview,
							current: Start,
							pages: Math.ceil(countP / perPage)
						
						})
				}
			});
		}
		
	}).skip((perPage * Start) - perPage).limit(perPage).sort({"order":-1});
}


function getTextView(req, res)
{
	res.header("Access-Control-Allow-Origin", "*");
	let id = req.params.id;
	TextViewLibrary.findById(id, (error, textview) =>
	{
		if(error)
		{
			return res.status(500).send({message: `error al realizar la peticiòn: ${error}`});
		}
		else if(!textview)
		{
			return res.status(404).send({message: `El libro no existe`});	
		}else
		{
			return res.status(200).send({textview})
		}
	});
}



function updateRecurso(req, res)
{
	
	let id = req.params.id;
  	let update = req.body;
  	let data = { image: req.body.image };
  	
	
	var ObjectID = require('mongodb').ObjectID;
	var objId = new ObjectID(id); 

  TextViewLibrary.findByIdAndUpdate({_id: objId}, data, (error, updateBook) =>
  {
    if(error)
    {
      res.status(500).send({message: `error al actualizar el recurso ${error}`});
    }
    else
    {
      res.status(200).send({book: updateBook});
    }
  });
}



const TextViewLibrary = require('../model/textview');



module.exports = 
{
	getTextViews,
	getTextView,
	updateRecurso,
}
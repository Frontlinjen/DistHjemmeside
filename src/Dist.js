function login(){
	var client = apigClientFactory.newClient();
	var params = { taskID : '3'}
	client.tasksTaskIDGet(params, {}).then(recieveData).catch(errorAccoured);
	
}


function errorAccoured(result){
		document.body.innerHTML = "<h1> Failed! </h1>";
}

function recieveData(result){
	document.body.innerHTML = "<h1> Success! " +  result + " </h1>";
}
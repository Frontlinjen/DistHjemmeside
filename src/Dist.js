function login(){
	var client = apigClientFactory.newClient();
	var params = { taskID : '3'}
	client.tasksTaskIDGet(params, {}).then(recieveData).catch(errorAccoured);
	
}


function errorAccoured(result){
	//document.body.innerHTML = "<h1> Failed! </h1>";
	print(result);
}


function recieveData(result){
	if(result.status == 200)
	{
		document.body.innerHTML = "<h1> Success! " +  JSON.stringify(result.data) + " </h1>";
	}
	
}
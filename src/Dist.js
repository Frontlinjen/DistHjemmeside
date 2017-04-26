function loadTasks(){
	var client = apigClientFactory.newClient();
	var availableIds = ["1", "2", "3", "4"];
	for(var id in availableIds){
		var params = { "taskID" : availableIds[id]}
		client.tasksTaskIDGet(params, {}).then(recieveData).catch(errorAccoured);
	}
}

function errorAccoured(result){
}

function print(token){
	for(var t in token){
		console.log("key: " + t + "value: " +token[t]);
	}
}


function recieveData(result){
	console.log(result.data.Task);
	if(result.status == 200)
	{
		if('content' in document.createElement('template'))
		{
			var template = document.querySelector('#taskentry');
			var taskname = template.content.querySelector(".taskname");
			var pricetag = template.content.querySelector(".pricetag");
			var taskdesc = template.content.querySelector(".taskdescription");
			taskname.textContent = result.data.Task.title;
			pricetag.textContent = result.data.Task.price;
			taskdesc.textContent = result.data.Task.description;
			console.log(template);
			var entry = document.importNode(template.content, true);
			var list = document.querySelector('#taskcontainer');
			list.appendChild(entry);	
		}
		else
		{
			window.alert("Please upgrade to a modern browser that supports <template> such as firefox or chrome");
		}
	}
	
	
}

function search(result){
	result.toLowerCase();
	var arr = result.split(" ");
	var arrn = [];
	var errortext = "Følgende tags eksisterer ikke: <br>";
	var i;
	for(i = 0; i < arr.length; i++){
		if(tags[arr[i]] == undefined){
			text += arr[i] + "<br>";
		}
		else{
			arrn.push(tags[arr[i]]);
		}
	}
	
}
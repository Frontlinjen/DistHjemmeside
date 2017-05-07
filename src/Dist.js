function queryTasks(searchTags){
	var client = apigClientFactory.newClient();
	var query = "";
	for(var id in searchTags){
		if(id == searchTags.length - 1){
			query += searchTags[id];
		} else{
		query += searchTags[id] + " ";
		}
	}
	var params = {"tags" : query};
	client.tasksGet(params, {})
		.then(recieveData)
		.catch(errorAccoured);
}

function recieveData(result){
	if(result.status == 200){
		for(var Task in result.data.Results){
			createTaskInstance(result.data.Results[Task]);
		}
	} else if(result.status == 400){
		console.log("Bad request");
	} else if(result.status == 404){
		console.log("Not found");
	} else {
		console.log("Internal Server Error");
	}
}

function errorAccoured(result){
	console.log(result.status);
}



function print(token){
	for(var t in token){
		console.log("key: " + t + "value: " +token[t]);
	}
}

function createTaskInstance(Task){
	console.log(Task);
		if('content' in document.createElement('template')){
			var template = document.querySelector('#taskentry');
			var taskname = template.content.querySelector(".taskname");
			var pricetag = template.content.querySelector(".pricetag");
			var taskdesc = template.content.querySelector(".taskdescription");
			taskname.textContent = Task.title;
			pricetag.textContent = Task.price;
			taskdesc.textContent = Task.description;
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

function search(){
	var list = document.querySelector('#taskcontainer');
	list.innerHTML = "";
	result = document.getElementById('searchTags').value;
	result.toLowerCase();
	var arr = result.split(" ");
	var arrn = [];
	var errortext = "Følgende tags eksisterer ikke: \n";
	var i;
	for(i = 0; i < arr.length; i++){
		if(tags[arr[i]] == undefined){
			errortext += arr[i] + "\n";
		}
		else{
			arrn.push(tags[arr[i]]);
		}
	}
	if(arrn.length == 0){
		alert(errortext);
	} else{
		queryTasks(arrn);
	}
}
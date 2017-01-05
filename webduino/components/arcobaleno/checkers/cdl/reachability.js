function CheckReachability(start, end, tpre, tnext){
	var t_visited = new Array();
	var tempset = new Array();
	var res = true;
	var newset = false;
	var i = 0;
	var j = 0;
	var reachbility = true;

	for (i = 0; i < tpre.length; i++)
	{
		t_visited[i] = "0";
	}
	for (i = 0; i < start.length; i++) 
	{
		tempset[start[i]] = "1";
	}
	while (true) 
	{
		newset = false;
		for (i = 0; i < tpre.length; i++)
		{
			if (t_visited[i] == "1") continue;
			for (j = 0; j < tpre[i].length; j++) 
			{
				if (tempset[tpre[i][j]] != "1")
				{
					res = false;
				}
			}
			if (res == true) {
				for (var k = 0; k < tnext[i].length; k++) 
				{
					tempset[tnext[i][k]] = "1";
					t_visited[i] = "1"; 
					newset = true;
				}
			}
			res = true;
		}
		if (newset == false)break;
	}

	if(tempset == null) console.log("tempset is null!!");
	console.log("Reachable Components:")
	for(var key in tempset)console.log(key);
}
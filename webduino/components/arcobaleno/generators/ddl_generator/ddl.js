

Arco.ddl['check_component'] = function(comp_name, comp_type, comp_info)
{
	if (!(comp_type in comp_info)) 
	{
		comp_info[comp_type] = new Object();
		comp_info[comp_type].names = new Object();
		comp_info[comp_type].members = new Array();
		comp_info[comp_type].count = -1;
     }
	
	if (!(comp_name in comp_info[comp_type].members)) 
	 {
		 comp_info[comp_type].count += 1;
		 comp_info[comp_type].members.push(comp_name);
		 comp_info[comp_type]["names"][comp_name] = comp_type + '_' + comp_info[comp_type].count;
	 }
}

Arco.ddl['extract_components'] = function(xmldoc, comp_info)
{
	var result = new Object();
	var components = new Object();
	var xmlcomp = xmldoc.getElementsByTagName("component");
	
	if (xmlcomp.length > 0)
	{
		for (var i = 0; i < xmlcomp.length; i++)
		{
			var comp_name = xmlcomp[i].getAttribute("name");
			var comp_type = xmlcomp[i].getElementsByTagName("type")[0].childNodes[0].nodeValue;
			
			components[comp_name] = comp_type;
			Arco.ddl.check_component(comp_name, comp_type, comp_info);
		}
		result.xmlcomp = xmlcomp;
		result.components = components;
	}
	return result;
}

Arco.ddl['generate_counter'] = function(name, cnt, handler)
{
	 var code = "def "+ name + '(*args, **kwargs):\n    return {"__cnt__": ' + cnt + "}\n";
	 
	 handler[name] = code;
}

Arco.ddl['generate_time'] = function(name, time, handler)
{
	 var code = "def "+ name + '(*args, **kwargs):\n    return {"__time__": ' + time + "}\n";
	 
	 handler[name] = code;
}

Arco.ddl['generate_handler'] = function(xmlcomp, comp_info)
{
	var handler = new Object();
	
	for (var i = 0; i < xmlcomp.length; i++)
	{
		var behavior = xmlcomp[i].getElementsByTagName("behavior")[0];
		var children = behavior.getElementsByTagName("name")[0].childNodes;
		
		if (children.length > 0)
		{
			var comp_name = xmlcomp[i].getAttribute("name");
			var comp_type = xmlcomp[i].getElementsByTagName("type")[0].childNodes[0].nodeValue;
			var value = behavior.getElementsByTagName("value")[0].childNodes[0].nodeValue;
			var name = comp_info[comp_type]['names'][comp_name];
			
			if (children[0].nodeValue == "counter")
				Arco.ddl.generate_counter(name, value, handler);
			else if (children[0].nodeValue == "time")
				Arco.ddl.generate_time(name, value, handler);
		}
	}
	return handler;
}

Arco.ddl['extract'] = function(xmldoc)
{
    var result = new Object();
	var graph = new Object();
	var member = new Object();
	var comp_info = new Object();
	var comp = Arco.ddl.extract_components(xmldoc, comp_info);
	if (!comp.xmlcomp || !comp.components)
		return result;
	var xmlcomp = comp.xmlcomp;
	var components = comp.components;
	var xmlconn = xmldoc.getElementsByTagName("connection");
	
	if (xmlconn.length > 0)
	{
		for (var i = 0; i < xmlconn.length; i++)
		{
			var conn_to = xmlconn[i].getElementsByTagName("to");
			var conn_from = xmlconn[i].getElementsByTagName("from");
			
			if ((conn_from.length > conn_to.length) && (conn_to.length == 1))
			{
				var src = new Array();
				
				for (var j = 0; j < conn_from.length; j++)
				{
					var conn_from_name = conn_from[j].getAttribute("name");
					var conn_from_type = components[conn_from_name];
					var name = comp_info[conn_from_type]["names"][conn_from_name];
					
					src.push(name);
				}
				
				var conn_to_name = conn_to[0].getAttribute("name");
				var conn_to_type = components[conn_to_name];		
				var name = comp_info[conn_to_type]["names"][conn_to_name];
				
				if (src.length > 1)
					member[name] = src;
			}
			else if (conn_from.length == 1)
			{
				var conn_from_name = conn_from[0].getAttribute("name");
				var conn_from_type = components[conn_from_name];
				var src = comp_info[conn_from_type]["names"][conn_from_name];
				
				if (! (src in graph))
					graph[src] = new Array();
				
				for (var j = 0; j < conn_to.length; j++) {
					var conn_to_name = conn_to[j].getAttribute("name");
					var conn_to_type = components[conn_to_name];
					var dst = comp_info[conn_to_type]["names"][conn_to_name];
					
					if (!(dst in graph[src]))
						graph[src].push(dst);
				}
			}
		}
		
		result.graph = graph;
		result.member = member;
		var handler = Arco.ddl.generate_handler(xmlcomp, comp_info);
		
		if (handler)
			result.handler = handler;
	}
	return result;
}

Arco.ddl['generate_ddl'] = function(cdl_data)
{
	var xmldoc = Blockly.Xml.textToDom(cdl_data);

	var ddl = new Object();
	var result = Arco.ddl.extract(xmldoc);
	
	
	if (result.graph) 
	{

		var graph = "";
		
		for (var i in result.graph)
		{
			var dst = result.graph[i];
				
			if (dst.length == 1)
				graph += i + "->" + dst[0] + "\n";
			else if (dst.length > 1)
				graph += i + "->" + "[" + dst +  "]\n";
		}
		ddl.graph = graph;
	} 

//	else
//		return dgl;
	

	
	if (result.member) 
	{
		var member = "";
		
		for (var i in result.member)
			member += i + "=" + "[" + result.member[i] + "]\n";
		
		ddl.member = member;
	}
	
	if (result.handler)
	{
		var handler = "";
		
		for (var i in result.handler)
			handler += result.handler[i];
		
		ddl["handler.py"] = handler;
	}


	return ddl;
}

var host = 'ws://127.0.0.1:10001/ws';

function publish(pkg, version, category, title, description, content, uid, key, onerror) {
	var result = new Object();
	var websocket = new WebSocket(host);
	var buf = JSON.stringify({
		'op': 'upload', 
		'package': pkg, 
		'version': version, 
		'type': 'app', 
		'description': {'category': category, 'title': title, 'description': description}, 
		'app': content, 
		'key': key, 
		'uid': uid
		});
	
	websocket.onopen = function(event) {
		 websocket.send(buf);
	}
	
	websocket.onmessage = function(event) {
		websocket.close();
	}
	
	websocket.onerror = onerror;
}

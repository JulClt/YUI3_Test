YUI().add('hello', function(Y){

	Y.namespace('Hello');

	function setNodMessage(node, html){
		var node = Y.one(node);
		if(node){
			node.set('innerHTML', html);
		}
	}

	Y.Hello.sayHello = function(node) {
		setNodMessage(node, 'Modules Example !')
	}

}, '0.0.1', {requires: ['node-base']});
YUI().add('cat-core', function(Y){
	var cat = Y.namespace('Cat');

	cat.infos = function(node){
		var out = '';

		out += '<ul>'
		for(var k in cat.properties){
			out+= '<li>'+ k + ' : '+ cat.properties[k] +'</li>'
		}
		out += '</ul><p>Action : '+ cat.action() +'</p>';
		out += '<p>Test : '+ cat.cry() +'</p>';

		Y.one(node).append(out);
	};
}, '0.0.1', {requires: ['node', 'cat-call', 'cat-properties']});
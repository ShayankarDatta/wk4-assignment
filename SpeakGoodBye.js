(function(window){
	var byeSpeaker={};
	var speaks="Bye";
	byeSpeaker.speak=function(name){
		console.log(speaks+" "+name);
	}
	window.byeSpeaker=byeSpeaker;
})(window);
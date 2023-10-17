function playAudio(id, src, volume) {
	var audioElement = document.getElementById(id);
	if (!audioElement) {
		audioElement = document.createElement('audio');
		audioElement.id = id;
		document.body.appendChild(audioElement);
	}
	audioElement.src = src;
	audioElement.volume = volume;
	audioElement.play();
}

var listItems = 
['<li><p>I\'m currently doing a data science internship at <a href="https://omniumcpg.com/">Omnium CPG</a> and I\'m always looking for new and challenging experiences</p></li>', 

'<li> <div class="inline-p"><p> I\'m a member of the varsity swim team at Waterloo where <p> <a href="https://athletics.uwaterloo.ca/news/2023/2/28/boden-wins-silver-wormald-bronze-at-u-sports-swimming-championship.aspx"> I\'ve medaled nationally</a></div> <p></p></li>', 

'<li><div class="inline-p"> <p>When I have extra time I work on projects which you can find on my </p> <a href="https://github.com/alexboden"> GitHub</a><p></p></li>',
];
var index = 0;
function addListItem() {
	if (index < listItems.length) {
		var aboutList = document.getElementById('aboutList');
		aboutList.innerHTML += listItems[index];
		index++;
	}
	if (index == listItems.length) {
		document.querySelector("button").style.display = "none";
	}
}

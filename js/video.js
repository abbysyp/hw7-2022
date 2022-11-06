var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = document.querySelector("video")

	video.autoplay = false
	console.log("Auto play is set to false")

	video.loop = false
	console.log("Loop is set to false")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");

	video.play()

	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	
	video.playbackRate *= .9

	console.log("Speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	
	video.playbackRate /= .9

	console.log("Speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead Video");
	
	if (video.ended) {
		video.currentTime = 0
	}
	else {
		video.currentTime += 10
	}

	console.log("Video current time is " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	
	if (video.volume == 0) {
		video.volume = 1
		document.querySelector("#mute").innerHTML = "Mute"
		console.log("Mute");
	}
	else {
		video.volume = 0
		document.querySelector("#mute").innerHTML = "Unmute"
		console.log("Unmute");
	}
});

document.querySelector("#slider").addEventListener("click", function() {

	var slider = document.querySelector("#slider")
	var output = document.querySelector("#volume")

	output.innerHTML = slider.value + "%"
	
	video.volume = slider.value / 100

	console.log("The current value is " + video.volume);

});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage Video");

	video.classList.add("oldSchool")

});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Video");

	video.classList.remove("oldSchool")

});








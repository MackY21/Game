	var Uscore = 0;
	var highscore = 10;
$("#clicky").click(function() {
	Uscore++;
	$('#ranson').html('<p>' + Uscore + '</p>');
	// document.getElementById('score').innerHTML = "Your Score:" + Uscore;

	if (Uscore > highscore) {
		// document.getElementById('hiscore').innerHTML = "New Highscore: " + Uscore;
		highscore = Uscore;
		return;
	}
});

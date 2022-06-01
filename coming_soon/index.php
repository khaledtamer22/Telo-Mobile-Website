<!DOCTYPE html>
<html>
<head>
	<title>Coming soon</title>
	<link rel="icon" href="assets/images/logo.png">
	<link rel="stylesheet" href="assets/css/custom.css">
	<link rel="stylesheet" href="assets/css/fonts.css">
</head>
<body bgcolor="#000">

	<section>
		<div class="overlay">
			<center><div id="clock"></div></center>
		</div>

			<div class="top-section">
				<img src="assets/images/telo-games.png" width="110" style="">
			</div>

			<div style="margin-top: 7vh">
				<center><img class="arabic-text" src="assets/images/arabictext.png" width="350" style=""></center>
			</div>

		<div>
		<video class="video" id="video" width="100vw" autoplay="true" loop="" muted="false" playsinline>
			<source src="assets/videos/video.mp4" type="video/mp4">
		</video>
		</div>
		
			<div class="bottom-section">
				<p>Future is now</p>
			</div>


						<div class="audio_section">
	

				
				<center>
				<img src="assets/images/sound-off-icon.png" width="40" class="play" id="playId">
				<img src="assets/images/sound-on-solid.png" width="40" class="pause" id="playId"></center>

			</div>

		
		
		</section>
		<script src="assets/js/jquery-3.5.1.min.js"></script>
		<script src="assets/js/jquery.countdown.min.js"></script>
		<script src="https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"></script>
		<script>

			$('#clock').countdown('2020/11/26 20:00:00', function(event) {
			var $this = $(this).html(event.strftime(''
				+ '<p class="container">'
			+ '<span class="border">%D</span> '
			+ '<span class="border">%H</span> '
			+ '<span class="border">%M</span> '
			+ '<span class="border">%S</span> '
			+ '</p>'
			+ '<div class="text"><span>DAYS</span><span>HOURS</span><span>MINUTES</span><span>SECONDS</span></div>'));
			});
		</script>
		<script type="text/javascript">
     
     if ($(window).width() < 1024) {
			$("video").removeAttr("width","id");
			$("video").addClass("video-phone");
		}	


var audio = new Audio('assets/videos/TELO_COUNTDOWN3_1.mp3');

$('.play').on('click', function() {
  $(this).hide();
  $('.pause').css('display', 'inline-block');
  audio.play();
});

$('.pause').on('click', function() {
  $(this).hide();
  $('.play').css('display', 'inline-block');
  audio.pause();
});


	
	
</script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-MVXBGPP9XE"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-MVXBGPP9XE');
</script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XR5L5RZEE2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XR5L5RZEE2');
</script>

	</body>
	</html>
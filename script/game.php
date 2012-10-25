<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
   "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<link href="core/css/jquery-ui.css" rel="stylesheet" type="text/css"/>
		<script src="core/js/jquery.js"></script>
		<script src="core/js/jquery.min.js"></script>
		<script src="core/js/jquery-ui.min.js"></script>
	
		<link href="css/multipleUse.css" rel="stylesheet" type="text/css">
		<link href="css/game.css" rel="stylesheet" type="text/css">
		<link href="css/resources.css" rel="stylesheet" type="text/css">
		<link href="css/menu.css" rel="stylesheet" type="text/css">
		<link href="css/content.css" rel="stylesheet" type="text/css">
		
		<script type="text/javascript" src="js/multipleUse.js"></script>
		<script type="text/javascript" src="js/menu.js"></script>
		
		<script type="text/javascript" src="js/research.js"></script>
		<link href="css/research.css" rel="stylesheet" type="text/css">
		<script type="text/javascript" src="js/trade.js"></script>
		<link href="css/trade.css" rel="stylesheet" type="text/css">
		<script type="text/javascript" src="js/fleet.js"></script>
		<link href="css/fleet.css" rel="stylesheet" type="text/css">
	</head>
	<body>
		<div id="root">
			<div id="center">
				<?php 
					include 'inc/multipleUse.php';
					include 'inc/resources.php';
					include 'inc/menu.php';
					include 'inc/content.php';
				?>
			</div>
		</div>
	</body>
</html>
<div id="contentRoot">
	<?php 
		if(isset($_GET['page'])) {
			if(is_file("inc/".$_GET['page'].".php")) {
				include "inc/".$_GET['page'].".php";
			}
		}
		else include "inc/overview.php";
	?>
</div>
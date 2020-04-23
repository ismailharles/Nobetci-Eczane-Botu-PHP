<?php
function rep($text) {

$text = trim($text);

$search = array('Ç','ç','Ğ','ğ','ı','İ','Ö','ö','Ş','ş','Ü','ü',' ');

$replace = array('c','c','g','g','i','i','o','o','s','s','u','u','-');

$new_text = str_replace($search,$replace,$text);

return $new_text;

}  


if(isset($_POST["ilce"])){

$hedefsite = "https://nobet.org/".rep($_POST["il"])."/".rep($_POST["ilce"])."/nobetci-eczaneler.html";

$site	   = file_get_contents($hedefsite);



preg_match_all('@<ul class="cssTable">(.*?)</ul>@si',$site,$ul);

preg_match_all('@<li class="cssTableRow">(.*?)</li>@si',$ul[1][1],$li);

preg_match_all('@<title>(.*?)</title>@si',$site,$title);



echo "<div style='text-align:center;'>".$title[1][0]."i İçin Sonuçlar</div><br>";

?>

<table class="table">
	<tbody>

<?php

$s=0;

foreach ($li[1] as $baslikparca) {

	preg_match_all('@(.*?)</strong><br>@si', $li[1][$s],$baslik);

	preg_match_all('@<a href="https://www.google.com(.*?)" target="_blank">@si', $li[1][$s],$adres);

	preg_match_all('@<a href="tel:(.*?)" >@si', $li[1][$s],$tel);

	?>



    <tr>     

      <td style="text-align: center;">

      	<?php if(empty($baslik[0][0])){echo "<strong>Bilinmiyor</strong><br>";}else{echo $baslik[0][0];}?> <br> 

      	<?php echo "<a class='btn btn-primary  btn-block' href='https://www.google.com".$adres[1][0]."'><i class='fa fa-map-marked-alt'></i> YOL TARİFİ</a>";?>

      	<?php echo "<a class='btn btn-success  btn-block' href='tel:".$tel[1][0]."'><i class='fa fa-phone'></i> ARA</a>";?>

      </td>     

    </tr>



	<?php



	$s++;

}


}

?>

 </tbody>

</table>
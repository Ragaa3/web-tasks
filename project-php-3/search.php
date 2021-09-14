<?php 
    require 'head.php';
$flowers = array(array ('food',"price","code",uniqid() ), array('appel',"$5",uniqid() ), array('rice',"$15",uniqid()), array('banana',"$15",uniqid()) );
$addfood= array("orange","$5",uniqid() );
array_push($flowers,$addfood);
$filehandle = fopen("food.txt",'r+');
$wirte = fwrite($filehandle,'');
            echo $wirte;

?>

<html>
    <head></head>
    <body>
        <table style= "border: 1px solid black;margin:30px">
            
                <?php
                    for ($row = 0; $row < 5; $row++) {
  echo"<tr>";
  for ($col = 0; $col < 3; $col++) {
    echo "<td style= 'border: 1px solid black;'>".$flowers[$row][$col]."</td>";
  }
  echo "</tr>";
}
             
            
?>
           
        </table>
        <?php
        
        ?>
    </body>
</html>        

<?php require './footer.php';?>
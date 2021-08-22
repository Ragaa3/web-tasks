<?php 
    $res = $_GET['res'];
    require 'head.php';
    $flowers = array( 'ahmed' , 'ali' , 'alaa' );
    // print_r($flowers);
$class = 'danger';
for ( $i=0;$i<3;$i++ )
    {
        if ($res==$flowers[$i])
        {
            $class = 'sucess';
            break;
            
        }
} ?>

?>

        <div class="container pt-5">
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action active">
                    the team are :
                </a>
                <?php
                    //Prints the array
                    foreach($flowers as $flower){
                    //     echo $flower;
                ?>
                <a href="#" class="list-group-item list-group-item-action"><?php echo $flower; ?></a>
                <?php 
                    }
                ?>
            </div>

            <!-- 
                if the user is from the list print his name in a success alert but if not print the user in danger alert
                use any condition u want to try ( if , ? , ...... )
            -->
            <?php 
    $res = $_GET['res'];
    $flowers = array( 'ahmed' , 'ali' , 'alaa' );
        if ($class == 'sucess')
        {
            echo "<div class='alert  mt-5 alert-success' role='alert'>".
                "<h4 class='alert-heading'>"."Well done!</h4>".
                "<p>"."Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."."</p>"
                ."<hr>".
                "<p class='mb-0'>"."Whenever you need to, be sure to use margin utilities to keep things nice and tidy."."</p>"
            ."</div>";
        }
        else
        {
            echo "<div class='alert  mt-5 alert-danger' role='alert'>".
                "<h4 class='alert-heading'>"."Waring this!"."</h4>".
                "<p>"."Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."."</p>".
                "<hr>".
                "<p class='mb-0'>"."Whenever you need to, be sure to use margin utilities to keep things nice and tidy."."</p>"
            ."</div>";
} ?>
 
   
            
        </div>

        

<?php require './footer.php';?>
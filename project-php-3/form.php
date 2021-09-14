<?php require 'head.php';

session_start();
$username = array("asmaa","amal","amira");
$pass = array("1234","4444","0000");

    $name = $_GET['name'];
    $password = $_GET['password'];
    if(in_array($name,$username) && in_array($password,$pass))
    {
        echo "
        <section class='overlay'>
            <h2 class='text-center'>wait the page will loading..................</h2>
            <div class='spinner>
                <div class='double-bounce1'></div>
                <div class='double-bounce2'></div>
            </div>
        </section>
        ";
        header("REFRESH:5;url=search.php");
    }
    else
    {
        echo "Error: please enter true name and password ";
    }

    
    
    
    
    ?>

    <?php require 'footer.php'?>
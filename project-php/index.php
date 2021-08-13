<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="description" content="hello">
        <title>Ragaa_project-revesion_js</title>                            <!----- title ----->
        <link rel="stylesheet" href="css/style.css">
        <!-- start fontawesome css -->
        <link rel="stylesheet" href="css/brands.min.css">
        <link rel="stylesheet" href="css/fontawesome.min.css">
        <link rel="stylesheet" href="css/solid.css">
        <!-- end fontawesome css -->
    </head>
    <body>
        <!-- start header -->
        <header class ="ov-hidden" id="home">
            <!-- start section of container -->
            <section class="container">
                <ul class=" ul-style fl-left">
                    <li class="fl-left li"><a class="a-style" href="#home">home</a></li>
                    <li class="fl-left li"><a class="a-style" href="#welcome">shargin<img src="images/black.png"></a></li>
                    <li class="fl-left li"><a class="a-style" href="#anime9">itach<img src="images/black2.png"></a></li>
                </ul>
                <!-- start unorder list -->
                <ul class="ul-style fl-right">                                                              
                    <li class="fl-left li" ><input type="search" name="search" id="search"></li>                                                        <!-- first element -->
                    <li class="fl-left li" ><a class="a-style" href="#search">search<i class="fas fa-search"></i></a></li>                              <!-- second element -->
                </ul>
                <!-- end unorder list -->
                
            </section>
            <!-- end section of container -->
        </header>
        <!-- end header -->
        <!-- start section of content -->
        <section class="content ov-hidden">
            <section class="total">
                
                <!-- start unorder list -->
                <ul class="ul-style fl-left">
                    <li class="fl-left"><a  class="a-style" href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a></li>           <!-- first element -->
                    <li class="fl-left"><a  class="a-style" href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a></li>       <!-- second element -->
                    <li class="fl-left"><a  class="a-style" href="https://whatsapp.com" target="_blank"><i class="fab fa-whatsapp"></i></a></li>         <!-- third element -->
                </ul>
                <!-- end unorder list -->
                <!-- start section to add two number -->
                <section class="add"> 
                    <?php
                     $n1=3;
                    $n2=4;
                    $a1 = (int)$n1;
                    $a2 = (int)$n2;
                    $summ=$a1+$a2;
                   echo "<div id='first'>type the first number</div>".$a1;
                   echo "<div>type the second number</div>".$a2;
                    if(is_numeric($a1) || is_numeric($a2))
                       {
                           echo "<div> the plus of them is :</div>"."not a number";
                       }
                    elseif($a1 == "" || $a2 == " ")
                    {
                        echo "<div> the plus of them is :</div>"."please a number";
                    }
                       else
                       {
                           echo "<div> the plus of them is :</div>".$summ;
                       }
                ?>
                </section>
                <!-- end section to add two number -->
            </section>
            <hr class="hr">
           
        </section>
        <!-- end section of content -->
        <!-- start footer -->
        <footer>
            copyright&copy;Ragaa ismail fayez
        </footer>
        <!-- end footer -->
        <!-- start javascript fontawesome -->
        <script src="js/brands.min.js"></script>
        <script src="js/fontawesome.min.js"></script>
        <script src="js/solid.min.js"></script>
        <!-- end javascript fontawesome -->
        <script src="js/file.js"></script>
    </body>
</html>
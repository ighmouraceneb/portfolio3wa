<?php

$page = 'home';
if(empty($_GET['page'])){
    $page = 'home';
    
}else $page = $_GET['page'];

require('apps/skel.php');
?>




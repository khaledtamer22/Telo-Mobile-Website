<?php include 'includes/functions/functions.php' ?>
<?php include "includes/languages/" . $_SESSION['lang'] . ".php"; ?>

<html>
<head>
  <title class="title"><?php
  $path= $_SERVER['REQUEST_URI'];

  $path = (pathinfo($path,PATHINFO_BASENAME));

  if ($path == 'index'){
    echo $lang['home'];
  }
  else if($path == 'tech_specs'){
    echo $lang['tech_specs'];
  }
  else if($path == 'pre_order'){
    echo $lang['pre_order'];

  } 
  else if($path == 'vipcard_ta'){
    echo $lang['termsandconditions'];

  }
  else{
    echo 'Telo';
  }
  ?></title>
  <link rel="icon" href="assets/images/iconn.png" data-src="assets/images/iconn.png">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="red">
  <?php
  if ($_SESSION['lang'] == 'en' || !isset($_SESSION['lang'])){  ?>
    <link rel="stylesheet"  href="assets/css/bootstrap.min.css">
    <link rel="stylesheet"  href="assets/css/main.css">

  <?php } ?>
  <?php if ($_SESSION['lang'] == 'ar') { ?>
    <link rel="stylesheet"  href="assets/css/bootstrap-ar.min.css">
    <link rel="stylesheet"  href="assets/css/main-ar.css">

  <?php } ?>
  <link rel="stylesheet"  href="assets/css/fonts.css">
  
  <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>
<body>


  <div class="container-fluid mynav nav1">
   <nav class="navbar navbar-expand-lg navbar-light">

    <a href="index" class="navbar-brand mobile-only">
          <img src="assets/images/logo.png">
        </a>
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#FrNav" aria-controls="FrNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse" id="FrNav">
       <ul class="navbar-nav mr-auto huge-only mt-2 mt-lg-0">
        <li class="nav-item">
          <a href="index">
          <img src="assets/images/logo.png">
        </a>
        </li>
      </ul>


      <ul class="navbar-nav arabic_icons">
          <?php if( $_SESSION['lang'] == "ar") { ?>
            <li class="nav-item">
              <a class="nav-link" href="?lang=en">
                <?php echo $lang['language'] ?>
              </a>
            </li>
          <?php } ?>

          <?php if( $_SESSION['lang'] == "en") { ?>
           <li class="nav-item">
              <a class="nav-link" href="?lang=ar">
                <b><?php echo $lang['language'] ?></b>
              </a>
            </li>
        <?php } ?>
   </ul>


    </div>
  </nav>
</div>



<div class="container-fluid nav2">
  <nav class="navbar navbar-expand-lg navbar-light mynav2">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#FrNav" aria-controls="FrNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse nav2padding" id="FrNav">
      

      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <img src="assets/images/legion.png" width="120" class="nav2-img">
        </li>
      </ul>

      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link font-white" href="tech_specs"><?php echo $lang['tech_specs'] ?></a>
        </li>

        <li class="nav-item">
          <?php if($_SERVER['REQUEST_URI'] == 'index' || $_SERVER['REQUEST_URI'] == '') { ?>
            <a class="nav-link font-white" href="#gallery"><?php echo $lang['gallery'] ?></a>
          <?php } else { ?>
            <a class="nav-link font-white" href="index#gallery"><?php echo $lang['gallery'] ?></a>
          <?php } ?>

        </li>

        <li class="nav-item" style="margin-top: -1.5%;">
          <a class="btn-pre-order btn-nav" href="<?php echo $lang['pre_order_link'] ?>" target="_blank">
           <?php echo $lang['pre_order'] ?>
         </a>
       </li>
     </ul>


   </div>
 </nav>
</div>
<main>
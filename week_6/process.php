<?php

foreach($_GET as $k => $v){
  if(is_array($v)){
    echo "<p>$k: ".implode(", ", $v)." </p>";
  }else{
    echo "<p>$k: $v </p>";
  }
}

foreach($_POST as $k => $v){
  if(is_array($v)){
    echo "<p>$k: ".implode(", ", $v)." </p>";
  }else{
    echo "<p>$k: $v </p>";
  }
  
}
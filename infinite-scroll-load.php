<?php
// Start index of list element to repsonse with
$leftIndex = $_GET['leftIndex'];
$itemsAmount = 19; // 19 items per request
$maxItemIndex = 30; // 150th item will be the last

if ($leftIndex >= $maxItemIndex) {
    // nothing to load
    exit();
}

$rightIndex = $leftIndex + $itemsAmount;
if ($rightIndex > $maxItemIndex) $rightIndex = $maxItemIndex;

for ($i = $rightIndex; $i >=$leftIndex ; $i--) {
   
     $precio = $i *2;

     echo'<li><a href="#" class="item-link item-content">
                                <div class="item-media"><span class="badge">'.$i.'/11</span></div>
                                <div class="item-inner"> 
                                  <div class="item-title">Combustible 95</div>
                                   <div class="item-after "><span class="color-gray">S/.'.$precio.'</span></div>
                                </div></a></li>';


}

?>
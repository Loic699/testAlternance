<?php
function fonction2($param) {
      for($i=0; $i<var1; $i++) {
        for($j=1; $j<(var1-$i); $j++) {
          if ($param[$j] > $param[$j+1] ) {
            $temp = $param[$j+1];
            $param[$j+1] = $param[$j];
            $param[$j] = $temp;
          }
        }
      }
      return $param;
    }
    ?>
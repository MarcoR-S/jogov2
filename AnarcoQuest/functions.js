function follow(){
    camera.position.y = principal.position.y
    camera.position.x = principal.position.x
  }
  

  function showHunger(){
    push()
     var barra, barraAtiva
     barra = createSprite(principal.x+80,principal.y -20, 150,20);
     barra.shapeColor = color("white")
     barra.visible = false

     barraAtiva= createSprite(barra.x, barra.y, 145,15)
     barraAtiva.shapeColor = color("#00FF00")
     barraAtiva.visible = false
     barraAtiva.depth = barra.depth+1
     barraAtiva.depth = principal.depth-1
     barra.depth = principal.depth-1
    pop()
     if(keyIsDown(81)){
        barra.visible = true
        barraAtiva.visible = true
     }

 }


  function walk(){

    if(keyIsDown(37)){
      principal.position.x = principal.position.x -8
    }
    if(keyIsDown(38)){
      principal.position.y = principal.position.y -8
    }
    if(keyIsDown(39)){
      principal.position.x = principal.position.x +8
    }
    if(keyIsDown(40)){
      principal.position.y = principal.position.y +8
    }
  
    //Se cansar:
  
  
  }


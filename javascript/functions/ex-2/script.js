function slowDown(velocity, printer){
    for (let i = velocity; i > 0; i -= 20){
        printer(i)
    }
    alert('A nave está parada em 0km/s. As comportas serão abertas.')
   }

   const message = valor => alert(`Velocidade atual da nave: ${valor}km/s`)
   slowDown(150, message)
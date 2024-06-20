const btn = document.querySelector(".search button")
btn.addEventListener('click', async () =>{
    const text = document.querySelector(".search input");
    const city = text.value;
    try {
        const response = await fetch('http://localhost:3000/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ city: city})
        });
    
        if (response.ok) {
            window.location.href = `http://localhost:3000/?city=${city}`;
        } else {
          console.error('Error actualizando el carrito:', response.statusText);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    

});

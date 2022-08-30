console.log("CLIENT SIDE RENDERED");



  const weatherForm = document.querySelector('form')
  const search = document.querySelector('input')
    const msg1=document.querySelector('#message-1')
    const msg2=document.querySelector('#message-2')

    const msg3=document.querySelector('#message-3')
    const img1=document.querySelector('#img1')
    msg1.textContent="Loading......."
    msg2.textContent="Text 2 Loading ...."
    msg3.textContent="Text 3 Loading ..........."
    



  console.log(weatherForm)
  weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log("Testing")
    const location = search.value;
    fetch("http://api.weatherstack.com/current?access_key=14bc2872132fd167bbbd077014d7f78b&query="+location)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    msg1.textContent=data.location.country;
    msg2.textContent=data.location.region;
    msg3.textContent=data.location.name;
    


  });
  })
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked');
    image_tag = document.createElement('img');
    image_tag = 'https://images-prod.dazeddigital.com/560/azure/dazed-prod/1060/8/1068776.jpg';
    document.body.appendChild(image_tag);
})
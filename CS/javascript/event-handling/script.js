document.getElementById('myButton').addEventListener('click',function() {
    alert('Button clicked');
    image_tag = document.createElement('img');
    image_tag.scr = 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg';
    document.body.appendChild(image_tag);
});

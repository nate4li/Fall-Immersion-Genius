document.getElementById('myButton').addEventListener('click', function(){
    alert('Button clicked')
    image_tag = document.createElement('img');
    image_tag.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sunset_2007-1.jpg/1200px-Sunset_2007-1.jpg';
    document.body.appendChild(image_tag);
});
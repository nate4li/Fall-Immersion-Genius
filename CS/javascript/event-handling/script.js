document.getElementById('myButton').addEventListener('click', function(){
    alert('Button clicked');
    image_tag = document.createElement('img');
    image_tag.src = 'https://townsquare.media/site/812/files/2024/09/attachment-playboi-carti-future.jpg?w=1200';
    document.body.appendChild(image_tag);
});

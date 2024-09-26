document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked');
    image_tag = document.createElement('img');
    image_tag.src = "https://m.media-amazon.com/images/S/pv-target-images/9e103a32ea9441929166954798ca14f8a6e913c040e09e9065d207b1bd31e116.jpg";
    document.body.appendChild(image_tag);
});

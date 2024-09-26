document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked');
    image_tag = document.createElement('img');
    image_tag.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwkjmzOBvkKgwBzV_nBKKZPjWyqu_4-NUIvg&s';
    document.body.appendChild(image_tag);
});
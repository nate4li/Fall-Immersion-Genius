// Event handling in JavaScript
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked');
    image_tag = document.createElement('img');
    image_tag.src = 'https://naruto-official.com/common/ogp/NTOS_OG-main.png';
    document.body.appendChild(image_tag);
});
 

document.getElementById('myButton').addEventListener('click', function(){
    alert('Button clicked');
    image_tag = document.createElement('img');
    image_tag.src = 'https://pbs.twimg.com/profile_images/1642336301948055552/ooPCfJEl_400x400.jpg';
    document.body.appendChild(image_tag)
});   
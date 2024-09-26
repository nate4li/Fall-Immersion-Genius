document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked');
    image_tag = document.createElement('img');
    image_tag.src = "https://cdn.vox-cdn.com/thumbor/Tvy4Qhmz2CpeVFzTZft-hs0ff3A=/0x0:720x508/1200x800/filters:focal(481x147:595x261)/cdn.vox-cdn.com/uploads/chorus_image/image/71394576/Lebron_Bald_Post.0.jpg";
    document.body.appendChild(image_tag);
});
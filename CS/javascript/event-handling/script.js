document.getElementById('myButton').addEventListener('click', function() {
    alert('button clicked');
    image_tag = document.createElement('img');
    image_tag.src = 'https://media.grassroots365.com/player-photo-upload/admin/2023-04-07-11-45-EBC-Bay-Area-2023-683.jpg';
    document.body.apprendChild(image_tag);
});

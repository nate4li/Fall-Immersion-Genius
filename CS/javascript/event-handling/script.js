document.getElementById('myButton').addEventListener('click', function() {
alert('Button clicked');
image_tag = document.createElement ( 'img');
image_tag.src = 'https://cdn.prod.website-files.com/5d7e8885cad5174a2fcb98d7/64933f98a477f02e36a282d1_5eddd950e5cf1ec1fa5c2d83_virtual-influencer-john-pork.jpeg';
document.body.appendChild(image_tag);
})
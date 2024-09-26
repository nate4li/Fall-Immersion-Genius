

document.getElementById("myButton").addEventListener('click', function() {
    alert("Button clicked");
    image_tag = document.createElement("img");
    image_tag.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1200px-Sunflower_from_Silesia2.jpg";
    document.body.appendChild(image_tag);
});
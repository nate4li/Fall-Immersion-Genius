function eventHandling() {
    // Your code here.
}
document.getElementById('myButton').addEventListener('click',function() {
    alert('Button clicked')
    image_tag = document.createElement('img');
    image_tag.src = 'https://i.kym-cdn.com/entries/icons/original/000/050/103/the_downfall_of_diddy.jpg';
    document.body.appendChild(image_tag);
})
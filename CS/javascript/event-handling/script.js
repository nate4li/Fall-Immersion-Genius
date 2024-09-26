
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked')
    image_tag = document.createElement('img');
    image_tag.src='https://cdn.vectorstock.com/i/500p/57/62/message-box-questions-for-any-purposes-mark-vector-39825762.jpg';
    document.body.appendChild(image_tag);
});
document.getElementById('myForm').addEventListener('sumbit', function(event) {
    event.preventDefault();
    alert('Form submitted');
    location.reload(true);
});


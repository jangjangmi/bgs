// ito naman para sa drop down menu
function toggleDropdown() {
    var dropdown = document.getElementById('dropdownCont');
    dropdown.style.display = dropdown.style.display === "none" || dropdown.style.display === "" ? "flex" : "none";
}

//ito yung para mag change yung background. gamit din ng local file para mag sae yung chosen na bg mo.
function changeBackground(image) {
    document.body.style.backgroundImage = "url('" + image + "')";
    localStorage.setItem('backgroundImage', image); // Save the image to localStorage
    document.getElementById('dropdownCont').style.display = 'none'; 
}

// checker ng mga backgroud na iloload, rather... mga nasave or napili mong bg.
window.onload = function() {
    var savedBackground = localStorage.getItem('backgroundImage');
    if (savedBackground) {
        document.body.style.backgroundImage = "url('" + savedBackground + "')";
    }
};

// ito yung ripple effect na ginawa ko sa last na code ko.
document.body.addEventListener('click', function(e) {

    var ripple = document.createElement('span');
    ripple.classList.add('ripple');

    ripple.style.width = ripple.style.height = '30px';
    ripple.style.left = (e.clientX - 15) + 'px'; 
    ripple.style.top = (e.clientY - 15) + 'px'; 

    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// ito yung fuction ng cursor image... paborito
document.addEventListener('mousemove', function(e) {
    var image = document.getElementById('followMe');
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    var imageWidth = image.offsetWidth / 2;
    var imageHeight = image.offsetHeight / 2;
    
    image.style.left = (mouseX - imageWidth) + 'px';
    image.style.top = (mouseY - imageHeight) + 'px';
});
document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelector('.alt-hisse');
    var menuButton = document.querySelector('.navbar ul li:nth-child(3) i');

    menu.style.display = "none"; 

    menuButton.addEventListener('click', function(event) {
        event.stopPropagation(); 

        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    });

    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && event.target !== menuButton) {
            menu.style.display = "none";
        }
    });
});
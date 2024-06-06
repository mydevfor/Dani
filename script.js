function OpenNav() {
    var popoutElement = document.getElementById('popout');
    if (popoutElement) {
        popoutElement.style.height = '100vh';
        popoutElement.style.width = '60%';
        popoutElement.style.transition = '0.5s linear'; // Corrected typo
        popoutElement.style.opacity = '1'; // Ensure fully opaque
        popoutElement.style.visibility = 'visible'; // Use visibility for transitionable show/hide
        popoutElement.style.paddingBottom = '13px';
        popoutElement.style.display = 'block'; // Ensure the element is displayed
    }
}

function closeNav() {
    var popoutElement = document.getElementById('popout');
    if (popoutElement) {
        popoutElement.style.height = '0';
        popoutElement.style.width = '0';
        popoutElement.style.transition = '0.5s linear'; // Consistent transition
        popoutElement.style.opacity = '0'; // Start fading out
        setTimeout(function () {
            popoutElement.style.visibility = 'hidden'; // Hide after transition
            popoutElement.style.display = 'none'; // Optionally, revert to none after transition for cleanliness
        }, 500); // Match this timeout with your transition duration
    }
}
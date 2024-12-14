document.addEventListener("DOMContentLoaded", function () {
    const splash = document.getElementById('splash');
    const mainContent = document.getElementById('main-content');

    // Check if the splash screen has been shown already using sessionStorage
    if (!sessionStorage.getItem('splashShown')) {
        // Show splash screen and hide main content
        mainContent.style.display = 'none';
        splash.style.display = 'flex';

        // Set a timeout to hide splash screen after 2 seconds (2000 milliseconds)
        setTimeout(function () {
            // Hide the splash screen by adding the 'hidden' class
            splash.classList.add('hidden');

            // Display the main content by adding the 'visible' class
            mainContent.style.display = 'block';
            mainContent.classList.add('visible');

            // Restore scrolling to the page
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';

            // Mark that the splash screen has been shown
            sessionStorage.setItem('splashShown', 'true');
        }, 2000); // 2000 ms = 2 seconds
    } else {
        // If the splash screen has been shown, directly show the main content
        splash.style.display = 'none';
        mainContent.style.display = 'block';
        mainContent.classList.add('visible');

        // Restore scrolling to the page
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
    }
});

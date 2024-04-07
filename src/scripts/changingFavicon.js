// Function to set the favicon based on the system theme
function setFaviconBySystemTheme() {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  function updateFavicon(e) {
    const isDarkMode = e.matches;
    
    setFavicon(isDarkMode);
  }
  
  darkModeMediaQuery.addListener(updateFavicon);
  
  // Initial call to set the favicon based on the system theme
  updateFavicon(darkModeMediaQuery);
}

// Function to set the favicon based on the theme
function setFavicon(isDarkMode) {
  const favicon = document.querySelector('link[rel="icon"]');
  
  if (isDarkMode) {
    favicon.href = 'dark-favicon.svg';
  } else {
    favicon.href = 'light-favicon.svg';
  }
}

// Call the setFaviconBySystemTheme function to set the favicon based on the system theme
setFaviconBySystemTheme();

// Change the color of the headline on the homepage/index
document.addEventListener('DOMContentLoaded', function () {
  const headline = document.querySelector('h1');
  if (headline) {
    headline.style.color = '#a3a190'; // Change headline color to orange
  }
});

// Loading animation
document.addEventListener('DOMContentLoaded', function () {
  const loadingDiv = document.createElement('div');
  loadingDiv.id = 'loading-animation';
  loadingDiv.style.position = 'fixed';
  loadingDiv.style.top = '0';
  loadingDiv.style.left = '0';
  loadingDiv.style.width = '100%';
  loadingDiv.style.height = '100%';
  loadingDiv.style.backgroundColor = '#004d99';
  loadingDiv.style.color = 'white';
  loadingDiv.style.display = 'flex';
  loadingDiv.style.flexDirection = 'column';
  loadingDiv.style.justifyContent = 'center';
  loadingDiv.style.alignItems = 'center';
  loadingDiv.style.fontSize = '36px';
  loadingDiv.style.fontFamily = 'Bebas Neue, sans-serif';

  // Add the GIF above the spinning loader
  const gifImage = document.createElement('img');
  gifImage.src = 'https://media.tenor.com/-ufrqpl5cp0AAAAM/test.gif';
  gifImage.style.width = '150px'; // Adjust the size of the GIF
  gifImage.style.marginBottom = '20px';

  const spinningLoader = document.createElement('div');
  spinningLoader.style.border = '8px solid #f3f3f3'; // Light gray border
  spinningLoader.style.borderTop = '8px solid #ff69b4'; // Pink spinning color
  spinningLoader.style.borderRadius = '50%';
  spinningLoader.style.width = '50px';
  spinningLoader.style.height = '50px';
  spinningLoader.style.animation = 'spin 1s linear infinite';
  spinningLoader.style.marginBottom = '20px';

  const loadingText = document.createElement('div');
  loadingText.textContent = "Yrre's Website";

  loadingDiv.appendChild(gifImage); // Append the GIF
  loadingDiv.appendChild(spinningLoader);
  loadingDiv.appendChild(loadingText);
  document.body.appendChild(loadingDiv);

  // Remove the loading animation after 0.5 second
  setTimeout(() => {
    loadingDiv.style.transition = 'opacity 0.5s';
    loadingDiv.style.opacity = '0';
    setTimeout(() => {
      loadingDiv.remove();
    }, 500);
  }, 500);
});

// Add spinning animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

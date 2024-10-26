document.addEventListener('DOMContentLoaded', function () {
  var words = ['I\'m a Web Developer.'];
  var currentWordIndex = 0;
  var offset = 0;
  var forwards = true;
  var skipCount = 0;
  var skipDelay = 15;
  var speed = 140;
  var lastTime = 0;
  var loopOnce = false;  // Flag to stop after the first iteration

  function wordFlick(time) {
      if (loopOnce) return;  // Stop the loop when the flag is set
      if (time - lastTime < speed) {
          requestAnimationFrame(wordFlick);
          return;
      }
      lastTime = time;
      var currentWord = words[currentWordIndex];
      if (forwards) {
          if (offset >= currentWord.length) {
              skipCount++;
              if (skipCount === skipDelay) {
                  loopOnce = true;  // Set flag to stop the loop
                  return;  // Exit before erasing begins
              }
          }
      } 
      var part = currentWord.substr(0, offset);
      offset += forwards ? 1 : -1;
      var wordElement = document.querySelector('.word');
      if (wordElement) {
          wordElement.textContent = part;
      }
      requestAnimationFrame(wordFlick);
  }

  // Add a delay of 2 seconds (2000 milliseconds) before starting the animation
  setTimeout(() => {
      requestAnimationFrame(wordFlick);
  }, 3000);  // Change to 3000 for 3 seconds delay
});
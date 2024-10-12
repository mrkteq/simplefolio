var words = ['Web Developer', 'Frontend Web Developer'];
var currentWordIndex = 0;
var offset = 0;
var forwards = true;
var skipCount = 0;
var skipDelay = 15;
var speed = 140;

function wordFlick() {
  setInterval(function () {
    var currentWord = words[currentWordIndex];

    if (forwards) {
      if (offset >= currentWord.length) {
        ++skipCount;
        if (skipCount === skipDelay) {
          forwards = false;
          skipCount = 0;
        }
      }
    } else {
      if (offset === 0) {
        forwards = true;
        currentWordIndex = (currentWordIndex + 1) % words.length;
      }
    }

    var part = currentWord.substr(0, offset);
    offset += forwards ? 1 : -1;

    var wordElement = document.querySelector('.word');
    if (wordElement) {
      wordElement.textContent = part;
    }
  }, speed);
}

document.addEventListener('DOMContentLoaded', function () {
  wordFlick();
});

(function() {
  const words = [
    { word: "hello", meaning: "你好", type: "int." },
    { word: "world", meaning: "世界", type: "n." },
    { word: "pop", meaning: "弹", type: "v." },
    { word: "word", meaning: "词", type: "n." }
  ];

  let wordHistory = [];
  let historyIndex = -1;
  let currentWordData = null;
  let nextWordIndex = 0; 
  const audioApi = 'https://dict.youdao.com/dictvoice?type=0&audio=';

  function getNextSequenceWord() {
    const word = words[nextWordIndex];
    nextWordIndex = (nextWordIndex + 1) % words.length;
    return word;
  }

  function playWordAudio(word) {
    if (!word) return;
    const audioUrl = audioApi + encodeURIComponent(word);
    const audio = new Audio(audioUrl);
    audio.play().catch(error => {
      console.error(error);
    });
  }

  function showWordEffect(x, y, direction) {
    const oldElements = document.querySelectorAll('.popword-demo-effect');
    oldElements.forEach(el => el.remove());

    if (direction === 'prev') {
      if (historyIndex > 0) {
        historyIndex--;
        currentWordData = wordHistory[historyIndex];
      } else {
        return; 
      }
    } else {
      if (historyIndex < wordHistory.length - 1) {
        historyIndex++;
        currentWordData = wordHistory[historyIndex];
      } else {
        currentWordData = getNextSequenceWord();
        wordHistory.push(currentWordData);
        historyIndex++;
      }
    }

    if (!currentWordData) return;

    playWordAudio(currentWordData.word);

    const textToShow = `${currentWordData.word} (${currentWordData.type})\n${currentWordData.meaning}`;

    createFloatingElement(textToShow, x, y);
  }

  function createFloatingElement(text, x, y) {
    const element = document.createElement('div');
    element.className = 'popword-demo-effect';
    element.textContent = text; 
    
    // 删除了 opacity 和 transition 属性，去掉了所有特效
    element.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      z-index: 999999;
      pointer-events: none;
      font-size: 16px;
      font-weight: bold;
      color: #333;
      background-color: rgba(255, 255, 255, 0.9);
      padding: 8px 12px;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      font-family: Arial, sans-serif;
      white-space: pre-line;
      text-align: center;
    `;

    document.body.appendChild(element);

    setTimeout(() => {
      element.remove();
    }, 2000);
  }

  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
    showWordEffect(e.clientX, e.clientY, 'next');
  });

  document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
    e.preventDefault();
    showWordEffect(e.clientX, e.clientY, 'prev');
  });

})();
const keyValues = [
  {
    code: 'Backquote',
    value: '`',
    additional: '~',
    ru: 'ё',
    isNewRow: true,
  },
  {
    code: 'Digit1',
    value: '1',
    additional: '!',
  },
  {
    code: 'Digit2',
    value: '2',
    additional: '@',
  },
  {
    code: 'Digit3',
    value: '3',
    additional: '#',
  },
  {
    code: 'Digit4',
    value: '4',
    additional: '$',
  },
  {
    code: 'Digit5',
    value: '5',
    additional: '%',
  },
  {
    code: 'Digit6',
    value: '6',
    additional: '^',
  },
  {
    code: 'Digit7',
    value: '7',
    additional: '&',
  },
  {
    code: 'Digit8',
    value: '8',
    additional: '*',
  },
  {
    code: 'Digit9',
    value: '9',
    additional: ')',
  },
  {
    code: 'Digit0',
    value: '0',
    additional: ')',
  },
  {
    code: 'Minus',
    value: '-',
    additional: '_',
  },
  {
    code: 'Equal',
    value: '=',
    additional: '+',
  },
  {
    code: 'Backspace',
    value: 'Backspace',
    isControl: true,
    isLarge: true,
  },
  {
    code: 'Tab',
    value: 'Tab',
    isControl: true,
    isNewRow: true,
  },
  {
    value: 'q',
    ru: 'й',
  },
  {
    value: 'w',
    ru: 'ц',
  },
  {
    value: 'e',
    ru: 'у',
  },
  {
    value: 'r',
    ru: 'к',
  },
  {
    value: 't',
    ru: 'е',
  },
  {
    value: 'y',
    ru: 'н',
  },
  {
    value: 'u',
    ru: 'г',
  },
  {
    value: 'i',
    ru: 'ш',
  },
  {
    value: 'o',
    ru: 'щ',
  },
  {
    value: 'p',
    ru: 'з',
  },
  {
    value: '[',
    ru: 'х',
  },
  {
    value: ']',
    ru: 'ъ',
  },
  {
    code: 'Backslash',
    value: '\\',
  },
  {
    value: 'Del',
    code: 'Delete',
    isControl: true,
  },
  {
    value: 'CapsLock',
    isControl: true,
    isNewRow: true,
    isLarge: true,
  },
  {
    value: 'a',
    ru: 'ф',
  },
  {
    value: 's',
    ru: 'ы',
  },
  {
    value: 'd',
    ru: 'в',
  },
  {
    value: 'f',
    ru: 'а',
  },
  {
    value: 'g',
    ru: 'п',
  },
  {
    value: 'h',
    ru: 'р',
  },
  {
    value: 'j',
    ru: 'о',
  },
  {
    value: 'k',
    ru: 'л',
  },
  {
    value: 'l',
    ru: 'д',
  },
  {
    value: ';',
    ru: 'ж',
  },
  {
    value: "'",
    ru: 'э',
  },
  {
    value: 'Enter',
    code: 'Enter',
    isControl: true,
    isLarge: true,
  },
  {
    value: 'Shift',
    code: 'ShiftLeft',
    isControl: true,
    isNewRow: true,
    isLarge: true,
  },
  {
    value: 'z',
    ru: 'я',
  },
  {
    value: 'x',
    ru: 'ч',
  },
  {
    value: 'c',
    ru: 'с',
  },
  {
    value: 'v',
    ru: 'м',
  },
  {
    value: 'b',
    ru: 'и',
  },
  {
    value: 'n',
    ru: 'т',
  },
  {
    value: 'm',
    ru: 'ь',
  },
  {
    value: ',',
    ru: 'б',
  },
  {
    value: '.',
    ru: 'ю',
  },
  {
    code: 'Slash',
    value: '/',
    ru: '.',
  },
  {
    value: '▲',
    code: 'ArrowUp',
    isControl: true,
  },
  {
    value: 'Shift',
    code: 'ShiftRight',
    isControl: true,
    isLarge: true,
  },
  {
    value: 'Ctrl',
    code: 'ControlLeft',
    isControl: true,
    isNewRow: true,
  },
  {
    value: 'Win',
    code: 'MetaLeft',
    isControl: true,
  },
  {
    value: 'Alt',
    code: 'AltLeft',
    isControl: true,
  },
  {
    value: ' ',
    isLarge: true,
  },
  {
    value: 'Alt',
    code: 'AltRight',
    isControl: true,
  },
  {
    value: '◄',
    code: 'ArrowLeft',
    isControl: true,
  },
  {
    value: '▼',
    code: 'ArrowDown',
    isControl: true,
  },
  {
    value: '►',
    code: 'ArrowRight',
    isControl: true,
  },
  {
    value: 'Ctrl',
    code: 'ControlRight',
    isControl: true,
  },
];

const body = document.querySelector('body');

const container = document.createElement('div');
container.className = 'container';
body.prepend(container);

const textArea = document.createElement('textarea');
textArea.className = 'output';
textArea.rows = 10;
container.append(textArea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
container.append(keyboard);
let currentRow = null;

let isCaps = false;

const getLang = () => localStorage.getItem('lang');

const drawKeyboard = () => {
  const lang = getLang();
  keyValues.forEach((k) => {
    if (k.isNewRow) {
      const row = document.createElement('div');
      row.className = 'keyboard__row';
      currentRow = row;
      keyboard.append(row);
    }
    const el = document.createElement('div');
    el.className = `key key-${k.isControl ? 'control' : 'default'} ${
      k.isLarge ? 'key-m' : ''
    }`;
    el.setAttribute('data-value', k.value);
    if (k.code) {
      el.setAttribute('data-code', k.code);
    }
    if (k.ru) {
      el.setAttribute('data-ru', k.ru);
    }
    if (k.additional) {
      el.setAttribute('data-additional', k.additional);
    }
    el.textContent = lang === 'ru' && k.ru ? k.ru : k.value;

    currentRow.append(el);
  });
};

drawKeyboard();

const keys = keyboard.querySelectorAll('.key');

const caps = keyboard.querySelector('[data-value = "CapsLock"]');

const isChar = (ind) => keys[ind].dataset.value.length === 1;

const isAdditional = (ind) => keys[ind].dataset.additional && !(getLang() === 'ru' && keys[ind].dataset.ru);

const changeText = (text, num = 0, offset = 0) => {
  const start = textArea.selectionStart + offset;
  const str = textArea.textContent;
  textArea.textContent = str.slice(0, start - num) + text + str.slice(start);
  textArea.selectionStart = start + text.length - num;
};

const addText = (text) => {
  changeText(text);
};

const deleteText = (num, offset = 0) => {
  textArea.focus();
  changeText('', num, offset);
};

const setDefaultKey = (ind) => {
  if (isChar(ind)) {
    keys[ind].textContent = isCaps
      ? keys[ind].textContent.toUpperCase()
      : keys[ind].textContent.toLowerCase();
  }
};

const switchLang = () => {
  const lang = getLang();
  localStorage.setItem('lang', lang === 'ru' ? 'en' : 'ru');
};

const switchKeys = () => {
  const lang = getLang();
  for (let i = 0; i < keys.length; i += 1) {
    if (lang === 'en') {
      keys[i].textContent = isCaps && isChar(i)
        ? keys[i].dataset.value.toUpperCase()
        : keys[i].dataset.value;
    } else if (keys[i].dataset[lang]) {
      keys[i].textContent = isCaps && isChar(i)
        ? keys[i].dataset[lang].toUpperCase()
        : keys[i].dataset[lang];
    }
  }
};

const onCapsDown = () => {
  isCaps = !isCaps;
  if (!isCaps && caps.classList.contains('key_active')) {
    caps.classList.remove('key_active');
  } else {
    caps.classList.add('key_active');
  }
  for (let i = 0; i < keys.length; i += 1) {
    setDefaultKey(i);
  }
};

const onShiftDown = () => {
  for (let i = 0; i < keys.length; i += 1) {
    if (isChar(i)) {
      keys[i].textContent = isCaps
        ? keys[i].textContent.toLowerCase()
        : keys[i].textContent.toUpperCase();
    }
    if (isAdditional(i)) {
      keys[i].textContent = keys[i].dataset.additional;
    }
  }
};

const onShiftUp = () => {
  for (let i = 0; i < keys.length; i += 1) {
    setDefaultKey(i);
    if (isAdditional(i)) {
      keys[i].textContent = keys[i].dataset.value;
    }
  }
};

const onKeydown = (e) => {
  if (e.key === 'Backspace') {
    deleteText(1);
  } else if (e.key === 'Enter') {
    addText('\n');
  } else if (e.key === 'Delete') {
    deleteText(1, 1);
  } else if (e.key === 'Tab') {
    addText('    ');
  } else if (e.key === 'CapsLock') {
    onCapsDown();
  }
  if (e.shiftKey) {
    onShiftDown();
  }
  if (e.ctrlKey && e.altKey) {
    switchLang();
    switchKeys();
  }
  keys.forEach((k) => {
    if (
      k.dataset.code === e.code
      || (!k.dataset.code && k.dataset.value === e.key.toLowerCase())
    ) {
      if (k.dataset.code === 'CapsLock') {
        if (isCaps) {
          k.classList.add('key_active');
        } else {
          k.classList.remove('key_active');
        }
        return;
      }
      if (!k.classList.contains('key_active')) {
        k.classList.add('key_active');
      }
      if (k.textContent.length === 1) {
        addText(k.textContent);
      }
    }
  });
  // textArea.focus();
  // const keyboardEvent = document.createEvent('KeyboardEvent');
};

const onKeyup = (e) => {
  if (!e.shiftKey) {
    onShiftUp();
  }
  if (e.key === 'CapsLock') return;
  keys.forEach((k) => {
    if (
      k.dataset.code === e.code
      || (
        !k.dataset.code
        && k.dataset.value === e.key.toLowerCase()
        && k.classList.contains('key_active'))
    ) {
      k.classList.remove('key_active');
    }
  });
};

window.addEventListener('keydown', (e) => {
  if (e.key !== 'F5') {
    e.preventDefault();
  }
  onKeydown(e);
});

window.addEventListener('keyup', (e) => {
  onKeyup(e);
});

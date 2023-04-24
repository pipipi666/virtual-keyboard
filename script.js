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

const drawKeyboard = () => {
  const lang = localStorage.getItem('lang');
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
    if (lang === 'ru' && k.ru) {
      el.textContent = k.ru;
    } else {
      el.textContent = k.value;
    }

    currentRow.append(el);
  });
};

drawKeyboard();

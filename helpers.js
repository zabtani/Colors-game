const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomColor = (colors) => {
  return colors[randomInt(0, colors.length - 1)];
};

const colorString = (string, colors) => {
  let coloredName = '';
  let lastCharColor = '';
  for (let i = 0; i <= string.length; i++) {
    let color = randomColor(colors);
    if (color === lastCharColor) {
      i--;
    } else {
      let charColor = color;
      let char = string.charAt(i);
      coloredName += `<span style="color:${charColor}">${char}</span>`;
      lastCharColor = color;
    }
  }
  return coloredName;
};

const inputValidation = (inputValue) => {
  let result;
  const errors = {
    emptyName: 'please enter name',
    shortName: 'name too short',
    invalidName: 'invalid name',
  };

  const allowedChars = new RegExp('[^A-Za-z0-9]');
  result = allowedChars.exec(inputValue)
    ? errors.invalidName
    : inputValue === ''
    ? errors.emptyName
    : inputValue.length < 3
    ? errors.shortName
    : 'valid';

  return result === 'valid' ? false : result;
};

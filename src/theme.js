export const colours = {
  black: '#000000',
  white: '#FFFFFF',
  themePrimary: '#FF1AA8',
  themeAccentPrimary: '#FFF4FB',
};

export const gradient = `linear-gradient(${colours.themeDarkSecondary}, ${colours.themeDarkSecondary})`;

export const rgba = (colour, alpha) => {
  const colourValues = colour.substring(1);
  const red = parseInt(colourValues.substring(0, 2), 16);
  const green = parseInt(colourValues.substring(2, 4), 16);
  const blue = parseInt(colourValues.substring(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

export const weight = {
  extraLight: '100',
  light: '200',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
};

export default {
  colours,
  gradient,
  rgba,
  weight,
};

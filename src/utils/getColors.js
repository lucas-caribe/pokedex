function getColors(colors) {
  if (typeof colors === 'object') {
    return [colors[0], colors[1]];
  }

  return [colors];
}

export default getColors;

function makeGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color1} 50%, ${color2} 50%)`;
}

export default makeGradient;

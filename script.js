const socialIcons = document.querySelector('.social--link-icon.facebook');
console.log(socialIcons);

const newSource = function (icon) {
  const path = icon.src;
  const rest = path.slice(-4);
  const newPath = path.slice(0, -4) + '-white' + rest;
  return newPath;
};
const originalSource = function (icon) {
  const path = icon.src;
  const rest = path.slice(-4);
  const newPath = path.slice(0, -10) + rest;
  return newPath;
};

socialIcons.addEventListener('mouseenter', () => {
  socialIcons.src = newSource(socialIcons);
});
socialIcons.addEventListener('mouseleave', () => {
  socialIcons.src = originalSource(socialIcons);
});

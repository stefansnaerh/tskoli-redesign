const generateRandomCSSGradient = () => {
  var hexValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
  ];

  function getColor() {
    let color = "";
    for (var i = 0; i < 6; i++) {
      var x = Math.round(Math.random() * 14);
      color += hexValues[x];
    }
    return color;
  }

  var newColor1 = getColor();
  var newColor2 = getColor();
  var angle = Math.round(Math.random() * 360);

  var gradient =
    "linear-gradient(" + angle + "deg, #" + newColor1 + ", #" + newColor2 + ")";

  return gradient;
};

export default generateRandomCSSGradient;

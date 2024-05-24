function updateColor() {
  const hue = document.getElementById("colorHue").value;
  const saturation = document.getElementById("colorSat").value;
  const lightness = document.getElementById("colorBright").value;

  document.documentElement.style.setProperty("--hue-color", hue);
  document.documentElement.style.setProperty(
    "--saturation-color",
    saturation + "%"
  );
  document.documentElement.style.setProperty(
    "--lightness-color",
    lightness + "%"
  );

  document.getElementById("hueValue").innerText = hue;
  document.getElementById("satValue").innerText = saturation;
  document.getElementById("brightValue").innerText = lightness;

  // Call the function to update the text color
  updateTextColor(hue, saturation, lightness);
}

function updateTextColor(hue, saturation, lightness) {
  // Convert HSL to RGB
  let r, g, b;

  // Adjust the hue, saturation, and lightness values
  hue = hue / 360; // Hue is expected to be in the range [0, 1]
  saturation = saturation / 100; // Saturation is expected to be in the range [0, 1]
  lightness = lightness / 100; // Lightness is expected to be in the range [0, 1]

  if (saturation == 0) {
    r = g = b = lightness; // achromatic
  } else {
    const hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q =
      lightness < 0.5
        ? lightness * (1 + saturation)
        : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    r = hue2rgb(p, q, hue + 1 / 3);
    g = hue2rgb(p, q, hue);
    b = hue2rgb(p, q, hue - 1 / 3);
  }

  // Calculate the relative luminance
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  console.log(luminance);

  // Set the text color based on the luminance
  document.documentElement.style.setProperty(
    "--text-color",
    luminance > 0.5 ? "#1a1a1a" : "#fcfcfc"
  );
}

window.onload = updateColor;

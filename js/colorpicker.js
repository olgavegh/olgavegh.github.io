const colorpickerElement = document.getElementById("colorPicker");

colorpickerElement.addEventListener("input", function () {
  // Retrieve the selected color
  const selectedColor = colorpickerElement.value;
  document.documentElement.style.setProperty("--dynamic-color", selectedColor);

  const accentColor = generateAccentColor(selectedColor);
  document.documentElement.style.setProperty("--accent-color", accentColor);

  const isLight = isColorLight(selectedColor);
  const contrastMode = isLight ? "#222" : "#fff";

  document.documentElement.style.setProperty("--contrast-color", contrastMode);
});

function isColorLight(color) {
  const hslcolor = hexToHsl(color);
  return hslcolor.l > 50;
}

function generateAccentColor(brandColor) {
  // Convert brand color to HSL (Hue, Saturation, Lightness)
  const hsl = hexToHsl(brandColor);

  // Adjust hue, saturation, or lightness to generate accent color
  const accentHue = (hsl.h + 180) % 360; // Rotate hue by 180 degrees
  const accentSaturation = Math.min(100, hsl.s * 1.2); // Increase saturation by 20%
  const accentLightness = Math.min(100, hsl.l * 1.2); // Increase lightness by 20%

  const accentColor = `hsl(${accentHue}, ${accentSaturation}%, ${accentLightness}%)`;
  return accentColor;
}

/**
 * Converts hexadecimal color value to HSL (Hue, Saturation, Lightness) color space.
 * @param {string} hex - The hexadecimal color value (e.g., "#RRGGBB").
 * @returns {number{}} - An object containing the HSL values [h, s, l].
 */
function hexToHsl(hex) {
  // Remove "#" if present
  hex = hex.replace("#", "");

  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  // Find min and max values
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  // Calculate lightness
  let l = (max + min) / 2;

  // Calculate saturation
  let s = 0;
  if (max !== min) {
    s = l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
  }

  // Calculate hue
  let h;
  if (max === min) {
    h = 0; // achromatic (no hue)
  } else {
    const delta = max - min;
    switch (max) {
      case r:
        h = (g - b) / delta + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / delta + 2;
        break;
      case b:
        h = (r - g) / delta + 4;
        break;
    }
    h /= 6;
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
}

// Description: Rotates characters within paragraphs in a circular pattern
// around the center of each paragraph, with rotation angles determined
// by character position and paragraph index.
const arcParagraphs = document.querySelectorAll(".arc-text");

// When the window is fully loaded, execute this function
window.onload = () => {
  // Iterate over each <p> element
  arcParagraphs.forEach((paragraph, index) => {
    // Calculate the rotation angle increment based on the paragraph's position
    const n = index + 1; // Add 1 to convert from zero-based index to one-based index

    // Split the text content into individual characters and map them to span elements with rotated styles
    paragraph.innerHTML = paragraph.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * (n * 5)}deg)">${char}</span>`
      )
      .join("");
  });
};

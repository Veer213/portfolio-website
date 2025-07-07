const lines = [
  "Creative Designer. Coder. Chess PLayer.",
  "I am a Problem solver and a high school student."
];

const el = document.getElementById("typewriter");

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  const currentLine = lines[lineIndex];
  if (charIndex < currentLine.length) {
    el.textContent += currentLine.charAt(charIndex);
    charIndex++;
    setTimeout(typeLine, 50);
  } else {
    setTimeout(() => {
      deleteLine();
    }, 2000);
  }
}

function deleteLine() {
  if (charIndex > 0) {
    el.textContent = el.textContent.slice(0, -1);
    charIndex--;
    setTimeout(deleteLine, 30);
  } else {
    lineIndex = (lineIndex + 1) % lines.length;
    setTimeout(typeLine, 300);
  }
}

typeLine();

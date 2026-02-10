// Array of poems (expand to 50 entries)
const poems = [
  "I have not yet held your hand,\nNor walked with you across the sand.\nBut in my heart, you’re already near,\nA gentle voice I long to hear.",
  "I dream of you in quiet nights,\nA star that shines with endless light.\nThough I have not yet seen your face,\nI feel your warmth, your gentle grace.",
  "We stand apart, two souls unknown,\nYet love has found a way to grow.\nNo stories shared, no past to bind,\nBut still you linger in my mind."
  // … continue until 50 poems …
];

// Make sure the DOM is loaded before injecting poems
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("poem-container");

  if (container) {
    poems.forEach((poem, index) => {
      const div = document.createElement("div");
      div.className = "poem card"; // styled as modern card
      div.innerHTML = `<h2>Poem ${index + 1}</h2><p>${poem.replace(/\n/g, "<br>")}</p>`;
      container.appendChild(div);
    });
  }
});

// Show a random poem in a modal-style alert
function showRandomPoem() {
  const randomIndex = Math.floor(Math.random() * poems.length);
  alert("Poem " + (randomIndex + 1) + ":\n\n" + poems[randomIndex]);
}

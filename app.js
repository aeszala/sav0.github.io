function alertButton() {
    alert("Slay queen")
}

const pupils = document.querySelectorAll(".eye .pupil");
const eyesContainer = document.querySelector(".eyes"); // The container holding both eyes

window.addEventListener("mousemove", (e) => {
  // Get the bounding box of the container
  const rect = eyesContainer.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2; // Midpoint of the container (horizontal)
  const centerY = rect.top + rect.height / 2; // Midpoint of the container (vertical)

  // Calculate the vector from the center to the mouse cursor
  const dx = e.clientX - centerX;
  const dy = e.clientY - centerY;

  // Limit the maximum distance the pupils can move
  const maxDistance = 25; // Maximum distance the pupil can move
  const distance = Math.sqrt(dx * dx + dy * dy);
  const clampedDistance = Math.min(distance, maxDistance);

  // Calculate the clamped position
  const angle = Math.atan2(dy, dx);
  const x = Math.cos(angle) * clampedDistance + "px";
  const y = Math.sin(angle) * clampedDistance + "px";

  // Apply the transformation to all pupils
  pupils.forEach((pupil) => {
    pupil.style.transform = `translate3d(${x}, ${y}, 0)`;
  });
});

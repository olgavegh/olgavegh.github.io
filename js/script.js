const rolesElement = document.getElementById("typed-text");
const cursorElement = document.getElementById("cursor");
const rolesList = [
  "Szia, Olga vagyok,",
  "Hi, I am Olga,",
  "Привет, я Ольга,",
  "Hallo, ich bin Olga",
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function updateRole() {
  const currentRole = rolesList[roleIndex];
  rolesElement.innerHTML = currentRole.substring(0, charIndex);

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  if (charIndex === currentRole.length + 1) {
    isDeleting = true;
  }

  if (charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % rolesList.length;
  }
}

// Initial role
updateRole();

// Update role every 100 milliseconds (adjust as needed)
setInterval(updateRole, 120);

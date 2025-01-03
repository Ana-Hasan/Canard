const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

document.addEventListener("DOMContentLoaded", () => {
  const folders = document.querySelectorAll(".folder");
  const popupPanel = document.getElementById("popup-panel");
  const closePopup = document.getElementById("close-popup");

  folders.forEach(folder => {
      folder.addEventListener("click", (e) => {
          e.preventDefault();
          popupPanel.classList.remove("hidden");
          const folderName = folder.getAttribute("href");
          popupPanel.querySelector("p").textContent = `You clicked on ${folderName}`;
      });
  });

  closePopup.addEventListener("click", () => {
      popupPanel.classList.add("hidden");
  });

  popupPanel.addEventListener("click", (e) => {
      if (e.target === popupPanel) {
          popupPanel.classList.add("hidden");
      }
  });
});
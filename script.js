
document.addEventListener("DOMContentLoaded", () => {
  
  const button = document.createElement("button");
  button.textContent = "Click Me!";
  button.style.margin = "20px";
  button.style.padding = "10px 20px";
  button.style.backgroundColor = "#4CAF50";
  button.style.color = "white";
  button.style.border = "none";
  button.style.cursor = "pointer";
  button.style.borderRadius = "5px";

  
  const section = document.querySelector("section");
  section.appendChild(button);


  button.addEventListener("click", () => {
    alert("Hello! You clicked the button.");
  });
});
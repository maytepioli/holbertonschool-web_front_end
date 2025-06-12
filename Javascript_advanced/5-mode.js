function changeMode(size, weight, transform, background, color){ return function() {
    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main(){
    const spooky = changeMode(9, "bold", "uppercase", "green", "pink");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    const paragraph = document.createElement("p");
    paragraph.textContent = "Welcome Holberton!";
    document.body.appendChild(paragraph);

     const button_spooky = document.createElement("button");
  button_spooky.textContent = "Spooky";
  button_spooky.addEventListener("click", spooky);
  document.body.appendChild(button_spooky);

  const button_Dark = document.createElement("button");
  button_Dark.textContent = "Dark mode";
  button_Dark.addEventListener("click", darkMode);
  document.body.appendChild(button_Dark);

  const button_Scream = document.createElement("button");
  button_Scream.textContent = "Scream mode";
  button_Scream.addEventListener("click", screamMode);
  document.body.appendChild(button_Scream);
}

main();
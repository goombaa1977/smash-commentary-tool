const p1 = document.getElementById("player1");
const p2 = document.getElementById("player2");

Object.keys(characters).forEach(char => {
    p1.innerHTML += `<option>${char}</option>`;
    p2.innerHTML += `<option>${char}</option>`;
});

function render(character, panelId) {
    const c = characters[character];

    document.getElementById(panelId).innerHTML = `
        <h2>${character}</h2>

        <img src="images/${c.image}" alt="${character}">

        <p><b>Weight:</b> ${c.weight}</p>
        <p><b>Weight Class:</b> ${c.weightClass}</p>
        <p><b>Archetype:</b> ${c.archetype}</p>

        <h3>Bread & Butter Combos</h3>
        <ul>
            ${c.combos.map(combo => `<li>${combo}</li>`).join("")}
        </ul>

        <h3>Kill Options</h3>
        <ul>
            ${c.killConfirms.map(kill => `<li>${kill}</li>`).join("")}
        </ul>

        <h3>Out of Shield</h3>
        <ul>
            ${c.oos.map(oos => `<li>${oos}</li>`).join("")}
        </ul>

        <h3>Commentary Notes</h3>
        <ul>
            ${c.notes.map(note => `<li>${note}</li>`).join("")}
        </ul>
    `;
}

p1.addEventListener("change", () => {
    render(p1.value, "leftPanel");
});

p2.addEventListener("change", () => {
    render(p2.value, "rightPanel");
});

p1.selectedIndex = 0;
p2.selectedIndex = 1;

render(p1.value, "leftPanel");
render(p2.value, "rightPanel");
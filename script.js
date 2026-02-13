const defaultPlayers = [
  {
    name: "mlfins",
    skin: "assets/players/default.png",
    global: 1,
    ugame: "ТОП 1",
    breadix: "ТОП 1",
    minenex: "ТОП 1"
  }
];

function loadPlayers() {
  const players = JSON.parse(localStorage.getItem("players")) || defaultPlayers;
  const table = document.getElementById("rankingTable");
  table.innerHTML = "";

  players.sort((a, b) => a.global - b.global);

  players.forEach((player, index) => {
    table.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>
          <div class="player">
            <img src="${player.skin}">
            ${player.name}
          </div>
        </td>
        <td>#${player.global}</td>
        <td>${player.ugame}</td>
        <td>${player.breadix}</td>
        <td>${player.minenex}</td>
      </tr>
    `;
  });
}

function showInfo() {
  alert("Чтобы попасть в рейтинг — зайдите в нашу группу ВК.");
}

loadPlayers();

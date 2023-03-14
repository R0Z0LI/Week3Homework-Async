let data;
const fetchProfileInfo = async () => {
  try {
    const res = await fetch("https://my.api.mockaroo.com/profiles.json", {
      method: "GET",
      headers: {
        "X-API-Key": "fdf950f0",
      },
    });
    data = await res.json();
    createTable();
  } catch (err) {
    console.error(err);
  }
};

createTable = () => {
  let col = [];
  for (let i = 0; i < data.length; i++) {
    for (let key in data[i]) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  }
  const showData = document.getElementById("showData");

  const headRow = document.createElement("div");
  showData.appendChild(headRow);
  for (let i = 0; i < col.length; i++) {
    const headCell = document.createElement("span");
    headCell.innerHTML = col[i];
    headRow.appendChild(headCell);
  }

  for (let i = 0; i < data.length; i++) {
    const row = document.createElement("div");
    showData.appendChild(row);
    for (let j = 0; j < col.length; j++) {
      const cell = document.createElement("span");
      if (j === 0) {
        const img = document.createElement("img");
        img.src = data[i][col[j]];
        cell.appendChild(img);
      } else {
        cell.innerHTML = data[i][col[j]];
      }

      row.appendChild(cell);
    }
  }
  console.log(showData);
};

fetchProfileInfo();

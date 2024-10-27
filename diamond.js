function diamond(rows) {
  const totalRows = 2 * rows - 1;
  let line = '';

  for (let i = 0; i < totalRows; i++) {
    let stars, spaces;

    if (i < rows) {
      stars = 2 * i + 1;
      spaces = rows - i - 1;
    } else {
      stars = 2 * (totalRows - i) - 1;
      spaces = i - rows + 1;
    }

    line += " ".repeat(spaces) + "*".repeat(stars) + '<br>';
  }

  document.getElementById('diamond').innerHTML = line;
}
const userInput = prompt("Enter the number of rows for the diamond pattern:");
const rows = parseInt(userInput);

if (!isNaN(rows) && rows > 0) {
  diamond(rows);
} else {
  document.getElementById('diamond').innerHTML = "Please enter a valid positive number.";
}

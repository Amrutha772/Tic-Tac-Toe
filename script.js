body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background: linear-gradient(to bottom, #E6E6FA, #008080); /* Gradient background */
}

.container {
    text-align: center;
}

h1 {
    margin-bottom: 20px;
}

.board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 5px;
    justify-content: center;
    margin-bottom: 20px;
}

.cell {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    background-color: #fff;
    border: 2px solid #000;
    cursor: pointer;
    border-radius: 10px; /* Curved corners */
}

.cell:hover {
    background-color: #f0e68c; /* Hover color */
}

.cell.x {
    background-color: #228B22; /* Forest Green for player X */
}

.cell.o {
    background-color: #8A9A5B; /* Moss Green for player O */
}

#restartButton {
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    background-color: #d3a297; /* Light maroon color for restart button */
    color: white;
    border: none;
    border-radius: 5px;
}

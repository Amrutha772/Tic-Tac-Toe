document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const cells = document.querySelectorAll(".cell");
    const restartButton = document.getElementById("restartButton");
    let currentPlayer = "X";
    let gameState = Array(9).fill("");
    let gameActive = true;

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    function handleCellClick(e) {
        const cell = e.target;
        const cellIndex = cell.getAttribute("data-index");

        if (gameState[cellIndex] !== "" || !gameActive) {
            return;
        }

        gameState[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer.toLowerCase()); // Add class for styling

        if (checkWinner()) {
            alert(`Player ${currentPlayer} wins!`);
            gameActive = false;
            return;
        }

        if (!gameState.includes("")) {
            alert("It's a draw!");
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    function checkWinner() {
        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            if (
                gameState[a] &&
                gameState[a] === gameState[b] &&
                gameState[a] === gameState[c]
            ) {
                return true;
            }
        }
        return false;
    }

    function restartGame() {
        currentPlayer = "X";
        gameState = Array(9).fill("");
        cells.forEach(cell => {
            cell.textContent = "";
            cell.classList.remove("x", "o"); // Remove classes for styling
        });
        gameActive = true;
    }

    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
    restartButton.addEventListener("click", restartGame);
});

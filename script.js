let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWinner = () => {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    if (!board.includes('')) return 'draw';
    return null;
};

const displayStatus = (winner) => {
    const statusElement = document.getElementById('status');
    if (winner === 'draw') {
        statusElement.innerText = "It's a draw!";
    } else if (winner) {
        statusElement.innerText = `${winner} wins!`;
    } else {
        statusElement.innerText = `Current Player: ${currentPlayer}`;
    }
};

const makeMove = (index) => {
    if (!gameActive || board[index] !== '') return;
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    const winner = checkWinner();
    if (winner) {
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
    displayStatus(winner);
};

const resetGame = () => {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
    displayStatus(null);
};

displayStatus(null);

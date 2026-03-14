const TOTAL_ROWS = 5;

function printDiamondPattern(totalRows) {

    // Upper half
    for (let row = 1; row <= totalRows; row++) {

        let currentRow = "";

        // Leading spaces
        for (let space = 1; space <= totalRows - row; space++) {
            currentRow += " ";
        }

        // Hollow pyramid logic
        for (let column = 1; column <= (2 * row - 1); column++) {
            if (column === 1 || column === (2 * row - 1)) {
                currentRow += "*";
            } else {
                currentRow += " ";
            }
        }

        console.log(currentRow);
    }

    // Lower half
    for (let row = totalRows - 1; row >= 1; row--) {

        let currentRow = "";

        // Leading spaces
        for (let space = 1; space <= totalRows - row; space++) {
            currentRow += " ";
        }

        // Hollow inverted pyramid logic
        for (let column = 1; column <= (2 * row - 1); column++) {
            if (column === 1 || column === (2 * row - 1)) {
                currentRow += "*";
            } else {
                currentRow += " ";
            }
        }

        console.log(currentRow);
    }
}

printDiamondPattern(TOTAL_ROWS);
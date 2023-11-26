function printDiamond(letter: string): void {
  const alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const letterIndex: number = alphabet.indexOf(letter);

  if (letterIndex === -1) {
    console.log("Input harus berupa huruf alfabet dari A sampai Z.");
    return;
  }

  const diamondSize: number = letterIndex * 2 + 1;

  for (let i = 0; i < diamondSize; i++) {
    const currentRow: number = i < letterIndex ? i : diamondSize - 1 - i;
    let spaces: string = "";
    for (let j = 0; j < letterIndex - currentRow; j++) {
      spaces += ".";
    }

    let middleSpaces: string = "";
    let rowContent: string = "";

    if (i === 0 || i === diamondSize - 1) {
      rowContent = alphabet[i];
    } else {
      middleSpaces = ".".repeat(currentRow * 2 - 1);
      rowContent = alphabet[i] + middleSpaces + alphabet[i];
    }

    console.log(spaces + rowContent + spaces);
  }
}

// Test Case 1
console.log("Test Case 1");
printDiamond("C");

// // Test Case 2
// console.log("\nTest Case 2");
// printDiamond("E");

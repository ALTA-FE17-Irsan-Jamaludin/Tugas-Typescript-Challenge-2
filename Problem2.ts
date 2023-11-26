const cetakTabelPerkalian = (num: number) => {
  for (let i = 1; i <= num; i++) {
    let angka: string = `${i}  `;
    for (let j = 1; j <= num; j++) {
      angka += j * i + " ";
    }
    console.log(angka);
  }
};

cetakTabelPerkalian(9);

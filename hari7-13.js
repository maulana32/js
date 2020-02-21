function hitungProfit(shoppers) {
    let listBarang = [ ['Sepatu Sanji', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweeter Hinata', 175000, 1]
                     ];
    // Tulis kode jawabanmu disini
    let dataPembeli = [
      {
        product: listBarang[0][0], 
        shoppers: [], 
        leftOver: listBarang[0][2], 
        totalProfit: 0,
      },
      {
        product: listBarang[1][0], 
        shoppers: [], 
        leftOver: listBarang[1][2], 
        totalProfit: 0,
      },
      {
        product: listBarang[2][0], 
        shoppers: [], 
        leftOver: listBarang[2][2], 
        totalProfit: 0,
      }
    ];

    for(let pembeli of shoppers){
      if(pembeli.product == 'Sepatu Sanji'){
        if(pembeli.amount < dataPembeli[0].leftOver){
          dataPembeli[0].shoppers.push(pembeli.name);
          dataPembeli[0].totalProfit += listBarang[0][1]*pembeli.amount;
          dataPembeli[0].leftOver = dataPembeli[0].leftOver-pembeli.amount;    
        }
      }
      if(pembeli.product == 'Baju Zoro'){
        if(pembeli.amount < dataPembeli[1].leftOver){
          dataPembeli[1].shoppers.push(pembeli.name);
          dataPembeli[1].totalProfit += listBarang[1][1]*pembeli.amount;   
          dataPembeli[1].leftOver = dataPembeli[1].leftOver-pembeli.amount;   
        }
      }
      if(pembeli.product == 'Sweeter Hinata'){
        if(pembeli.amount < dataPembeli[2].leftOver){
          dataPembeli[2].shoppers.push(pembeli.name);
          dataPembeli[2].totalProfit += listBarang[2][1]*pembeli.amount;
          dataPembeli[2].leftOver = dataPembeli[2].leftOver-pembeli.amount;      
        }
      }
    }

    if(shoppers == 0){
      dataPembeli = [];
    }

    return dataPembeli;
  }
  // TEST CASES
  console.log(hitungProfit([{name: 'Anis Fikriyyah', product: 'Sepatu Sanji', amount: 2}, {name: 'Asrul Harahap', product: 'Sepatu Sanji', amount: 3}, {name: 'Ghazala Tisha', product: 'Sweeter Hinata', amount: 2}]));
  //[ { product: 'Sepatu Sanji',
  //   shoppers: [ 'Anis Fikriyyah', 'Asrul Harahap' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweeter Hinata',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  console.log(hitungProfit([{name: 'Anis Fikriyyah', product: 'Sepatu Sanji', amount: 8}, {name: 'Asrul Harahap', product: 'Sepatu Sanji', amount: 10}, {name: 'Ghazala Tisha', product: 'Sweeter Hinata', amount: 1}, {name: 'Rifki Hilman', product: 'Baju Zoro', amount: 1}, {name: 'M. Lan', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Sanji',
  //     shoppers: [ 'Anis Fikriyyah' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Rifki Hilman', 'M. Lan' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweeter Hinata',
  //     shoppers: [ 'Ghazala Tisha' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(hitungProfit([{name: 'Anis Fikriyyah', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Sanji',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweeter Hinata',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(hitungProfit([])); 
  //[]
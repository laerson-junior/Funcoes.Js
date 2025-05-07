const maiorIdade = idade => {
    if (idade >= 18) {
      return "adulto";
    } else {
      return "jovem";
    }
  };
  console.log(maiorIdade(14)); 
// Array para armazenar as 5 notas
const notas = [];
let i = 0;

// Loop para solicitar as 5 notas do usuário
while (i < 5) {
  const entrada = prompt("Digite a nota " + (i + 1) + " (0 a 10):");
  const nota = Number(entrada);

  // Verifica se é um número válido
  if (nota !== nota || nota < 0 || nota > 10) {
    console.log("Valor inválido! Digite um número entre 0 e 10.");
    continue; // repete a entrada
  }

  notas[i] = nota; // adiciona a nota no array
  i = i + 1;
}

// Função para calcular média descartando a menor nota
function calcularMediaComDescarte(notas) {
  // Encontrar a menor nota
  let menor = notas[0];
  for (let j = 1; j < notas.length; j++) {
    if (notas[j] < menor) {
      menor = notas[j];
    }
  }

  // Criar novo array com as notas restantes
  const notasRestantes = [];
  let removido = false;
  let k = 0;
  for (let j = 0; j < notas.length; j++) {
    if (notas[j] === menor && !removido) {
      removido = true; // descarta a primeira ocorrência da menor nota
    } else {
      notasRestantes[k] = notas[j];
      k = k + 1;
    }
  }

  // Calcular média das notas restantes
  let soma = 0;
  for (let j = 0; j < notasRestantes.length; j++) {
    soma = soma + notasRestantes[j];
  }
  const media = soma / notasRestantes.length;

  // Classificação
  let classificacao = "";
  if (media >= 7) classificacao = "Aprovado";
  else if (media >= 5) classificacao = "Recuperação";
  else classificacao = "Reprovado";

  // Exibir resultados
  console.log("Notas informadas: " + notas.join(", "));
  console.log("Nota descartada: " + menor);
  console.log("Média final: " + media);
  console.log("Classi: " + classifi);
}

// Executa a função
calcularMediaComDescarte(notas);
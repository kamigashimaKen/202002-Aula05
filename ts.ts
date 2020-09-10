$(document).ready(() => {
    var votos = [];
    const candidatos = [
      {
        nome: "Zé da esquina",
        cod: 1,
      },
      {
        nome: "João da praia",
        cod: 2,
      },
      {
        nome: "Maria dos bolos",
        cod: 3,
      },
      {
        nome: "Paulo do bar",
        cod: 4,
      },
      {
        nome: "Matilde da rua de cima",
        cod: 5,
      },
    ];
    candidatos.map((candidato, index) => {
      $("#candidatos").append(
        `<div id="div_candidato"><div>Código do candidato: ${candidato.cod}</div> <div>${candidato.nome}</div></div>`
      );
    });
  
    $("#votar").click(() => {
      votos.push($("#cod_candidato").val());
    });
  
    $("#cod_candidato").bind("keyup", function (e) {
      if (e.keyCode < 47 || e.keyCode > 57) {
        alert("Código - Campo numerico!");
        $(this).val("");
      }
    });
    var candidato1 = 0;
    var candidato2 = 0;
    var candidato3 = 0;
    var candidato4 = 0;
    var candidato5 = 0;
    var nulo = 0;
  
    $("#apurar").click(() => {
      votos.map((votos, index) => {
        if (votos == 1) {
          candidato1++;
        } else if (votos == 2) {
          candidato2++;
        } else if (votos == 3) {
          candidato3++;
        } else if (votos == 4) {
          candidato4++;
        } else if (votos == 5) {
          candidato5++;
        } else {
          nulo++;
        }
      });
  
      var resultado = [];
      resultado.push(candidato1);
      resultado.push(candidato2);
      resultado.push(candidato3);
      resultado.push(candidato4);
      resultado.push(candidato5);
  
      var re = resultado.reduce((a, b) => {
        return Math.max(a, b);
      });
  
      var print_string;
  
      resultado.map((resultado, index) => {
        if (re == resultado && index == 0) {
          print_string = `O vencedor da votação foi o candidato código 1 - com ${resultado} votos!`;
        } else if (re == resultado && index == 1) {
          print_string = `O vencedor da votação foi o candidato código 2 - com ${resultado} votos!`;
        } else if (re == resultado && index == 2) {
          print_string = `O vencedor da votação foi o candidato código 3 - com ${resultado} votos!`;
        } else if (re == resultado && index == 3) {
          print_string = `O vencedor da votação foi o candidato código 4 - com ${resultado} votos!`;
        } else if (re == resultado && index == 4) {
          print_string = `O vencedor da votação foi o candidato código 5 - com ${resultado} votos!`;
        }
      });
  
      $("#resultado").html(
        `<div id="div_candidato">
              <div id="voto_candidato">Votos do candidato 1: ${candidato1}</div>
              <div id="voto_candidato">Votos do candidato 2: ${candidato2}</div>
              <div id="voto_candidato">Votos do candidato 3: ${candidato3}</div>
              <div id="voto_candidato">Votos do candidato 4: ${candidato4}</div>
              <div id="voto_candidato">Votos do candidato 5: ${candidato5}</div>
          </div>
          <div>
          ${print_string}
          </div>`
      );
  
      votos = [];
    });
  });
  
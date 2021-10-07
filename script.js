var numero = parseFloat(prompt("Digite um número:"))
     mostrar();
        function mostrar (){
           ola = document.querySelector('.mundo');
          ola.innerHTML = numero
        }
         var ola = document.querySelector('.mundo');
        var limpa = '';
        function somar(){
          var n = prompt('Digite outro número:');
          n = parseFloat(n);
          numero = numero + n;
          mostrar ();
        }
        function subtrair(){
          var n1 = prompt('Digite outro número:');
          n1 = parseFloat(n1);
         numero = numero - n1;
          mostrar ();
        }
        function multiplicar(){
          var n = prompt('Digite outro número:');
          n = parseFloat(n);
          numero = numero * n;
          mostrar ();
        }
        function dividir(){
          var n = prompt('Digite outro número:');
          n = parseFloat(n);
          numero = numero / n;
          mostrar ();
        }
       function limpar(){
        limpa = '';
         ola.innerHTML = limpa;
       }
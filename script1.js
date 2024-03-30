
            let botaoAdd = document.getElementById('botao');
            let marcado = false;
            let input = document.getElementById('input-tarefa');
            let tarefas = document.querySelector('.tarefas'); 

            botaoAdd.addEventListener('click', function(){
                if (input.value != '') {
                    var tarefa = document.createElement('p');
                    tarefas.appendChild(tarefa); 
                    tarefa.innerText = input.value;
                    input.value = '';

                    tarefa.addEventListener('dblclick', function() {
                        tarefas.removeChild(tarefa);
                    });
                }
            });
       
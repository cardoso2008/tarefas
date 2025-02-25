function salvarTarefas() {
    var tarefa1 = document.getElementById('tarefa1').value;
    var tarefa2 = document.getElementById('tarefa2').value;
    var tarefa3 = document.getElementById('tarefa3').value;
    var tarefa4 = document.getElementById('tarefa4').value;
    var tarefa5 = document.getElementById('tarefa5').value;

    //Colocar o valor da variável dentro da chave 'nome'
    localStorage.setItem('tarefa1', tarefa1)
    localStorage.setItem('tarefa2', tarefa2)
    localStorage.setItem('tarefa3', tarefa3)
    localStorage.setItem('tarefa4', tarefa4)
    localStorage.setItem('tarefa5', tarefa5)
}

function mostrarTarefas(){
    var tarefa1 = localStorage.getItem('tarefa1');
    var tarefa2 = localStorage.getItem('tarefa2');
    var tarefa3 = localStorage.getItem('tarefa3');
    var tarefa4 = localStorage.getItem('tarefa4');
    var tarefa5 = localStorage.getItem('tarefa5');
    
    if (tarefa1, tarefa2, tarefa3, tarefa4, tarefa5){
        document.getElementById('resultado1').textContent = `TAREFA 1: ${tarefa1}` //Exibir o nome salvo
        document.getElementById('resultado2').textContent = `TAREFA 2: ${tarefa2}`
        document.getElementById('resultado3').textContent = `TAREFA 3: ${tarefa3}`
        document.getElementById('resultado4').textContent = `TAREFA 4: ${tarefa4}`
        document.getElementById('resultado5').textContent = `TAREFA 5: ${tarefa5}`
    }else{
        document.getElementById('resultado1').textContent = `Nenhuma tarefa encontrada. Preencha as 5 tarefas`;
        document.getElementById('resultado2').textContent = `Nenhuma tarefa encontrada. Preencha as 5 tarefas`;
        document.getElementById('resultado3').textContent = `Nenhuma tarefa encontrada. Preencha as 5 tarefas`;
        document.getElementById('resultado4').textContent = `Nenhuma tarefa encontrada. Preencha as 5 tarefas`;
        document.getElementById('resultado5').textContent = `Nenhuma tarefa encontrada. Preencha as 5 tarefas`;
    }

    
}

function limparTarefas(){
    localStorage.removeItem('tarefa1');
    localStorage.removeItem('tarefa2');
    localStorage.removeItem('tarefa3');
    localStorage.removeItem('tarefa4');
    localStorage.removeItem('tarefa5');

    document.getElementById('resultado1').textContent = 'Tarefa removida';
    document.getElementById('resultado2').textContent = 'Tarefa removida';
    document.getElementById('resultado3').textContent = 'Tarefa removida';
    document.getElementById('resultado4').textContent = 'Tarefa removida';
    document.getElementById('resultado5').textContent = 'Tarefa removida';
    // Não precisa colocar a variável 'nome'
}

function limparTarefa1(){
    localStorage.removeItem('tarefa1');
    document.getElementById('resultado1').textContent = 'Tarefa removida';
}

function limparTarefa2(){
    localStorage.removeItem('tarefa2');
    document.getElementById('resultado2').textContent = 'Tarefa removida';
}
function limparTarefa3(){
    localStorage.removeItem('tarefa3');
    document.getElementById('resultado3').textContent = 'Tarefa removida';
}
function limparTarefa4(){
    localStorage.removeItem('tarefa4');
    document.getElementById('resultado4').textContent = 'Tarefa removida';
}
function limparTarefa5(){
    localStorage.removeItem('tarefa5');
    document.getElementById('resultado5').textContent = 'Tarefa removida';
}
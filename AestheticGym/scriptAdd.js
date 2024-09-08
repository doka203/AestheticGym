const novaTabela = () => {
    // Seleciona o elemento pai que contém as rotinas de treino (lista ordenada com id "rotinas")
    const listaRotinas = document.getElementById('rotinas');
  
    // Cria um novo elemento 'li' para adicionar à lista de rotinas
    const novaRotina = document.createElement('li');
  
    // Define a estrutura HTML da nova tabela de rotina como uma string
    const estruturaTabela = `
      <div class="rotina">
        <div class="top">
          <div class="left">
            <h2>Titulo</h2>
          </div>
          <div class="right">
            <a>
              <img src="./images/excluir.png" alt="menu" />
            </a>
          </div>
        </div>
        <div class="bottom">
          <table>
            <thead>
              <tr>
                <th>Exercícios</th>
                <th>Séries</th>
                <th>Repetições</th>
                <th>Carga</th>
                <th>Descanso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text"></td>
                <td><input type="number"></td>
                <td><input type="number"></td>
                <td><input type="number"></td>
                <td><input type="number"></td>
              </tr>
              <tr>
                <td><input type="text"></td>
                <td><input type="number"></td>
                <td><input type="number"></td>
                <td><input type="number"></td>
                <td><input type="number"></td>
              </tr>
              <!-- outras linhas podem ser adicionadas aqui -->
            </tbody>
          </table>
        </div>
      </div>
    `;
  
    // Define o HTML interno do novo 'li' com a estrutura da tabela
    novaRotina.innerHTML = estruturaTabela;
  
    // Anexa a nova rotina (novo 'li') à lista de rotinas
    listaRotinas.appendChild(novaRotina);

    window.location.href = "home.html";
  }

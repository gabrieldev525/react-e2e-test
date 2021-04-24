// React
import React from 'react'

// Local
import './style.css'

const App = () => {
  return (
    <div className='container'>
      <h3 className='title'>Lista de atividades</h3>
      <span className='subtitle'>Preencha o campo abaixo para inserir uma nova atividade</span>
      <form>
        <input type='text' />
        <input type='submit' value='add' />
      </form>

      <table>
        <thead>
          <td>Nome da tarefa</td>
        </thead>
        <tbody>
          <tr>
            <td>Tarefa 1</td>
          </tr>
          <tr>
            <td>Tarefa 1</td>
          </tr>
          <tr>
            <td>Tarefa 1</td>
          </tr>
          <tr>
            <td>Tarefa 1</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App;

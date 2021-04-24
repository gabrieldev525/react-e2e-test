// React
import React, { useState } from 'react'

// Third party
import { BsTrashFill } from 'react-icons/bs'

// Local
import './style.css'

const App = () => {
  const [todoList, setTodoList] = useState<Array<String>>([])
  const [inputField, setInputField] = useState('')

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if(inputField.trim()) {
      setTodoList([...todoList, inputField])
      setInputField('')
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputField(event.target.value)

  const onClickRemove = (index: number) => {
    if(todoList.length > index) {
      let temp = [...todoList]
      temp.splice(index, 1)
      setTodoList(temp)
    }
  }

  return (
    <div className='container'>
      <h3 className='title'>Lista de atividades</h3>
      <span className='subtitle'>Preencha o campo abaixo para inserir uma nova atividade</span>
      <form onSubmit={onSubmit}>
        <input type='text' onChange={handleChange} value={inputField} />
        <input type='submit' value='add' />
      </form>

      <table>
        <thead>
          <tr>
            <td>Nome da tarefa</td>
            <td width="10%"></td>
          </tr>
        </thead>
        <tbody>
          {
            todoList.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item}</td>
                  <td>
                    <BsTrashFill
                      className='remove-button'
                      onClick={() => onClickRemove(index)}/>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App;

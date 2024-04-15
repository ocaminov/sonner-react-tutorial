import React from 'react'
import { Toaster, toast } from 'sonner'
import {BiCheck} from 'react-icons/bi'

async function uploadSomething() {
  const res = await fetch('https://reqres.in/api/users/1')
  return await res.json()
  
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat optio beatae magnam fugiat ullam vero, repudiandae quibusdam ad explicabo illum perspiciatis consequatur provident, perferendis corporis doloremque, doloribus repellat quidem. Nisi.</p>

      <button onClick={() => {
        toast('Terminos Aceptados', {
          description: "Gracias por aceptar los terminos y condiciones",
          icon: <BiCheck style={{color: "green", fontSize: "1rem"}} />
        })
      }}>
        Aceptar
      </button>

      <button onClick={() => {
        toast('Quieres aceptar los terminos?', {
          action: {
            label: "Aceptar",
            onClick: () => {
              alert('terminos aceptados')
            }
          }
        })
      }}>
        Toast con Boton
      </button>

      <button onClick={() => {
        toast.promise(uploadSomething, {
          success: ({data}) => {
            return `Bienvenido ${data.first_name} ${data.last_name}`
          },
          error: "Ocurrio un error al cargar el archivo",
          loading: "Subiendo archivo..."
        })
      }}>
        Toast con promesa
      </button>

      <button onClick={() => {
        toast(<div>
          <h3>Hello world</h3>
          <p>algo nuevo</p>
          <ul>
            <li>algo nuevo</li>
            <li>otra cosa</li>
          </ul>
        </div>)
      }}>
        Con JSX
      </button>

      <Toaster theme='system' dir='auto' />
    </div>
  )
}

export default App

import './style.css'
import { setupData } from './data-entry'
import { setupExample } from './setup-examples'

const canvasWidth = 600
const canvasHeight = 500


document.querySelector<HTMLDivElement>( '#app' )!.innerHTML = `
  <main>
    <header class="header">
      <nav class="nav">
        <span> Realizado por: </span>
        <a href="https://github.com/pxnditxyr" target="_blank" aria-label="Github">
          <img src="/github-mark/github-mark-white.svg" alt="Github" />
        </a>
        <a href="https://twitter.com/PxndxsYR" target="_blank" aria-label="Twitter">
          <img src="/logo.svg" alt="Twitter" />
        </a>
      </nav>
    </header>
    <h1> Graficador de Flujo de Caja </h1>
    <div class="input-container">
      <label for="cash-flow-input"> Ingrese los valores del flujo de caja </label>
      <textarea
        id="cash-flow-input"
      ></textarea>
    </div>
    <div class="graph-container">
      <div class="canvas-container">
        <canvas
          id="cash-flow-graph"
          width=${ canvasWidth }
          height=${ canvasHeight }
        ></canvas>
      </div>
      <div class="examples-container">
        <button id="example-1"> Ejemplo 1 </button>
      </div>
    </div>
  </main>
`

const canvas = document.querySelector<HTMLCanvasElement>( '#cash-flow-graph' )!
const textAreaElement = document.querySelector<HTMLTextAreaElement>( '#cash-flow-input' )!
const example1Button = document.querySelector<HTMLButtonElement>( '#example-1' )!
const { setData } = setupData( textAreaElement, canvas )
setupExample({ setData, example1Button, textAreaElement })

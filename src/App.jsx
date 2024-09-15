import { createElement } from 'react'
import './App.css'
import image from '../public/fujikaze.jpeg'

function App() {
  const heading = createElement('h1', 'null', 'FUJI KAZE');

  return (
    <div>
      <div>{heading}</div>
      <div className='contentContainer'>
        <img src={image} alt="Fuji Kaze" width={300} height={300}/>
        <div className='albumContainer'>
          <details>
            <summary>Help Ever Hurt Never</summary>
            <ol>
              <li>Nan-Nan</li>
              <li>Mo-Eh-Wa</li>
              <li>Yasashisa</li>
              <li>Kiri ga Naikara</li>
              <li>Tsumi no Kaori</li>
              <li>Cho Si Noccha Te</li>
              <li>Tokuninai</li>
              <li>Shinunoga E-Wa</li>
              <li>Kazeyo</li>
              <li>Sayonara Baby</li>
              <li>Kaerou</li>
            </ol>
          </details>
          <details>
            <summary>Love All Serve All</summary>
            <ol>
              <li>Kirari</li>
              <li>Matsuri</li>
              <li>Hedemo Ne-Yo</li>
              <li>Yaba</li>
              <li>Mo-Eh-Yo</li>
              <li>Garden</li>
              <li>Damn</li>
              <li>Lonely Rhapsody</li>
              <li>Bye for Now</li>
              <li>Seishun Sick</li>
              <li>Tabiji</li>
            </ol>
          </details>
        </div>
      </div>
    </div>
  )
}

export default App

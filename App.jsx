import { useState } from 'react'
import './App.css'
import {Baslık} from './components/Başlık'
import { Photo } from './components/Fotom'
import { AboutMe } from './components/Hakkımda'
import { Hobbies } from './components/Hobilerim'
import { Sertifika } from './components/Sertifika'
import { İletişim } from './components/İletişim'
function App() {


  return (
    <>

<Baslık/>
<Photo/>
<AboutMe/>
<Hobbies/>
<Sertifika/>
<İletişim/>

    </>
  )
}

export default App

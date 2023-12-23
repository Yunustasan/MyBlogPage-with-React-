import img from '../img/ODTÜsertifika.jpg'
import img2 from '../img/Arduino.jpg'
import img3 from '../img/Zeka.jpg'

function Sertifika() {
    return(
        <>
        <h2  style={{marginLeft: 10,marginTop: 8}}>Kazandığım Bazı Sertifikalar:</h2>
        <img src={img} alt="" className='foto1'  style={{marginLeft: 10}} />
        <img src={img2} alt="" className='foto2'  style={{marginLeft: 10}}/>
        <img src={img3} alt="" className='foto3'  style={{marginLeft: 10}} />
        </>
    )
}

export {Sertifika}
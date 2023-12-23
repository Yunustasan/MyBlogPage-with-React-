import img from '../img/Fotoğrafım.jpg'

function Photo() {
    return (
        <>
        <p className='fotop'>Fotoğrafım;</p>
        <img src={img} alt="kendifotom" className='myFoto'/>
        
        </>
    )
}

export {Photo}
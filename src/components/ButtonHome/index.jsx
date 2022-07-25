import './style.css'

const ButtonHome = ({ setIsHomePage }) => {
    return(
        <button className='buttonHome' onClick={() => setIsHomePage(true)}>
            Início
        </button>
    )
}

export default ButtonHome
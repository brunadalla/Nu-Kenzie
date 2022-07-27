import { FaTrash } from 'react-icons/fa' 
import './style.css'

const ExcluirCard = ( {listTransactions, setListTransactions, id} ) => {

    function handleDelete(event) {
        event.preventDefault()

        const newList       = [...listTransactions]
        const indexToDelete = newList.indexOf(id)
        
        newList.splice(indexToDelete, 1)

        setListTransactions(newList)
        
    }

    return (

        <button className='btnDeletar' onClick={(event) => handleDelete(event) }>

            <FaTrash/>
            
        </button>
    )
}

export default ExcluirCard
import './style.css'

const Filter = ( {type, filterName, listTransactions, setNewListTransactions} ) => {

    function handleFilter(event) {
        event.preventDefault()

        const filtrados = listTransactions.filter(transaction => transaction.type === type)

        if (type === 'todos') {
            setNewListTransactions(listTransactions)
        }

        else {
            filtrados.length !== 0 ? setNewListTransactions(filtrados) : setNewListTransactions([]) 
        }
 
    }

    return (
        
        <button className='btnsFilter' onClick={(event) => handleFilter(event)}>

            {filterName}

        </button>
    )
}

export default Filter
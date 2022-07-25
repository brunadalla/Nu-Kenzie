import './style.css'

const Filter = ( {type, filterName, listTransactions, setListTransactions} ) => {

    function handleFilter(event) {
        event.preventDefault()

        const filtrados = listTransactions.filter(transaction => transaction.type === type)

        if (type === 'todos') {
            setListTransactions(listTransactions)
        }

        else {
            filtrados.length !== 0 ? setListTransactions(filtrados) : setListTransactions([]) 
        }
 
    }

    return (
        
        <button className='btnsFilter' onClick={(event) => handleFilter(event)}>

            {filterName}

        </button>
    )
}

export default Filter
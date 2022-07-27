import Card from "../Card"
import './style.css'

const List = ( {listTransactions, setListTransactions, newListTransactions, setNewListTransactions} ) => {

    return (

        <ul>

            {
                newListTransactions.map((transaction, index) => 
                    <Card 
                    id={index}
                    key={index}
                    transaction={transaction} 
                    listTransactions={listTransactions}
                    setListTransactions={setListTransactions}
                    newListTransactions={newListTransactions} 
                    setNewListTransactions={setNewListTransactions}
                    />).reverse()
            }

        </ul>
    )
}

export default List
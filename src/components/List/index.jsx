import Card from "../Card"
import './style.css'

const List = ( {listTransactions, setListTransactions} ) => {

    return (

        <ul>

            {
                listTransactions.map((transaction) => 
                    <Card 
                    key={transaction}
                    transaction={transaction} 
                    listTransactions={listTransactions}
                    setListTransactions={setListTransactions}
                    />).reverse()
            }

        </ul>
    )
}

export default List
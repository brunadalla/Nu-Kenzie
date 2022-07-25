import ExcluirCard from "../ExcluirCard"
import './style.css'

const Card = ( {listTransactions, setListTransactions, transaction} ) => {

    const {description, type, value} = transaction

    return (

        <li className="card_transaction">

            <div 
                className="colorTag" 
                style={{ backgroundColor: type === 'entrada' ? '#03B898' : '#E9ECEF' }}>
            </div>

            <div className="description_and_type">

                <h3>
                    {description}
                </h3>

                <p>
                    {type}
                </p>

            </div>

            <div className="value_and_deleteBtn">

                <span>
                    R$ {value}
                </span>

                <ExcluirCard  listTransactions={listTransactions} setListTransactions={setListTransactions} toDelete={transaction}/>

            </div>

        </li>
        
    )
}

export default Card
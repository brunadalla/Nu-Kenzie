import { useState } from "react"
import './style.css'

const Form = ( {listTransactions, setListTransactions} ) => {

    const [descriptionInput, setDescriptionInput] = useState('')
    const [valueInput, setValueInput]             = useState('')
    const [selectOption, setSelectOption]         = useState('entrada')

    function handleTransaction(newTransaction) {
        setListTransactions([...listTransactions, newTransaction])
    }

    return (

        <form>

            <div className="transaction_description">

                <label>Descrição</label>

                <textarea 
                    type="text" 
                    name="descricao" 
                    id="descricao" 
                    placeholder="Digite aqui sua descrição" 
                    required
                    onChange={(event) => setDescriptionInput(event.target.value)}
                /> 

                <p>Ex: Compra da roupas</p>

            </div>

            <div className="transaction_info">

                <div className="transaction_value">

                    <label>Valor</label>

                    <div>

                        <input 
                            type="number" 
                            name="valor" 
                            id="valor" 
                            placeholder="1"
                            required
                            onChange={(event) => setValueInput(event.target.value)}/>

                            <span>R$</span>

                    </div>
                    
                </div>

                <div className="transaction_type">

                    <label>Tipo</label>

                    <select name="select" required onChange={(event) => setSelectOption(event.target.value)}>

                        <option value="entrada">Entrada</option>
                        <option value="saida">Saída</option>

                    </select>

                </div>
            
            </div>
                
            <button onClick={(event) => {

                event.preventDefault()

                const newTransaction = {
                    description: descriptionInput,
                    type: selectOption,
                    value: valueInput
                }

                handleTransaction(newTransaction)

                }}> Inserir valor </button>

        </form>
    )
}

export default Form
import './style.css'

const TotalMoney = ( {listTransactions} ) => {

    const entradas = listTransactions.filter(transaction => transaction.type === 'entrada')
    const saidas   = listTransactions.filter(transaction => transaction.type === 'saida')

    const totalEntradas = entradas.reduce((acc, transaction) => acc + Number(transaction.value), 0)
    const totalsaidas   = saidas.reduce((acc, transaction)   => acc + Number(transaction.value), 0)

    const total = totalEntradas - totalsaidas

    return (
        <div className='value_info'>
            <div>

                <h2>Valor total:</h2>
                <p>O valor se refere ao saldo</p>

            </div>

            <span>$ {total.toFixed(2)}</span>
        </div>
    )
}

export default TotalMoney
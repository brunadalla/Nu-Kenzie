import './style.css'

const EmptyList = () => {
    
    return (

        <div className="empty_container">

            <h2>Você ainda não possui nenhum lançamento</h2>

            <ul className="empty_list">
                
                <li className="empty_card">

                    <div className="empty_tag"></div>

                    <div className="empty_info">

                        <p></p>
                        <p></p>

                    </div>

                </li>

                <li className="empty_card">

                    <div className="empty_tag"></div>

                    <div className="empty_info">

                        <p></p>
                        <p></p>

                    </div>

                </li>

                <li className="empty_card">

                    <div className="empty_tag"></div>

                    <div className="empty_info">

                        <p></p>
                        <p></p>

                    </div>

                </li>

            </ul>

        </div>
    )
}

export default EmptyList
import { useState } from 'react';

import EmptyList    from './components/EmptyList';
import Filter       from './components/Filter';
import Form         from './components/Form';
import List         from './components/List';
import TotalMoney   from './components/TotalMoney';


import './primary.css'
import './App.css';

import { ReactComponent as Logo }          from '../src/assets/NuKenzie.svg'
import { ReactComponent as LogoHome }      from '../src/assets/Logo.svg'
import { ReactComponent as HomePageImage } from '../src/assets/Homepage.svg'
import ButtonHome from './components/ButtonHome';

function App() {

  const [listTransactions, setListTransactions]       = useState([])
  const [newListTransactions, setNewListTransactions] = useState(listTransactions)
  const [isHomePage, setIsHomePage]                   = useState(true)

  return (

    <div className="App">

      {

        isHomePage === true ? 

            <div className='homePage'>

              <section className='homePage_info'>

                <LogoHome/>

                <h1>Centralize o controle das suas finanças</h1>

                <p>de forma rápida e segura</p>

                <button onClick={() => setIsHomePage(false)}>Iniciar</button>

              </section>

                <HomePageImage/>

            </div>

          :

            <>
                <header>

                  <Logo/>

                  <ButtonHome setIsHomePage={setIsHomePage}/>

                </header>

                <main>

                  <section className='main_form'>

                    <Form listTransactions={listTransactions} setListTransactions={setListTransactions} newListTransactions={newListTransactions} setNewListTransactions={setNewListTransactions}/>

                    {
                        listTransactions.length !== 0 && <TotalMoney listTransactions={listTransactions}/>
                    }

                  </section>

                  <section className='main_transactionsList'>

                    <nav>

                      <h2>Resumo financeiro</h2>

                      <div>

                        <Filter type='todos'   filterName='Todos'    listTransactions={listTransactions} setListTransactions={setListTransactions} setNewListTransactions={setNewListTransactions}/>
                        <Filter type='entrada' filterName='Entradas' listTransactions={listTransactions} setListTransactions={setListTransactions} setNewListTransactions={setNewListTransactions}/>
                        <Filter type='saida'   filterName='Despesas' listTransactions={listTransactions} setListTransactions={setListTransactions} setNewListTransactions={setNewListTransactions}/>

                      </div>

                    </nav>

                    {

                      newListTransactions.length !== 0 ? 
                        <List listTransactions={listTransactions} setListTransactions={setListTransactions} newListTransactions={newListTransactions} setNewListTransactions={setNewListTransactions}/>
                      :
                        <EmptyList/>

                    }

                  </section>

                </main>
            </>
      }

    </div>
  );
}

export default App;

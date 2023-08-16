import { Header } from '../src/components/UI/Layout/Header';
import { Stories } from './FetchAPI/Stories';
import { Search } from './FetchAPI/Search';

import "./App.css"

function App() {
  async function requestAccount(){
    if(window.ethereum){
      console.log('detected');
      try{
        const accounts= window.ethereum.request({method:"eth_requestAccounts"})
        console.log(accounts);
      }
      catch(error){
        console.log("error")
      }
    }
    else{
      console.log('not detetcted');
    }
  }
  return( <>
    <button onClick={requestAccount}>Connect Wallet</button>
    <Header/>
    <Search/>
    <Stories/>
  </>
    
  );
}

export default App;

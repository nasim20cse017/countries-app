
import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'

const CountriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json());

function App() {

  return (
    <>
    <Suspense fallback={<h4>Loading, Please Wait...</h4>}>
      <Countries CountriesPromise={CountriesPromise}></Countries>
    </Suspense>
    
      
    </>
  )
}

export default App

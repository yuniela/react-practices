import './App.css'
import useImage from './hooks/useImage';
import useFact from './hooks/useFact';


function App() {
  
  const { fact, refreshFact } = useFact()
  const imageUrl = useImage({fact});

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de Gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      { fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first rhee words for ${fact}`} />}
    </main>
  )
}

export default App

import './index.css'


function App() {

  return(
    <div className='calc-project'>
      <h1>Calculadora React</h1>

      <div className="calculator">
          <div className="display"> <output>000</output>
           </div>
          <div className="buttons">
           <button><p>C</p></button> 
           <button><p>9</p></button>  
           <button><p>8</p></button>  
           <button><p>7</p></button>  
           <button><p>6</p></button>  
           <button><p>5</p></button>  
           <button><p>4</p></button>  
           <button><p>3</p></button>  
           <button><p>2</p></button>  
           <button><p>1</p></button>  
           <button><p>0</p></button>  
           <button><p>=</p></button>  
           <button><p>-</p></button>  
           <button><p>+</p></button>  
           <button><p>x</p></button>  
           <button><p>÷</p></button>  
           
            
          </div>         
      </div>
    </div>
    
  )
   
}

export default App

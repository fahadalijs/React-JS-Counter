
// function App () {
//     return(
//         <h1>Hello world</h1>
//     )
// }



// export default App




// const App = ()=>{
// function getVal() {
//     console.log("get val function call");

// }
// // getVal()
//     return(
//         <>
//         <h1>Hello world</h1>
//          <button onClick={getVal}>click</button>

//         </>
//     )
// }

// export default App





// function App() {    
//     const num = 10;

//     return(
//        <>
//         <h1>Hello world</h1>
//         <p>{num}</p>
//         <button>Click</button>
//        </>
//     )
// }

// export default App











// Making counter through react


import { useState } from "react"

function App () {

let [num , setnum] = useState(0);

function addCounter() {
    setnum(num + 1);

}

function lessCounter() {
    setnum(num - 1);
}
    return(
       <>
       <h1>Hello World {num}</h1>
       <h1>{num}</h1>
       <button onClick={addCounter}>Add{num}</button>
       <button onClick={lessCounter}>Less {num}</button>
       </>
    )
} 

export default App
























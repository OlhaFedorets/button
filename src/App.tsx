import React, {MouseEvent} from 'react';
import './App.css';

function App() {
    // const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello! I am Vasia!')
    // }
    //
    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello! I am Ivan!')
    // }

// const onClickHandler = (name: string) => {
//     console.log(name);
// }

    // const foo1 = () => {
    //     console.log(100200);
    // }
    //
    // const foo2 = (num: number) => {
    //     console.log(num)
    // }

    return (
        <div className="App">
            {/*<button onClick={(event)=>{console.log('Hello!')}}>MyYouTubeChanel-1</button>*/}
            {/*<button onClick={(event:MouseEvent<HTMLButtonElement>)=>onClickHandler('Vasia')}>MyYouTubeChanel-1</button>*/}
            {/*<button onClick={(event:MouseEvent<HTMLButtonElement>)=>onClickHandler('Ivan')}>MyYouTubeChanel-2</button>*/}

            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={()=>foo2(100200)}>2</button>*/}

            <button>MyYouTubeChanel-1</button>
            <button>MyYouTubeChanel-2</button>

        </div>
    );
}

export default App;

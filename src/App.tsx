import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from "./components/Button";

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

    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }

    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button3Foo = () => {
        console.log('I am stupid button')
    }


    return (
        <div className="App">
            {/*<button onClick={(event)=>{console.log('Hello!')}}>MyYouTubeChanel-1</button>*/}
            {/*<button onClick={(event:MouseEvent<HTMLButtonElement>)=>onClickHandler('Vasia')}>MyYouTubeChanel-1</button>*/}
            {/*<button onClick={(event:MouseEvent<HTMLButtonElement>)=>onClickHandler('Ivan')}>MyYouTubeChanel-2</button>*/}

            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={()=>foo2(100200)}>2</button>*/}

            {/* eslint-disable-next-line react/jsx-no-undef */}

            <Button name={'MyYouTubeChanel-1'} callBack={()=>Button1Foo('Hello! I am Vasia!', 21, 'Live in Minsk')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={()=>Button2Foo('Hello! I am Ivan!')}/>
            <Button name={'Stupid Button'} callBack={Button3Foo}/>

        </div>
    );
}

export default App;

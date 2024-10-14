import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {useState} from "react";

// function App() {
//
//     const Button1Foo = (subscriber: string, age: number, address: string) => {
//         console.log(subscriber, age, address)
//     }
//
//     const Button2Foo = (subscriber: string) => {
//         console.log(subscriber)
//     }
//
//     const Button3Foo = () => {
//         console.log('I am stupid button')
//     }
//
//
//     return (
//         <div className="App">
//             <Button name={'MyYouTubeChanel-1'} callBack={()=>Button1Foo('Hello! I am Vasia!', 21, 'Live in Minsk')}/>
//             <Button name={'MyYouTubeChanel-2'} callBack={()=>Button2Foo('Hello! I am Ivan!')}/>
//             <Button name={'Stupid Button'} callBack={Button3Foo}/>
//         </div>
//     );
// }






// function App() {
//
//     const ButtonFoo = (id: number, subscriber?: string, age?: number, address?: string) => {
//         if (id === 1) {
//             console.log(subscriber, age, address)
//         } else if (id === 2) {
//             console.log(subscriber)
//         } else {
//             console.log('I am Stupid Button')
//         }
//     }
//
//
//
//     return (
//         <div className="App">
//
//             <Button name={'MyYouTubeChanel-1'} callBack={()=>ButtonFoo(1, 'Hello! I am Vasia!', 21, 'Live in Minsk')}/>
//             <Button name={'MyYouTubeChanel-2'} callBack={()=>ButtonFoo(2,  'Hello! I am Ivan!')}/>
//             <Button name={'Stupid Button'} callBack={()=>ButtonFoo(3, 'Stupid Button')}/>
//
//         </div>
//     );
// }



function App() {

    const [buttons, setButtons] = useState([
        {id:1, name: 'MyYouTubeChanel-1', subscriber: 'Hello! I am Vasia!', age: 21, address: 'Live in Minsk'},
        {id:1, name: 'MyYouTubeChanel-2', subscriber: 'Hello! I am Ivan!'},
        {id:1, name: 'Stupid Button'}
        ]);

    const ButtonFoo = (id: number, subscriber?: string, age?: number, address?: string) => {
        if (id === 1) {
            console.log(subscriber, age, address)
        } else if (id === 2) {
            console.log(subscriber)
        } else {
            console.log('I am Stupid Button')
        }
    }

       return (
        <div className="App">

            {buttons.map(el => {
                return (
                    <Button key={el.id} name={el.name} callBack={()=>ButtonFoo(el.id, el.subscriber, el.age, el.address)}/>
                    )

            })}

        </div>
    );
}





export default App;

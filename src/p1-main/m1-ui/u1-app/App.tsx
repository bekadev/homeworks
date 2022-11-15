import React from 'react'
import s from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from "../../../p2-homeworks/h2/HW2";
import HW3 from "../../../p2-homeworks/h3/HW3";
import HW4 from '../../../p2-homeworks/h4/HW4';
import {MicroTasksInputComponent} from '../../../MicroTasks/MicroTasksInputComponent';


function App() {
    const styeTitle = {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '22px',
        lineHeight: '27px',
        color: '#000000',
        marginLeft: '20px'
    }
    const styleArow = {
        border: '1px solid #D9D9D9',
        marginBottom: '20px',
        marginTop: '20px'
    }
    return (
        <div className={s.App}>
            <div style={styeTitle}>Hometask № 1</div>
            <div style={styleArow}></div>
            <HW1/>
            <div style={styleArow}></div>
            <div style={styeTitle}>Hometask № 2</div>
            <div style={styleArow}></div>
            <HW2/>
            <div style={styleArow}></div>
            <div style={styeTitle}>Hometask № 3</div>
            <div style={styleArow}></div>
            <HW3/>
            <div style={styleArow}></div>
            <div style={styeTitle}>Hometask № 4</div>
            <div style={styleArow}></div>
            <HW4/>
            <div style={styleArow}></div>
            <div style={styeTitle}>Hometask № 5</div>
            <div style={styleArow}></div>
            {/*<HW5/>*/}

            {/*Testing code for microtasks*/}
            <MicroTasksInputComponent />

        </div>
    )
}

export default App

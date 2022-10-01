
import React, {useState} from "react";

export default function TrafficLight(){
    const [color, setLight] = React.useState(str)
    var str = ""
    function showLightRed(){
        str = "red"
        setLight(str)
    }
    function showLightYellow(){
        str = "yellow"
        setLight(str)
    }
    
    function showLightGreen(){
        str = "green"
        setLight(str)
    }
    
    const colors = ["red","yellow", "green"]

    function cycle(){
        let count = 0
        globalThis.cycleStart = setInterval(() => {
            if(count !== 3){
                str = colors[count]
                setLight(str)
                console.log(str)
                count++
            }else{
                count =0
            }
               
        }, 1000);
    }

    function stop(){
        str = ""
        setLight(str)
        clearInterval(cycleStart)
    }



    
    return(
        <>


        <div className="main-trafic">
            <div onClick={showLightRed} className={"red-light" +(color=== "red"? "-glow": "")}></div>
            <div onClick={showLightYellow} className={"yellow-light" + (color === "yellow"? "-glow":"")}></div>
            <div onClick={showLightGreen} className={"green-light" + (color === "green"? "-glow":"")}></div>
            <button onClick={cycle}>Click Me</button>
            <button onClick={stop}>Stop</button>

        </div>
        </>
    )
}
import React, { useState } from "react";

const TrafficLight = () => {
    
    const [selected, setSelected] = useState("red");
    
    const [lights, setLights] = useState(["red", "orange", "green"]);

    return (
        <div className="scene">
            <div className="hanging-traffic-light">
                <div className="cable"></div>
                <div className="traffic-light-box">
                    
                    {lights.map((color) => {
                        return (
                            <div
                                key={color}
                                onClick={() => setSelected(color)}
                                className={`light ${color} ${selected === color ? "glow" : ""}`}
                            ></div>
                        );
                    })}
                </div>
            </div>

            <div className="button-container">
                <button
                    className="lightChange"
                    onClick={() => {
                        if (selected === "red") {
                            setSelected("green");
                        } else if (selected === "green") {
                            setSelected("orange");
                        } else if (selected === "orange") {
                            setSelected("red");
                        }
                    }}
                >
                    Pulsar para cruzar
                </button>
            </div>
        </div>
    );
};

export default TrafficLight;


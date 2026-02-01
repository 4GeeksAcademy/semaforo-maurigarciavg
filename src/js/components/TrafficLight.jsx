import React, { useState } from "react";

const TrafficLight = () => {
    // Estado para saber cuál brilla actualmente
    const [selected, setSelected] = useState("red");
    // Estado para la lista de luces (para que sea dinámico)
    const [lights, setLights] = useState(["red", "orange", "green"]);

    return (
        <div className="scene">
            <div className="hanging-traffic-light">
                <div className="cable"></div>
                <div className="traffic-light-box">
                    {/* Generamos las luces dinámicamente según el array */}
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


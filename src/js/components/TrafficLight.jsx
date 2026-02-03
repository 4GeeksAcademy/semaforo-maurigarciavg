import React, { useState } from "react";

const TrafficLight = () => {

    const [selected, setSelected] = useState("red");

    const [lights, setLights] = useState(["red", "orange", "green"]);

    const addPurple = () => {

        if (!lights.includes("purple")) {
            setLights([...lights, "purple"]);
        } else {
            null
        }
    };

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
                       const currentIndex = lights.indexOf(selected);
                        const nextIndex = (currentIndex + 1) % lights.length;
                        setSelected(lights[nextIndex]);
                    }}
                >
                    Pulsar para cruzar
                </button>

                <button className="addPurple" onClick={addPurple}>Añadir morado</button>
            </div>
        </div >
    );
};

export default TrafficLight;


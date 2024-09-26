import '../css/plan.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React, {useState} from "react";
import { Map, Marker, Tooltip } from 'react-canvas-map'
import checkmark from '../assets/marker-blue.png'
import {Dropdown} from "semantic-ui-react";
import {createRoot} from "react-dom/client";


const json = [
    {
        "key": "1",
        "salle": "A001",
        "coords": {x: 325, y: 550},
        "occupation": "libre",
    },
    {
        "key": "2",
        "salle": "A002",
        "coords": {x: 325, y: 180},
        "occupation": "occupée",
    },
    {
        "key": "3",
        "salle": "A003",
        "coords": {x: 700, y: 180},
        "occupation": "occupée",
    },
    {
        "key": "4",
        "salle": "A004",
        "coords": {x: 750, y: 550},
        "occupation": "libre",
    },
    {
        "key": "5",
        "salle": "A005",
        "coords": {x: 1150, y: 550},
        "occupation": "libre",
    },
    {
        "key": "6",
        "salle": "A006",
        "coords": {x: 1150, y: 180},
        "occupation": "occupée",
    },

]

const json2 = [
    {
        salle1 : "AA001",
        salle2 : "BA002",
        answer : "La salle se trouve en face",
},{
        salle1 : "AA001",
        salle2 : "BA003",
        answer : "La salle se trouve en face à droite",
},{
        salle1 : "AA001",
        salle2 : "BA004",
        answer : "La salle se trouve à droite",
},{
        salle1 : "AA001",
        salle2 : "BA005",
        answer : "La salle se trouve au fond à droite",
},{
        salle1 : "AA001",
        salle2 : "BA006",
        answer : "La salle se trouve au fond à gauche",
},{
        salle1 : "AA002",
        salle2 : "BA001",
        answer : "La salle se trouve en face",
},{
        salle1 : "AA002",
        salle2 : "BA003",
        answer : "La salle se trouve à gauche de votre point de départ",
},{
        salle1 : "AA002",
        salle2 : "BA004",
        answer : "La salle se trouve en face à gauche",
},{
        salle1 : "AA002",
        salle2 : "BA005",
        answer : "La salle se trouve à gauche puis en face",
},{
        salle1 : "AA002",
        salle2 : "BA006",
        answer : "La salle se trouve à gauche puis en face et à gauche",
},{
        salle1 : "AA003",
        salle2 : "BA001",
        answer : "La salle se trouve en face à droite",
},{
        salle1 : "AA003",
        salle2 : "BA002",
        answer : "La salle se trouve à droite de votre point de départ",
},{
        salle1 : "AA003",
        salle2 : "BA004",
        answer : "La salle se trouve en face",
},{
        salle1 : "AA003",
        salle2 : "BA005",
        answer : "La salle se trouve à gauche",
},{
        salle1 : "AA003",
        salle2 : "BA006",
        answer : "La salle se trouve à gauche puis en face et à gauche",
},{
        salle1 : "AA004",
        salle2 : "BA001",
        answer : "La salle se trouve tout de suite à gauche",
},{
        salle1 : "AA004",
        salle2 : "BA002",
        answer : "La salle se trouve en face à gauche",
},{
        salle1 : "AA004",
        salle2 : "BA003",
        answer : "La salle se trouve en face",
},{
        salle1 : "AA004",
        salle2 : "BA005",
        answer : "La salle se trouve à droite",
},{
        salle1 : "AA004",
        salle2 : "BA006",
        answer : "La salle se trouve au fond à droite",
},{
        salle1 : "AA005",
        salle2 : "BA001",
        answer : "La salle se trouve au fond à gauche",
},{
        salle1 : "AA005",
        salle2 : "BA002",
        answer : "La salle se trouve au fond à droite",
},{
        salle1 : "AA005",
        salle2 : "BA003",
        answer : "La salle se trouve en face à droite",
},{
        salle1 : "AA005",
        salle2 : "BA004",
        answer : "La salle se trouve au face à droite",
},{
        salle1 : "AA005",
        salle2 : "BA006",
        answer : "La salle se trouve tout de suite à droite",
},{
        salle1 : "AA006",
        salle2 : "BA001",
        answer : "La salle se trouve à gauche puis au fond à gauche",
},{
        salle1 : "AA006",
        salle2 : "BA002",
        answer : "La salle se trouve à gauche puis au fond à droite",
},{
        salle1 : "AA006",
        salle2 : "BA003",
        answer : "La salle se trouve à gauche puis tout de suite à droite",
},{
        salle1 : "AA006",
        salle2 : "BA004",
        answer : "La salle se trouve à gauche puis tout de suite à gauche",
},{
        salle1 : "AA006",
        salle2 : "BA005",
        answer : "La salle se trouve tout de suite à gauche",
            }
    ]

export default function Plan() {
    let varposition = null
    let vardestination = null
    const [markerImage] = useState(() => {
        const image = new Image()
        image.src = checkmark
        return image
    })
    const markers = json
    const [activeMarker, setActiveMarker] = useState(null)

    const sallesOptions = json.map(function(value)
        {
           return{
                key: value.key,
                value: "A" + value.salle,
               text: value.salle,
           }
        }
    )
    const sallesOptions2 = json.map(function(value)
        {
            return{
                key: value.key,
                value: "B" + value.salle,
                text: value.salle,
            }
        }
    )
    function onChangePosition(event, data) {
        if(data.value.substring(0,2) === "AA") {
            varposition = data.value
        }
        if(data.value.substring(0,2) === "BA"){
            vardestination = data.value
        }

        if(varposition != null && vardestination != null){
            console.log(varposition)
            console.log(vardestination)
            let div = document.getElementById('dropanswer')
            let p = ""
            json2.map((way)  => {
                if (varposition === way.salle1 && vardestination === way.salle2 &&( p === "" || p === "La sélection est incorrecte")) {
                    p = way.answer
                }
                if (p === "")p = "La sélection est incorrecte"
                else return ""
            })
            console.log(p)
            const root = createRoot(div);
            root.render(p);

        }
    }

    return (
        <div className='planheader'>
            <Header />
            <div className='dropdowns'>
                <div>
                    <Dropdown
                        onChange={onChangePosition}
                        placeholder='Position actuelle'
                        fluid
                        selection
                        options={sallesOptions}
                    />
                </div>
                <div>
                    <Dropdown
                        onChange={onChangePosition}
                        placeholder='Destination'
                        fluid
                        selection
                        options={sallesOptions2}
                    />
                </div>
            </div>
            <div id='dropanswer'>

            </div>
            <div className='canvasdiv' style={{height: '70vh', border: '1px solid #474747', margin: '100px 20px 100px 20px'}}>
                <Map
                    image="plan.jpg"
                    onClick={() => {
                        setActiveMarker(null)
                    }}
                >
                    {markers.map((marker) => {

                        const active = marker.key === activeMarker
                        return (
                            <React.Fragment key={marker.key}>
                                <Marker
                                    markerKey={marker.key}
                                    coords={marker.coords}
                                    image={markerImage}
                                    onClick={() => {
                                        setActiveMarker(marker.key)
                                    }}
                                />
                                {active && (
                                    <Tooltip coords={marker.coords}>
                                        <p>La salle {marker.salle} est {marker.occupation}</p>
                                    </Tooltip>
                                )}
                            </React.Fragment>
                        )
                    })}
                </Map>
            </div>


            <Footer/>
        </div>
    )
}

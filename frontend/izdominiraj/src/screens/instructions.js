import React, { Component } from "react";
import "../App.css";
import {
  Container, Button
} from "reactstrap";
const background = require('../domino.jpg');
const divStyle = {
    
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center top' 
};

class Instructions extends Component {
    handleBack =() => {
        this.props.history.push('/');
    }
    render() {
        return(
            <div className="App-header" style={divStyle} >
                <div style={{"position": "absolute", "left": "0",  "margin-left": "20px", "top":"2%"}}>
                        <Button onClick={this.handleBack} >Natrag</Button>
                </div>
                
                <Container className="App-tekst col-md-6 center ">
                    <br/>
                    <h5 style={{ color: "#000000" }}>                      
                        Dominiraj je igra slična klasičnom Dominu, ali uz proširenje koje omogućuje testiranje i 
                        proširivanje općeg znanja igrača. Umjesto točki, kao na klasičnom Dominu, Dominiraj pločice na 
                        sebi imaju dva obojana polja koja predstavljaju kategoriju pitanja. 
                    </h5>
                    <br/>
                    <h5 style={{ color: "#000000" }}>
                        Žuto polje predstavlja pitanja iz umjetnosti, crveno geografiju, plavo sport, zeleno znanost, narančasto povijest, 
                        a rozo pitanja o Republici Hrvatskoj. Igrač na početku dobije pet pločica i jednu postavljenu u 
                        polje za igranje. Klikom na jednu od pet ponuđenih pločica igrač izabire onu koju želi složiti na 
                        posljednju postavljenu u polje. 
                    </h5>
                    <br/>
                
                    <h5 style={{ color: "#000000" }}> 
                        Može složiti pločice samo tako da su im strane koje se dodiruju 
                        istih boja. Kada složi jedan takav par, dobije pitanje iz kategorije koju je upario. Odgovori li 
                        točno za to dobiva pet bodova, no odgovori li krivo pločica koju je složio izlazi iz polja i iz 
                        cijele igre što mu smanjuje šanse za postizanje cilja te dobiva dva negativna boda. Ukoliko ima 
                        kod sebe manje od osam pločica, igrač može pritiskom gumba zatražiti novu pločicu. Pločice se 
                        slažu u obliku zmije s početkom u donjem lijevom kutu i krajem u gornjem lijevom. 
                    </h5>
                    <br/>
                    <h5 style={{ color: "#000000" }}>
                        Za pobjedničku zmiju igrač mora složiti 30 pločica. Igrač ne može nastaviti igru, ako u ruci ima osam pločica,
                        a niti jednu ne može staviti na polje. 
                    </h5>
                    <br/>
                </Container>
            </div>
        );
    };
};

export default Instructions;
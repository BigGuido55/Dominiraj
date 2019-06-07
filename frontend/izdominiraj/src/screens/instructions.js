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
                        a rozo pitanja o Republici Hrvatskoj. Igrač na početku uzima tri pločice. Pločica se bira pritiskom na gumb jedne
                        polovice pločice. Prvu pločicu može odabrati bilo koju dok ostale može birati samo onu kategoriju koja je zadnja
                        u nizu domina, nebitno na kojoj je polovici pločice koju bira. Ukoliko se odgovori točno na pitanje, pločica se
                        miče iz "ruke" i stavlja se na polje u niz.
                    </h5>
                    <br/>
                
                    <h5 style={{ color: "#000000" }}> 
                        Svaki točan odgovor nosi pet bodova, dok krivi odgovor nosi negativnih dva boda. Ukoliko se u ruci nalazi 8 pločica i igrač ne može uzeti niti jednu pločicu da
                        nastavi niz te igrač želi izvući još jednu pločicu, to mu se onemogućava i gubi igru.
                    </h5>
                    <br/>
                    <h5 style={{ color: "#000000" }}>
                        Igra se pobjeđuje kada se napravi niz od 10 domino pločica. Ako igrač nema niti jednu pločicu u ruci, ima pravo
                        vući jednu po jednu sve dok ne dobije odgovarajuću pločicu.
                    </h5>
                    <br/>
                </Container>
            </div>
        );
    };
};

export default Instructions;
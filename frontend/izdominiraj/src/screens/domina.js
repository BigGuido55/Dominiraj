import React, { Component } from "react";
import "../App.css";
import {
    ButtonGroup,
  Container,
  
  Button
} from "reactstrap";
import QuestionModal from "./questionModal";
import axios from "axios";

class Domina extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            question: {},
            odgovori: [],
            modal: false
        };
    }

    toggle = () => {
        
        this.setState({
          modal: !this.state.modal            
        });
    };

    handleGetQuestion = (cat, broj) =>{
        if (broj !== this.props.zadnji && this.props.zadnji !== 0){
            alert("NE MOŽE");
            return;

        }

        
        /*if (cat !== null){
            var ress = cat.substring(0, cat.length - 1);
            console.log(ress);
        }*/
        
        console.log(cat);
        if (typeof(cat) !== 'undefined'){
            axios({
                method: "GET",
                url:
                  "http://localhost:59487/api/domino/question?category=" + cat,
                headers: { "Content-Type": "application/json"}
              }).then(res => {
                console.log(
                  "Ovo su podaci koje dobiješ nazad od servera. ",
                  res.data
                ); 
                var array = [];
                array.push(res.data.wrongAnswer1);
                array.push(res.data.wrongAnswer2);
                array.push(res.data.wrongAnswer3);
                array.push(res.data.correctAnswer); 
                //console.log(array);

                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }


                this.setState({
                  question: res.data,
                  odgovori: array
                });

              }).catch(err => {
                if (!err.response) {
                  alert('Nije moguće komunicirati sa poslužiteljem! Provjerite da li je upaljen..');
                  return;
                }    
                const code = err.response.status;    
                if (code >= 500) {
                    alert('Problem sa serverom! Pogledajte ispise..');
                    return;
                }    
                alert('Nepoznata greška! ' + JSON.stringify(err));
              });
            //console.log("prošao");
            this.toggle();
        }
        
    }

    render() {
        return(
            <Container style={{"width":"fit-content"}} id={this.props.identifikator}>
                <ButtonGroup  >
                {this.props.prva === 1 ? <Button size="lg" className="btn-art lg" onClick={() => this.handleGetQuestion("Umjetnost",this.props.prva)}>
                        <i class="fa fa-paint-brush"></i>
                    </Button> : null}
                {this.props.prva === 2 ? <Button size="lg" className="btn-geo lg" onClick={() => this.handleGetQuestion("Geografija",this.props.prva)}>
                        <i class="fa fa-globe"> </i>
                    </Button> : null}
                {this.props.prva === 3 ? <Button size="lg" className="btn-sport lg" onClick={() => this.handleGetQuestion("Sport",this.props.prva)}>
                        <i class="fa fa-soccer-ball-o"></i>
                    </Button> : null}
                {this.props.prva === 4 ? <Button size="lg" className="btn-his lg" onClick={() => this.handleGetQuestion("Povijest",this.props.prva)} >
                        <i class="fa fa-history"></i>
                    </Button> : null}
                {this.props.prva === 5 ? <Button size="lg" className="btn-sci lg" onClick={() => this.handleGetQuestion("Znanost",this.props.prva)}>
                        <i class="fa fa-calculator"></i>
                    </Button> : null}
                {this.props.prva === 6 ? <Button size="lg" className="btn-cro lg" onClick={() => this.handleGetQuestion("Hrvatska",this.props.prva)}>
                        <i class="fa fa-heart"></i>
                    </Button> : null}


                {this.props.druga === 1 ? <Button size="lg" className="btn-art lg" onClick={() => this.handleGetQuestion("Umjetnost",this.props.druga)}>
                        <i class="fa fa-paint-brush"></i>
                    </Button> : null}
                {this.props.druga === 2 ? <Button size="lg" className="btn-geo lg" onClick={() => this.handleGetQuestion("Geografija",this.props.druga)}>
                        <i class="fa fa-globe"></i>
                    </Button> : null}
                {this.props.druga === 3 ? <Button size="lg" className="btn-sport lg" onClick={() => this.handleGetQuestion("Sport",this.props.druga)}>
                        <i class="fa fa-soccer-ball-o"></i>
                    </Button> : null}
                {this.props.druga === 4 ? <Button size="lg" className="btn-his lg" onClick={() => this.handleGetQuestion("Povijest",this.props.druga)}>
                        <i class="fa fa-history"></i>
                    </Button> : null}
                {this.props.druga === 5 ? <Button size="lg" className="btn-sci lg" onClick={() => this.handleGetQuestion("Znanost",this.props.druga)}>
                        <i class="fa fa-calculator"></i>
                    </Button> : null}
                {this.props.druga === 6 ? <Button size="lg" className="btn-cro lg" onClick={() => this.handleGetQuestion("Hrvatska",this.props.druga)}>
                        <i class="fa fa-heart"></i>
                    </Button> : null}
                </ButtonGroup>

                <QuestionModal
                    modal={this.state.modal}
                    toggle={this.toggle}
                    question={this.state.question}
                    odgovori={this.state.odgovori}
                    handleScoreChange={this.props.handleScoreChange} 
                    moveDomina={this.props.moveDomina}
                    identifikator={this.props.identifikator}
                    prva={this.props.prva}
                    druga={this.props.druga}
                    zadnji={this.props.zadnji}
                    setZadnji={this.props.setZadnji}/>
            </Container>

        );
    };
};

export default Domina;
import React, { Component } from "react";
import "../App.css";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  ModalFooter, 
  Button, ButtonGroup
} from "reactstrap";

class QuestionModal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          odgovori: []
        };
    }

    handlePicked = (e) => {
        console.log(e.target.value);
        console.log(this.props.correctAnswer);
        if (e.target.value === this.props.question.correctAnswer){
            console.log(this.props.zadnji);
            console.log('------------');
            this.props.handleScoreChange(5);
            this.props.moveDomina(this.props.identifikator);
            if (this.props.prva !== this.props.zadnji && this.props.zadnji !== 0){
                this.props.setZadnji(this.props.prva);
            }
            else {
                this.props.setZadnji(this.props.druga);
            }
            console.log(this.props.zadnji);
        }
        else {
            this.props.handleScoreChange(-2);
        }
        this.props.toggle();
    }
  
    render() {
        return(
            <Modal 
              isOpen={this.props.modal}
              toggle={this.props.toggle}>
              <ModalHeader toggle={this.props.toggle}>Pitanje iz teme: {this.props.question.category}</ModalHeader>
              <ModalBody >
                <Container>
                    <div>
                        {this.props.question.questionText}
                    </div>
                </Container>
              </ModalBody>
                <ModalFooter >
                    <div>
                    
                    {this.props.odgovori.map(o => (   
                        <ButtonGroup  className="col-md-6 col-md-offset-6" >                            
                               <Button value = {o} color="primary-bez" onClick = {this.handlePicked}>
                                {o}
                                </Button>
                        </ButtonGroup>
                    ))}                  
                    
                    
                  </div>
                </ModalFooter>
            </Modal>
        );
    };
};

export default QuestionModal;
import React, { Component } from "react";
import "../App.css";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  ModalFooter, 
  Button, Label, ButtonGroup
} from "reactstrap";

class QuestionModal extends Component {
  
    render() {
        return(
            <Modal 
              isOpen={this.props.modal}
              toggle={this.props.toggle}>
              <ModalHeader toggle={this.props.toggle}>Pitanje iz teme: </ModalHeader>
              <ModalBody >
                <Container>
                    <Label>
                        Ovdje ide pitanje
                    </Label>
                </Container>
              </ModalBody>
                <ModalFooter >
                    <div>
                    <ButtonGroup className="col-md-12 ">
                        <Button color="primary" >
                            Odgovor 1
                        </Button>
                        <Button color="primary-bez" >
                            Odgovor 2
                        </Button>                  
                    </ButtonGroup>
                    <ButtonGroup className="col-md-12 ">
                        <Button color="primary">
                            Odgovor 3
                        </Button>
                        <Button color="primary-bez">
                            Odgovor 4
                        </Button>
                    </ButtonGroup>
                  </div>
                </ModalFooter>
            </Modal>
        );
    };
};

export default QuestionModal;
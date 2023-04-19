import React, { useState , ScrollView} from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Grid, Stack, Typography, Box } from '@mui/material';
import 'react-bpmn';

export default function ClassDiagram() {
  
  return (
    <>
      <Helmet>
        <title> Communication Diagram Tutorial </title>
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
        <img src="/assets/images/diagram/communication_diagram.png" alt="communication_diagram" />
          Definition of Communication Diagram
        </Typography>
        <p>
        A communication diagram, also known as a collaboration diagram, is a type of UML (Unified Modeling Language)
        diagram used to depict the interactions between objects or actors in a system to achieve a specific goal or task.
        It shows the sequence of messages exchanged between the objects or actors, and the order in which they occur.
        </p>
        <p>
        In a communication diagram, the objects or actors are represented as rectangular boxes with their name and optional stereotype. 
        The messages exchanged between them are represented as directed arrows with optional sequence numbers and message names. 
        The time proceeds from top to bottom, and the order of the messages is shown by the order in which they appear on the diagram.
        </p>
        <p>
          Here are some of the features and concepts about communication diagram:
        </p>
        <li>
        <strong>Object</strong>: represents an instance of a class or a component that can perform actions or receive messages.
        </li>
        <li>
        <strong>Actor</strong>: represents an external entity that interacts with the system and can initiate or receive messages.
        </li>
        <li>
        <strong>Message</strong>: represents a communication between two objects or actors that triggers an action or a response.
        </li>
        <li>
        <strong>Lifeline</strong>: represents the lifespan of an object or actor during the interaction and is shown as a vertical dashed line.
        </li>
        <li>
        <strong>Activation</strong>: represents the period during which an object or actor is actively processing a message and is shown as a horizontal rectangle on the lifeline.
        </li>
        <li>
        <strong>Self-message</strong>: represents a message that an object or actor sends to itself to trigger an action or a response.
        </li>
        <li>
        <strong>Synchronous message</strong>: represents a message that requires a response from the receiver before the sender can continue.
        </li>
        <li>
        <strong>Asynchronous message</strong>: represents a message that does not require an immediate response from the receiver and allows the sender to continue without waiting.
        </li>
        <li>
        <strong>Combined fragment</strong>: represents a grouping of messages that follow a specific condition or constraint, such as an alternative, a loop, or a parallel behavior.
        </li>
        <br></br>
        <p>
        Communication diagrams are useful for analyzing and designing the interactions between objects or actors in a system, 
        identifying the sequence and timing of the messages exchanged, and detecting potential problems or bottlenecks in the communication flow. 
        They are also useful for communicating and documenting the design decisions and requirements of a system to developers and stakeholders.
        </p>
        <p>
          For more informations!:
          <a href="https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-communication-diagram/">
            What is communication diagram?
          </a>
        </p>
      </Container>
    </>
  );
}

import React, { useState , ScrollView} from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Grid, Stack, Typography, Box } from '@mui/material';
import BpmnViewer from 'bpmn-js';
import 'react-bpmn';


export default function ClassDiagram() {
  
  return (
    <>
      <Helmet>
        <title> Use Case Diagram Tutorial </title>
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
        <img src="/assets/images/diagram/use_case_diagram.png" alt="use_case_diagram" />
          Definition of Use Case Diagram
        </Typography>
        <p>
        A use case diagram is a type of UML (Unified Modeling Language) diagram used to depict the interactions between actors (users or external systems) 
        and a system to achieve specific goals or tasks. 
        It provides a high-level view of the functional requirements of a system and shows how users or 
        external systems interact with the system to perform tasks or activities.
        </p>
        <p>
        In a use case diagram, the actors are represented as stick figures, 
        and the use cases are represented as ovals with the name of the use case. 
        The actors and use cases are connected by associations or relationships, 
        which represent the interactions or activities between them.
        </p>
        <p>
          Here are some of thefeatures and concepts about use-case diagram:
        </p>
        <li>
        <strong>Actor</strong>: represents a user or an external system that interacts with the system to perform a task or activity.
        </li>
        <li>
        <strong>Use case</strong>: represents a specific functionality or a task that the system provides to the actors to achieve a goal or solve a problem.
        </li>
        <li>
        <strong>Association</strong>: represents the relationship between an actor and a use case and shows that the actor is involved in the use case.
        </li>
        <li>
        <strong>Include relationship</strong>: represents a relationship between two use cases where one use case includes the functionality of another use case.
        </li>
        <li>
        <strong>Extend relationship</strong>: represents a relationship between two use cases where one use case extends the functionality of another use case under specific conditions or exceptions.
        </li>
        <li>
        <strong>Generalization</strong>: represents a relationship between two actors or use cases where one actor or use case inherits the properties and behaviors of another actor or use case.
        </li>
        <br></br>

        <p>
        Use case diagrams are useful for identifying the functional requirements and goals of a system, 
        defining the scope and boundaries of the system, and clarifying the interactions between users or external systems and the system. 
        They are also useful for communicating and documenting the functional requirements and use cases of a system to developers and stakeholders.
        </p>
        
        <p>
          For more informations!:
          <a href="https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-use-case-diagram/">
            What is use-case diagram?
          </a>
        </p>

      </Container>
    </>
  );
}

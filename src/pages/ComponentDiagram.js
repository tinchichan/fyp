import React, { useState , ScrollView} from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Grid, Stack, Typography, Box } from '@mui/material';
import 'react-bpmn';

export default function ClassDiagram() {
  return (
    <>
      <Helmet>
        <title> Component Diagram Tutorial </title>
      </Helmet>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
        <img src="/assets/images/diagram/component_diagram.png" alt="component_diagram" />
          Definition of Component Diagram
        </Typography>
        <p>
        A component diagram is a type of UML (Unified Modeling Language) 
        diagram used to model the physical components of a system and the relationships between them.
        It shows the organization and dependencies of the components in a system and their interactions with each other.
        </p>
        <p>
        In a component diagram, the components are represented as rectangular boxes with their name and optional stereotype, 
        which describes the role of the component. The components can be further decomposed into smaller components or other artifacts, 
        such as classes, interfaces, or other components. The dependencies between the components are shown as directed arrows with optional labels.
        </p>
        <p>Here are some of the features and concepts of component diagram:</p>
        <li>
        <strong>Component</strong>: represents a modular and independent unit of a system that performs a specific function or service.
        </li>
        <li>
        <strong>Interface</strong>: represents the external view of a component and defines the services that it provides or requires from other components.
        </li>
        <li>
        <strong>Port</strong>: represents a point of interaction between a component and its environment or other components, and can be connected to a corresponding port on another component.
        </li>
        <li>
        <strong>Connector</strong>: represents the communication or interaction between components, and can be either simple or complex.
        </li>
        <li>
        <strong>Dependency</strong>: represents a relationship between two components where one component depends on another component for some service or functionality.
        </li>
        <li>
        <strong> Provided and required interfaces</strong>: represents the interface that a component provides to other components or the interface that a component requires from other components, respectively.
        </li>
        <li>
        <strong>Deployment node</strong>: represents a physical or logical computing resource on which a component is deployed, such as a server or a container.
        </li>
        <li>
        <strong>Artifact</strong>: represents a physical or digital element of the system, such as a file, a library, or a database.
        </li>
        <br></br>
        <p>
        Component diagrams are useful for designing and documenting the architecture of a system, 
        identifying the dependencies and interactions between its components, 
        and facilitating communication and collaboration between developers and stakeholders.
        </p>
        <p>
          For more informations!:
          <a href="https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-component-diagram/">
            What is component diagram?
          </a>
        </p>
      </Container>
    </>
  );
}

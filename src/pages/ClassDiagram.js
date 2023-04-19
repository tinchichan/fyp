import React, { useState , ScrollView} from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Grid, Stack, Typography, Box, Divider } from '@mui/material';
import 'react-bpmn';
export default function ClassDiagram() {
  
  return (
    <>

      <Helmet>
        <title> Class Diagram Tutorial </title>
      </Helmet>


      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
        <img src="/assets/images/diagram/class_diagram.png" alt="class_diagram" />
          Definition of Class Diagram
        </Typography>
        <Divider component="div" role="presentation"/>
        <p>A class diagram is a type of UML (Unified Modeling Language) diagram used to represent the structure and relationships of classes and objects in an object-oriented programming language. 
            It is a graphical representation of the classes, interfaces, associations, and their relationships.
        </p>
        <p>
          In a class diagram, classes are depicted as boxes with the class name, attributes, and methods. The attributes represent the properties of the class, 
          and the methods represent the behavior of the class. 
          The relationships between classes are represented by different types of lines connecting the boxes.
        </p>
        <p>
          There are various types of relationships that can be depicted in a class diagram, including inheritance, 
          aggregation, composition, and association. Inheritance represents the "is-a" relationship between classes,
          where one class is a subclass of another. Aggregation and composition represent "has-a" relationships, where one class has another class as a part or component. Association represents a general relationship between classes, such as a dependency or a connection.
        </p>
        <p>
          There are some of the features of a class diagram with a brief explanation as following:
        </p>
        <li>
        <strong>Class</strong>: represents a blueprint or template for creating objects with similar properties and behaviors.
        </li>
        <li>
        <strong>Attribute</strong>: represents a property or characteristic of a class, such as its name, size, or color.
        </li>
        <li>
        <strong>Method</strong>: represents a behavior or action that a class can perform, such as calculating a value or changing an attribute.
        </li>
        <li>
        <strong>Inheritance</strong>: represents a relationship between classes where one class (the subclass) inherits properties and methods from another class (the superclass).
        </li>
        <li>
        <strong>Association</strong>: represents a relationship between two classes, indicating that instances of one class are connected to instances of another class.
        </li>
        <li>
        <strong>Multiplicity</strong>: indicates how many instances of a class can be associated with instances of another class, such as one-to-one, one-to-many, or many-to-many.
        </li>
        <li>
        <strong>Aggregation</strong>: represents a relationship between two classes where one class (the container) contains instances of another class (the contained).
        </li>
        <li>
        <strong>Composition</strong>: represents a type of aggregation where the contained class cannot exist independently of the container class.
        </li>
        <li>
        <strong>Interface</strong>: represents a collection of methods that a class can implement to fulfill a particular role or functionality.
        </li>
        <li>
        <strong>Abstract class</strong>: represents a class that cannot be instantiated on its own and must be subclassed to be used.
        </li>
        <li>
        <strong>Dependency</strong>: represents a relationship between two classes where one class uses or depends on the other class in some way.
        </li>
        <br></br>
        <p>
          Class diagrams are useful in software design and development, 
          as they provide a visual representation of the software system, 
          making it easier to understand and communicate the relationships between different components of the system.
        </p>
        <p>
          For more informations!:
          <a href="https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-class-diagram/">
            What is class diagram?
          </a>
        </p>

      </Container>
    </>
  );
}

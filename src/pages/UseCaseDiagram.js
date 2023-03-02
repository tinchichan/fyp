import React, { useState , ScrollView} from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Grid, Stack, Typography, Box } from '@mui/material';
import BpmnViewer from 'bpmn-js';
import 'react-bpmn';
import Quiz from '../components/quiz'

// testing 2 question
const questions = [
  {
    question: "where are you?",
    options: [
      {answer : "hk" , correct : true},
      {answer : "uk" , correct : false},
      {answer : "us" , correct : false},
      {answer : "jp" , correct : false}
    ],
  },
  {
    question: "who are you?",
    options: [
      {answer : "a" , correct : false},
      {answer : "b" , correct : false},
      {answer : "c" , correct : false},
      {answer : "d" , correct : true}
    ],
  }
]

export default function ClassDiagram() {
  
  return (
    <>
      <Helmet>
        <title> Use Case Diagram Tutorial </title>
      </Helmet>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Definition of Use Case Diagram
        </Typography>
      <Quiz questions={questions}/>
      </Container>
    </>
  );
}

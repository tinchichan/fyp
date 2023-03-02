import React, { useState , ScrollView} from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Grid, Stack, Typography, Box, Divider } from '@mui/material';
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
        <title> Class Diagram Tutorial </title>
      </Helmet>
      
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Definition of Class Diagram
        </Typography>
      <Divider component="div" role="presentation"/>
      <Quiz questions={questions}/>
      </Container>
    </>
  );
}

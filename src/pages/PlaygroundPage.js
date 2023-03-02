import React, { Component }  from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Grid, Stack, Typography } from '@mui/material';
import BpmnEditor from '../components/bpmnEditor';
import "../pages/dashboardContainer.css";

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> Playground - Free to draw your diagrams! </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Playground - Free to draw your diagrams!
        </Typography>

        <Grid>
          <BpmnEditor></BpmnEditor>
        </Grid>

      </Container>
    </>
  );
}
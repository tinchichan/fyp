import React, { Component }  from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Grid, Stack, Typography } from '@mui/material';
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
          <iframe src='https://tinchichan.github.io/custom-draw-io/'
                  title="embed draw"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
        />
        </Grid>

      </Container>
    </>
  );
}
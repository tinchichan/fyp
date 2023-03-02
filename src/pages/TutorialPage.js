import React, { Component }  from 'react';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Container, Stack, Typography } from '@mui/material';
// components
import { ProductSort, ProductList, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import Diagrams from '../_mock/products';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Diagrams | Minimal UI </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Diagrams Tutorials
        </Typography>

        <ProductList products={Diagrams} />
      </Container>
    </>
  );
}

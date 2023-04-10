import React, { Component }  from 'react';
import { Helmet } from 'react-helmet-async';
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components


// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Game Time</title>
      </Helmet>

          <h1>Let's play the Game!</h1>
          <div>
            <iframe frameBorder="0" src="https://tinchichan.github.io/fyp-software-engineering-monogatari/" width="100%" height="800"></iframe>
          </div>

    </>
  );
}

import React, { Component }  from 'react';
import PropTypes from 'prop-types';
// @mui
import { Box, Card, Typography, Stack, Button} from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { Router,Route, Routes,useNavigate, Link } from "react-router-dom";
import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/label';
import { ColorPreview } from '../../../components/color-utils';


// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '85%',
  objectFit: 'fill',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object
};



export default function ShopProductCard({ product }) {
  const { name, cover, status, link } = product;

  const navigate = useNavigate();

  const handleClick = () => {
  navigate('/dashboard', { replace: true });
  };

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
        <StyledProductImg alt={name} src={cover} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
          <Typography variant="subtitle2" noWrap>
              <Button component={Link} to={link} variant="contained" color="primary">{name}</Button>
          </Typography>
      </Stack>
    </Card>
  );
}

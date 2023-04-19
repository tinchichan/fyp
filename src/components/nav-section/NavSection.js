import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, List, ListItemText } from '@mui/material';
//
import { StyledNavItem, StyledNavItemIcon } from './styles';

// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }) {
  const final_array = data.filter((items) => {
    if (sessionStorage.getItem('auth-token') == "student123"){
      if (items.title == 'user' || items.title == 'login') {
        return false
      } else {
        return true
      }
    } else {
      if (items.title == 'login'){
        return false;
      }
      return true
    }
  })
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {final_array.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }) {
  const { title, path, icon, info } = item;

  if (title == 'user') {
    if(sessionStorage.getItem('auth-token') == "admin123") {
      console.log('good token. Log in.')
      
    } else if (sessionStorage.getItem('auth-token') == "student123"){
      console.log('good token. Log in.')
      
    }
  }

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
}

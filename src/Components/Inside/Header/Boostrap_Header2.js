// import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import './Header2.css'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

// import './Header2.css'
import { filterInfoAction, reqFilterAction, SelectreqFilter } from '../../Redux_toolkit/Redux_Slice';
import { useDispatch, useSelector } from 'react-redux';
import FilterAltIcon from '@mui/icons-material/FilterAlt';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const  Boostrap_Header=({show,lenght})=> {
    // let selectReqFilterredux=useSelector(SelectreqFilter)
    let selectReqFilterredux=useSelector(store=>store.info.reqFilter)


let dispatch=useDispatch()

let handleFilters=(req)=>
{dispatch(reqFilterAction(req))


dispatch({
  type:'reqFilterAction',
  payload:req
})
}




let handleFiltersPageClick=()=>{
  dispatch(filterInfoAction({
    active:true
  }))


  dispatch({
    type:'filterInfoAction',
    payload:{
      active:true
    }
  })
}





  
    const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
       <Link to='/search'
          className='Header2_inside_right_searchLink'

          onClick={()=>{
            window.scrollTo(0,0)
                    
                   }}
                   
          >
          <span
          className={!show ? 'Header2_inside_right_search': undefined}
          
          >
         <SearchRoundedIcon
         className='Header2_inside_right_searchIcon'
         />

            
            
Search</span>
          </Link>



      <MenuItem>
          <span
          className= {selectReqFilterredux==='' ?  'Header2_inside_right_span' : undefined}

          onClick={()=>handleFilters('')}
         
          >Relevance</span>
      </MenuItem>

      <MenuItem >
      <span

className= {selectReqFilterredux==='deliveryTime' ?  'Header2_inside_right_span':undefined}

          onClick={()=>handleFilters('deliveryTime')}
          
          >Delivery Time</span>
      </MenuItem>


      <MenuItem>
      <span
className= {selectReqFilterredux==='rating' ?  'Header2_inside_right_span': undefined}

          onClick={()=>handleFilters('rating')}
          
          
          >Rating</span>
      </MenuItem>

      <MenuItem>
      <span
className= {selectReqFilterredux==='costLowtoHign' ?  'Header2_inside_right_span' : undefined}  
          onClick={()=>handleFilters('costLowtoHign')}
          >Cost: Low To High</span>
      </MenuItem>


      <MenuItem>
      
      <span
className= {selectReqFilterredux==='costHightoLow' ? 'Header2_inside_right_span' :undefined}

          onClick={()=>handleFilters('costHightoLow')}

          
          >Cost: High To Low</span>
      </MenuItem>




      <MenuItem>
      <span
          onClick={handleFiltersPageClick}
    
          >
            
            Filters
            
            <FilterAltIcon
            className='Header2_inside_right_searchIcon'
            style={{color:'#db7c38 '}}
            />
            </span>
      </MenuItem>
     
    </Menu>
  );




// Header_2








  return (
    <Box sx={{ flexGrow: 1 }} bgcolor="error.main">
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}

<div className='Header2_inside_left'>
          <h2>{lenght} restaurants</h2>
        </div>          
         





          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

          <div className='Header2_inside_right'>
          <Link to='/search'
          className='Header2_inside_right_searchLink'

          onClick={()=>{
            window.scrollTo(0,0)
                    
                   }}
                   
          >
          <span
          className={!show ? 'Header2_inside_right_search': undefined}
          
          >
         <SearchRoundedIcon
         className='Header2_inside_right_searchIcon'
         />

            
            
Search</span>
          </Link>
          <span
          className= {selectReqFilterredux==='' ?  'Header2_inside_right_span' : undefined}

          onClick={()=>handleFilters('')}
         
          >Relevance</span>


          <span

className= {selectReqFilterredux==='deliveryTime' ?  'Header2_inside_right_span':undefined}

          onClick={()=>handleFilters('deliveryTime')}
          
          >Delivery Time</span>



          <span
className= {selectReqFilterredux==='rating' ?  'Header2_inside_right_span': undefined}

          onClick={()=>handleFilters('rating')}
          
          
          >Rating</span>



          <span
className= {selectReqFilterredux==='costLowtoHign' ?  'Header2_inside_right_span' : undefined}  
          onClick={()=>handleFilters('costLowtoHign')}
          >Cost: Low To High</span>



          <span
className= {selectReqFilterredux==='costHightoLow' ? 'Header2_inside_right_span' :undefined}

          onClick={()=>handleFilters('costHightoLow')}

          
          >Cost: High To Low</span>
          <span
          onClick={handleFiltersPageClick}
    
          >
            
            Filters
            
            <FilterAltIcon
            className='Header2_inside_right_searchIcon'
            style={{color:'#db7c38 '}}
            />
            </span>
        </div>










           
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

import * as React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; 
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AddchartIcon from '@mui/icons-material/Addchart';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Home from '@mui/icons-material/Home';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import CustomForm from '../../components/customsForm/page'
import '../../css/AdminList.css'



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const [selectedData, setSelectedData] = useState(null);
  const [open, setOpen] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const theme = useTheme();

  const data = [
    {  label: 'Home Appliance' },
    {  label: 'Electronic' },
    {  label: 'Sports' },
    {  label: 'Health & Beauty' },
  ];

  const formItems = [
    {label:'Item Name', type:'text'}, 
    {label:'Item Color', type:'text'}, 
    {label:'Item Brand', type:'text'},
    {label:'Item Price', type:'Number'},
    {label:'Item Description', type:'text'}, 
    {label:'Item Image', type:'file' },
  ]
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDataClick = (dataLabel) => {
    setSelectedData((prevSelectedData) => (prevSelectedData === dataLabel ? null : dataLabel))
    setFormVisible(true);
  }
  const handleFormClose = () => {
    setFormVisible(false);
  }
  return (
    <div>
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <AddchartIcon  className='AddItem'/>
          </IconButton>
        </Toolbar>
     
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
      >
        
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
            <Divider />
            <ListItem component="div" disablePadding className='mt-6'>
              <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon>
                  <Home color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Your Choice"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                  }}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <Box
              sx={{
                bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
                pb: open ? 2 : 0,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary="Add Items"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    lineHeight: '26px',
                    mb: '2px',
                  }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                    transition: '0.2s',
                  }}
                />
              </ListItemButton>
              {open &&
                data.map((item) => (
                  <ListItemButton
                  onClick={()=> handleDataClick(item.label)}
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: 'rgb(86,86,86)' }}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
        </Paper>
      </Drawer>
      {selectedData && formVisible &&  (
          <div className='ProductForm'>
             <IconButton onClick={handleFormClose}>
             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
             </IconButton>
          <CustomForm formItems={formItems} apiEndpoint="/item"/>
          </div>
        )}
    </Box>

    </div>
  );
}

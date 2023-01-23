import './FilterSideBar.css';
import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import TuneIcon from '@mui/icons-material/Tune';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';

function FilterSideBar() {
    const [selectedYear, setSelectedYear] = useState('');

    const years = [];
    for (let i = 1930; i <= 2023; i++) {
      years.push(i);
    }
    

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 550 ,  backgroundColor :"#E0E1DD", width: 550, height:'100%'}}
          role="presentation"
         
        >
          <List>
          <Typography style={{marginLeft:'7%'}} variant="h3" gutterBottom>Price $</Typography>

          <TextField style={{marginLeft:'7%'}} id="outlined-number" label="From" type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
         <TextField style={{marginLeft:'7%'}} id="outlined-number" label="To" type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Typography style={{marginLeft:'7%', marginTop:'2%'}} variant="h3" gutterBottom>Brand</Typography>
        <TextField  style={{marginLeft:'7%', width:'29em'}} id="outlined-number" label="Brand" type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Typography style={{marginLeft:'7%', marginTop:'2%'}} variant="h3" gutterBottom>Model</Typography>
        <TextField  style={{marginLeft:'7%', width:'29em'}} id="outlined-number" label="Model" type="text"
          InputLabelProps={{
            shrink: true,
          }}
        />
         <Typography style={{marginLeft:'7%', marginTop:'2%'}} variant="h3" gutterBottom>Year</Typography>
         <select
        id="year-picker"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        <option value="">Select year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

          </List>
        </Box>
      );

  return (
    
    <div className='margin'>
       {[ 'right'].map((anchor) => (
        <React.Fragment key={anchor}>
         
          <IconButton  size="large" onClick={toggleDrawer(anchor, true)} aria-label="TuneIcon"   >
            <TuneIcon  style={{fontSize: 40}} />
           </IconButton >
          <Drawer 
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default FilterSideBar;


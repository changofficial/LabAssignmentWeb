import React from 'react';
import {
  AppBar, Toolbar, Typography
} from '@material-ui/core';
import './TopBar.css';
import fetchModel from '../../lib/fetchModelData';


/**
 * Define TopBar, a React componment of UIT project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    
  }
  

  render() {
   
    return (
      <AppBar className="UIT-topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
              Lương Thị Thùy Trang 
          </Typography>

          <Typography className='right' variant="h5" color="inherit">
          {this.props.view === 'photo' ? 'Photos of ' : ''}
          {this.props.user ? this.props.user : `${this.props.user}`}
          </Typography>

        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;

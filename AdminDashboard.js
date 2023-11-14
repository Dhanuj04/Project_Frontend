// AdminDashboard.js
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
}));

const AdminDashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4">Admin Dashboard</Typography>
      {/* Add your admin-specific content here */}
    </div>
  );
};

export default AdminDashboard;

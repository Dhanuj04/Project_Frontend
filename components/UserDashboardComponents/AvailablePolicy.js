import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PolicyIcon from '@material-ui/icons/Policy';
import FeedbackIcon from '@material-ui/icons/Feedback';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
  },
  welcomeCard: {
    marginBottom: theme.spacing(2),
  },
  welcomeImage: {
    height: 150,
    backgroundSize: 'contain',
  },
  bottomAppBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(2),
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    display: 'flex',
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  leftColumn: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    marginRight: theme.spacing(2),
    marginLeft: -theme.spacing(2),
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(0),
    paddingTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(8),
    marginTop: theme.spacing(0),
  },
  rightColumn: {
    flex: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  icon: {
    fontSize: 40,
    marginRight: theme.spacing(1),
  },
  logoutContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    textDecoration: 'none',
    color: 'inherit',
  },
  logoutButton: {
    color: theme.palette.secondary.main,
  },
}));

const AvailablePolicy = () => {
  const classes = useStyles();
  const [policies, setPolicies] = useState([]);

  const handleLogout = () => {
    // Karthikey Logout logic needs to be written here
    console.log('Logout clicked');
  }
  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const response = await fetch('http://localhost:8881/policies');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // Add this line
        setPolicies(data);
      } catch (error) {
        console.error('Error fetching policies:', error);
      }
    };

    fetchPolicies();
  }, []);

  return (
    <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit">
            Insurance Management
          </Typography>
          <div className={classes.logoutContainer}>
            <Button className={classes.logoutButton} onClick={handleLogout}>
              <ExitToAppIcon />
              <Typography variant="h6" color="inherit">
                Logout
              </Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <div className={classes.content}>
        <div className={classes.leftColumn}>
          <Link to="/user-dashboard" className={classes.text}>
            <Typography variant="h6" className={classes.text}>
              <DashboardIcon className={classes.icon} />
              Dashboard
            </Typography>
          </Link>

          <Link to="/policy-categories" className={classes.text}>
            <Typography variant="h6" className={classes.text}>
              <PolicyIcon className={classes.icon} />
              Policy Categories
            </Typography>
          </Link>

          <Link to="/policy-available" className={classes.text}>
            <Typography variant="h6" className={classes.text}>
              <PolicyIcon className={classes.icon} />
              Available Policy
            </Typography>
          </Link>

          <Link to="/policy-applied" className={classes.text}>
            <Typography variant="h6" className={classes.text}>
              <PolicyIcon className={classes.icon} />
              Applied Policy
            </Typography>
          </Link>

          <Link to="/policy-apply" className={classes.text}>
            <Typography variant="h6" className={classes.text}>
              <PolicyIcon className={classes.icon} />
              Apply Policy
            </Typography>
          </Link>

          <Link to="/discounts" className={classes.text}>
            <Typography variant="h6" className={classes.text}>
              <PolicyIcon className={classes.icon} />
              Discounts
            </Typography>
          </Link>

          <Link to="/feedback" className={classes.text}>
            <Typography variant="h6" className={classes.text}>
              <FeedbackIcon className={classes.icon} />
              Feedback
            </Typography>
          </Link>
        </div>

        <div className={classes.rightColumn}>
  <Typography variant="h6" align="center">
    Available Policies
  </Typography>
  <TableContainer>
    <Table aria-label="Available Policies Table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Premium</TableCell>
          <TableCell>Coverage</TableCell>
          <TableCell>Term</TableCell>
          {/* Add more columns as needed */}
        </TableRow>
      </TableHead>
      <TableBody>
        {policies.map((policy) => (
          <TableRow key={policy.policy_id}>
            <TableCell>{policy.policy_id}</TableCell>
            <TableCell>{policy.policy_name}</TableCell>
            <TableCell>{policy.policy_description}</TableCell>
            <TableCell>{policy.standardPremium}</TableCell>
            <TableCell>{policy.coveragePeriod}</TableCell>
            <TableCell>{policy.term}</TableCell>
            {/* Add more cells for additional columns */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</div>

      </div>

      
      <AppBar position="fixed" className={classes.bottomAppBar}>
        <Toolbar className={classes.toolbar}>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AvailablePolicy;

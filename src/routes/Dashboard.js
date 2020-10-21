import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import GraphOne from './fp.png';
import TransactionList from './tr.png';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router-dom';
import acc from './acc1.png';
import escrow from './e1.png';

//tool bar
import MenuIcon from '@material-ui/icons/Menu';
import logo from './sbg.png';
import profile from './profile.png';

//menu
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import StorageIcon from '@material-ui/icons/Storage';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import RecentActorsOutlinedIcon from '@material-ui/icons/RecentActorsOutlined';

const drawerWidth = 240;

const getIcon = (index) => {
  switch(index) {
    case 0:
      return <DashboardIcon color='primary' />;
    case 1:
      return <AccountBalanceIcon />;
    case 2:
      return <CreditCardIcon />;
    case 3:
      return <FileCopyIcon />;
    case 4:
      return <SwapHorizIcon />;
    default:
      return <DashboardIcon />
  }
};

const getOtherIcon = (index) => {
  switch(index) {
  case 0:
      return <LocalAtmIcon />;
    case 1:
      return <StorageIcon />;
    case 2:
      return <CancelPresentationIcon />;
    case 3:
      return <RecentActorsOutlinedIcon />;
  }
};

const formatListItem = (text) => {
  console.log('text', text);
  if (text == "Dashboard") {
    return <ListItemText style={{color: '#0033aa'}} primary={text} />;
  } else {
    return <ListItemText primary={text} />;
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  card: {
    display: 'flex',
    width: 326,
    height: 234,
    borderRadius: 10,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  cardGrid: {
    flexGrow: 1,
    position: 'relative',
    top: 120,
    marginLeft: -200
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0033aa',
    },
    secondary: {
      main: '#0079c9',
    },
  },
});

function Dashboard() {
  const classes = useStyles();
  const history = useHistory();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar style={{backgroundColor: "#0033aa"}}  position="fixed" className={classes.appBar}>
        <Toolbar>
          <MenuIcon />
          <img style={{marginLeft: '14px'}} src={logo} width='36px' height='44px' />
          <img style={{marginLeft: '1020px'}} src={profile} width='300px' height='60px' />
          
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Dashboard', 'Accounts', 'Cards', 'Account Statements', 'Transactions'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{getIcon(index)}</ListItemIcon>
                {formatListItem(text)}
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Payments', 'Batches', 'Stop Checks', 'Contacts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{getOtherIcon(index)}</ListItemIcon>
                <ListItemText primary={text} />
                
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />

        <Box paddingBottom={24}>

        <Paper style={{background: "linear-gradient(#002b90, #006bc6)", height: '342px', width: '1120px', marginLeft: '24px', marginTop: '24px'}}>
            <Typography style={{fontWeight: 'bold', fontSize: '34px', color: "#FFFFFF", paddingTop: '78px', paddingLeft: '40px'}} variant='h5'>
              My Dashboard
            </Typography>

            <Grid container className={classes.cardGrid}  justify="center" spacing={4}>

            <Card  className={classes.card}>
              <CardContent>
                
                <img src={acc} height='220' width='300'/>
              </CardContent>
              
            </Card>

            <Card style={{marginLeft: '32px', backgroundColor: '#242424', color: '#ffffff'}} className={classes.card}>
              <CardContent>
                
                <Button onClick={() => history.push('/info')}>
                <img style={{marginTop: -12}} src={escrow} height='215' width='300'/>
                </Button>
              </CardContent>
              <CardActions>
          
              </CardActions>
            </Card>
       
            </Grid>
        </Paper>
        </Box>

      <Box paddingBottom={4}>
      <Paper style={{marginLeft: '24px', padding: '16px', width: '1120px'}} >
      <img src={GraphOne} width="1040" height="548" />
      </Paper>
      </Box>

      <Box>
      <Paper style={{marginLeft: '24px', padding: '16px', width: '1120px'}} >
      <img src={TransactionList} width="1040"  />
      </Paper>
      </Box>
      
      </main>
      
    </div>
  );
}

export default Dashboard;

import React from 'react';
// import './App.css';
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
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router-dom';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Slider from '@material-ui/core/Slider';
import AmountSlider from './AmountSlider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import AccDetails from './w3.png';
import Confirm from './acc2.png';

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
    case 5:
      return <LocalAtmIcon />;
    case 6:
      return <StorageIcon />;
    case 7:
      return <CancelPresentationIcon />;
    case 8:
      return <RecentActorsOutlinedIcon />;
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

const currencies = [
	{
	  value: 'USD',
	  label: 'Standard Bank',
	},
	{
	  value: 'EUR',
	  label: 'FNB',
	},
	{
	  value: 'BTC',
	  label: 'Capitec',
	},
	{
	  value: 'JPY',
	  label: 'Nedbank',
	},
  ];

const useStyles = makeStyles((theme) => ({
  root: {
	display: 'flex',
  },
  card: {
    display: 'flex',
    width: 1041,
    height: 184,
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
    zIndex: '11000',
    top: 120,
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
  calcStepper: {
	width: 1041,
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
	return ['Investment Calculator', 'Account Details', 'Confirmation Details'];
  }
  

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

function InvestmentCalculator() {
  const classes = useStyles();
  const history = useHistory();
  const bull = <span className={classes.bullet}>•</span>;
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [value, setValue] = React.useState(1000);
  const [fees, setFees] = React.useState(50);
  const [investmentCost, setInvestmentCost] = React.useState(100);
  const [currency, setCurrency] = React.useState('USD');
  const [loanTerm, setLoanTerm] = React.useState('6');

  const handleLoanTermChange = (event) => {
    setLoanTerm(event.target.value);
  };

  function getStepContent(stepIndex) {
	switch (stepIndex) {
	  case 0:
		return <><Typography style={{color: "#000", fontWeight: 'bold', marginLeft: '100px'}} variant='h5'>
		Investment Calculator
		</Typography>
		<Typography style={{color: "#000", marginLeft: '100px'}} variant='subtitle2'>
		We with debit this account, when re-payment is due
		</Typography>

		<Paper style={{backgroundColor: "#004cac", height: '304px', width: '712px', marginLeft: '100px'}}>
			<Box paddingLeft={32}>
			<Typography style={{color: "#fff", fontWeight: 'bold', fontSize: '64px'}} id="non-linear-slider" >
				R{value}
			</Typography>
			</Box>
			<Box paddingBottom={4} paddingLeft={30} >
			<Typography variant='subtitle2' style={{color: "#fff", fontSize: '24px'}} id="non-linear-slider">
			How much do you need?
			</Typography>
			</Box>

			<Box paddingLeft={4} paddingRight={4}>
			<Slider
				value={value}
				onChange={handleChange}
				onChangeCommitted={changeCommited}
				style={{color: '#fff'}}
				step={100}
				min={1000}
				max={250000}
				aria-labelledby="non-linear-slider"
			/>
			</Box>

			<Grid container>
			<div style={{marginLeft: '24px', color: '#fff', fontSize: '18px'}}>
			<p>R1 000.00 Min.</p>
			</div>

			<div style={{marginLeft: '380px', color: '#fff', fontSize: '18px'}}>
			<p>R250 000.00 Max.</p>
			</div>
			</Grid>
		</Paper>
		<Paper style={{backgroundColor: "#f3fbff", height: '220px', width: '712px', marginTop: '18px', marginLeft: '100px'}}>
			<Box paddingBottom={4}  >
			<Typography variant='subtitle2' style={{color: "#000", fontSize: '24px', textAlign: 'center'}} id="non-linear-slider">
				Enter how long will you need <br/> to re-pay the amount?
			</Typography>
			</Box>
			<Box paddingLeft={30}>
			<FormControl component="fieldset">
				<RadioGroup value={loanTerm} onChange={handleLoanTermChange} row aria-label="position" name="position" defaultValue="top">
					<FormControlLabel value="6" control={<Radio color="primary" />} label="6 Months" />
					<FormControlLabel value="12" control={<Radio color="primary" />} label="12 Months" />
				</RadioGroup>
			</FormControl>
			</Box>
		</Paper>
		<Grid container style={{marginLeft: '100px'}}>
			<div style={{marginLeft: '16px'}}>
				<p>Fees</p>
				<p>R{fees}</p>
			</div>

			<div style={{marginLeft: '200px'}}>
				<p>Insurance</p>
				<p>R300</p>
			</div>

			<div style={{marginLeft: '150px'}}>
				<p>Investment Cost - 6%</p>
				<p>R{investmentCost}</p>
			</div>
			</Grid>
			<Divider style={{backgroundColor: '#0079c9', width: '712px', marginLeft: '100px'}} />
			<Grid container style={{marginLeft: '100px'}}>
				<div style={{marginLeft: '16px', color: '#0079c9'}}>
					<p>Total</p>
				</div>
				<div style={{marginLeft: '415px', color: '#0079c9', fontWeight: 'bold'}}>
					<p>R{fees+investmentCost}</p>
				</div>
			</Grid>
			<Divider style={{backgroundColor: '#0079c9', width: '712px', marginLeft: '100px'}} />
			<Box paddingBottom={4}></Box>
		</>;
	  case 1:
		return <><Typography style={{color: "#000", fontWeight: 'bold', marginLeft: '100px'}} variant='h5'>
		Debit this Account
		</Typography>
		<Typography style={{color: "#000", marginLeft: '100px'}} variant='subtitle2'>
		We with debit this account, when re-payment is due
		</Typography>

		<Paper style={{backgroundColor: "#f3fbff", height: '98px', width: '712px', marginTop: '18px', marginLeft: '100px'}}>
			<Box paddingBottom={4}  >
				<Grid container>
					<Grid item>
					<Typography variant='subtitle2' style={{color: "#000", fontSize: '16px', fontWeight: 'bold', textAlign: 'left', paddingLeft: '16px', paddingTop: '16px'}}>
					Khumalo Construction - MyMoBiz
					</Typography>
					<Typography variant='subtitle2' style={{color: "#000", fontSize: '14px', fontWeight: 'bold', textAlign: 'left', paddingLeft: '16px'}} >
					•••••8927
					</Typography>
					</Grid>
					<Grid item style={{paddingLeft: '300px'}}>
						<p>R 200,985.00 v</p>
					</Grid>
				</Grid>
			</Box>
			
			
		</Paper>
			<Box paddingTop={4}>
				<Typography style={{color: "#000", fontWeight: 'normal',  marginLeft: '100px'}} variant='h5'>
				Enter Supplier Details
					</Typography>
					<Typography style={{color: "#000",  marginLeft: '100px'}} variant='subtitle2'>
					We with debit this account, when re-payment is due
				</Typography>
			</Box>

			<Box paddingTop={4}>
				<Typography style={{color: "#000", fontSize: '34px', fontWeight: 'normal',  marginLeft: '100px'}} variant='subtitle1'>
					To
				</Typography>
					
			</Box>
			<Box paddingBottom={4}>
			<form style={{marginLeft: '100px'}} noValidate autoComplete="off">
				<TextField style={{width: '712px', }} id="outlined-basic" label="Beneficiary name" variant="outlined" />
				
			</form>
			</Box>

			<Box paddingBottom={4}>
				<Grid container style={{marginLeft: '100px'}}>
				
					<TextField
					id="outlined-select-currency"
					select
					label="Bank"
					value={currency}
					onChange={handleChange}
					variant="outlined"
					>
					{currencies.map((option) => (
						<MenuItem key={option.value} value={option.value}>
						{option.label}
						</MenuItem>
					))}
					</TextField>

					<TextField style={{marginLeft: '70px'}} id="outlined-basic" label="Branch code" variant="outlined" />

					<TextField style={{marginLeft: '70px'}} id="outlined-basic" label="Account number" variant="outlined" />
				</Grid>
			</Box>

			<Box paddingBottom={4}>
				<FormControlLabel
				style={{marginLeft: '90px'}}
					control={
					<Checkbox
						name="checkedB"
						color="primary"
					/>
					}
					label="Save as a new contact"
				/>
			</Box>

			<Box>
				<Typography style={{color: "#000", fontSize: '34px', fontWeight: 'normal',  marginLeft: '100px'}} variant='subtitle1'>
					Payment details
				</Typography>
					
			</Box>

			<Box paddingBottom={4}>
				<TextField style={{marginLeft: '100px'}} id="outlined-basic" label="Amout" variant="outlined" />
			</Box>


			<Box paddingBottom={4}>
				<TextField style={{marginLeft: '100px'}} id="outlined-basic" label="Payment reference" variant="outlined" />
			</Box>
		
		</>;
	  case 2:
		return <><Paper elevation={0} >
			<img src={AccDetails} width="712px" />
		</Paper>
		</>;
		case 3:
			return <><Paper elevation={0}>
				<img src={Confirm} width="712px" />
			</Paper>
			</>;
	  default:
		return 'Unknown stepIndex';
	}
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const changeCommited = (event, value) => {
	const fee = value * 0.05;
	setFees(fee);
	const invCost = value * 0.06;
	setInvestmentCost(invCost);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar style={{backgroundColor: "#0033aa"}}  position="fixed" className={classes.appBar}>
        <Toolbar>
		<MenuIcon />
          <img style={{marginLeft: '14px'}} src={logo} width='36px' height='44px' />
          <img style={{marginLeft: '1070px'}} src={profile} width='256px' height='60px' />
          
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
                {/* <ListItemText style={{color: '#0033aa'}} primary={text} /> */}
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

        <Box paddingBottom={12}>

        <Paper style={{background: "linear-gradient(#002b90, #006bc6)", height: '342px', width: '1120px', marginLeft: '24px', marginTop: '24px'}}>
            <Typography style={{color: "#FFFFFF", paddingTop: '78px', paddingLeft: '40px'}} variant='h5'>
			Apply for FundThat Investment
            </Typography>

            <Grid container className={classes.cardGrid}  justify="center" spacing={4}>

            <Card  className={classes.card}>
              <CardContent>
			  <div className={classes.calcStepper}>
			<Stepper activeStep={activeStep} alternativeLabel>
				{steps.map((label) => (
				<Step key={label}>
					<StepLabel>{label}</StepLabel>
				</Step>
				))}
			</Stepper>
			
			</div>
              </CardContent>
            </Card>
       
            </Grid>
        </Paper>
        </Box>

		<Box>
			<Paper style={{marginLeft: '64px', width: 1041, padding: '16px'}} >
					
					<div style={{marginLeft: '100px'}}>
						{activeStep === steps.length ? (
						<div>
							<Typography className={classes.instructions}>{getStepContent(3)}</Typography>
							<Button style={{borderRadius: 24, width: 310, marginLeft: '240px', backgroundColor: '#0033aa', color: '#fff'}}
							 variant="contained" 
							 onClick={handleReset}>Done</Button>
						</div>
						) : (
						<div >
							<Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
							<div>
							<Button
								style={{marginLeft: '100px', width: 310, borderRadius: 24}}
								disabled={activeStep === 0}
								onClick={handleBack}
								className={classes.backButton}
								variant='outlined'
								color="primary"
							>
								Back
							</Button>
							<Button 
							style={{borderRadius: 24, width: 310, backgroundColor: '#0033aa', color: '#fff'}}
							 variant="contained" color="primary" onClick={handleNext}>
								{activeStep === steps.length - 1 ? 'Confirm request' : 'Next'}
							</Button>
							</div>
						</div>
						)}
				</div>
			</Paper>

      	</Box>

      </main>
      
    </div>
  );
}

export default InvestmentCalculator;

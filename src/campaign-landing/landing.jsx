import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import campaignList from '../data/campain-info';
import CampaignDetailModal from './info-modal';
import "./style/campaign-landing.css";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));

function CampaignList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedId ,setSelectedId] = React.useState(-1);
  // getModalStyle is not a pure function, we roll the style only on the first render
  //const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = (id) => {
    setOpen(true);
    setSelectedId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formatDate=(date)=> {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">Campaign</StyledTableCell>
            <StyledTableCell align="right">View&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Actions&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Schedule&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {campaignList.map((campaign,index)=> (
            <StyledTableRow key={campaign.id} onClick={()=>{handleOpen(index)}} >
              <StyledTableCell component="th" scope="row">
                {formatDate(campaign.date)}
              </StyledTableCell>
              <StyledTableCell align="right"><img className="campaign-img" src={campaign.image} alt={campaign.campaign}/>{campaign.campaign}</StyledTableCell>
              <StyledTableCell align="right">{campaign.view}</StyledTableCell>
              <StyledTableCell align="right">{campaign.actions}</StyledTableCell>
              <StyledTableCell align="right">{campaign.images}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <CampaignDetailModal isOpen={open} campaignDetail ={campaignList[selectedId]} handleClose ={handleClose}/>
    </Paper>
  );
}

export default CampaignList;



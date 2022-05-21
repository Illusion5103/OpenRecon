import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import {Link} from 'react-router-dom'
import CardContent from '@mui/material/CardContent';
import { Grid, Button, Container } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{
      backgroundColor: '#2b2b2b',
      textAlign: 'left',
      padding: 5
    }}>

      <Grid container spacing={{  }} columns={{ xs: 1, sm: 1, md: 1, lg: 3, xl: 3 }}>
      <Grid  item xs={1} sm={1} md={1} lg={1} xl={1} sx={{
        pl: 2
      }}>
        <Typography variant='h5'>
          {props.title}
        </Typography>
        <Typography sx={{
          pb: 4,
        }}>
          Name
        </Typography>
      </Grid>

      <Grid  item xs={1} sm={1} md={1} lg={1} xl={1} sx={{
        pl:2
      }}>
      <Typography variant='h5'>
          ${props.prize} USDC
        </Typography>
        <Typography sx={{
          pb: 4,
        }}>
          Reward
        </Typography>
      </Grid>

      <Grid  item xs={1} sm={1} md={1} lg={1} xl={1} sx={{
        pl:2
      }}>
      <Typography variant='h5'>
          {props.type}
        </Typography>
        <Typography sx={{
          pb: 4,
        }}>
          Type
        </Typography>
      </Grid>
      </Grid>

      <CardActions >
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Button size='large' variant="contained">
            See details
          </Button>
        </ExpandMore>

        <Link to='/submit' style={{all:"unset"}}>
        <Button size='large' variant="outlined">
            Submit Findings
        </Button>
        </Link>

      </CardActions>



      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant='h5'>Details:</Typography>
          <Typography paragraph>
            {props.detail}
          </Typography>
          <Typography paragraph variant='h5' sx={{
            pt: 4
          }}>CID:</Typography>
          <Typography paragraph>
          {props.cid}
          </Typography>



        </CardContent>
      </Collapse>
    </Card>
  );
}
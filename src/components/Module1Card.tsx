import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

  export default function ModuleCard() {

    const StyledCard = styled(Card)(({ theme }) => ({
      "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
    }))

    return (
      <Link to={"/modules/1"}>
        <StyledCard className={"module-1-card"} sx={{ width: 500, height: 650, borderRadius: 5, boxShadow: 5, border: 4, backgroundColor: "#FFCE51" }} >
          <CardContent>
          <div className="level-title">
            <Typography align='center' sx={{fontSize: 60, fontFamily: 'Jeju Hallasan'}}>
              Level 1
            </Typography>
          </div>
          <div className="module-title">
            <Typography align='center' sx={{fontSize: 40, fontFamily: 'Jeju Hallasan'}}>
              Basic
            </Typography>
            <Typography align='center' sx={{fontSize: 40, fontFamily: 'Jeju Hallasan'}}>
              Colour Wheel
            </Typography>
          </div>
        </CardContent>
        <CardMedia
          className={"basic-colour-wheel-image"}
          image={require('../images/navigation-images/basic_colour_wheel.png')}
          title="Basic colour wheel image"
          sx={{height: 270, width: 300, objectFit: "contain", marginLeft: 12, marginTop: 6}}
        />
        <CardActions>
        </CardActions>
        </StyledCard>
      </Link>
    );
  }
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import './Module2Card.css';


  export default function ModuleCard() {

    const StyledCard = styled(Card)(({ theme }) => ({
      "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
    }))

    return (
      <Link to={"/modules/2"}>
        <StyledCard className={"module-2-card"} sx={{ width: 400, height: 500, borderRadius: 5, boxShadow: 5, border: 4, backgroundColor: "#FF9559" }}>
          <CardMedia>
              {/**
               * The stars picture?
               */}
          </CardMedia>
          <CardContent>
            <div className="level-title">
              <Typography align='center' sx={{fontSize: 50, fontFamily: 'Jeju Hallasan'}}>
                Level 2
              </Typography>
            </div>
            <div className="module-title">
              <Typography align='center' sx={{fontSize: 30, fontFamily: 'Jeju Hallasan'}}>
                Advanced
              </Typography>
              <Typography align='center' sx={{fontSize: 30, fontFamily: 'Jeju Hallasan'}}>
                Colour Wheel
              </Typography>
            </div>
          </CardContent>
          <CardMedia
            className={"advanced-colour-wheel-image"}
            image={require('../../images/navigation-images/advanced_colour_wheel.png')}
            title="Advanced colour wheel image"
            sx={{height: 220, width: 250, objectFit: "contain", marginLeft: 8, marginTop: 5}}
          />
          <CardActions>
          </CardActions>
        </StyledCard>
      </Link>
    );
  }

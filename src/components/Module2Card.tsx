import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';


  export default function ModuleCard() {
    return (
      <Link to={"/modules/2"}>
        <Card sx={{ width: 500, height: 650, borderRadius: 5, boxShadow: 5, border: 4, backgroundColor: "#FF9559" }}>
          <CardMedia>
              {/**
               * The stars picture?
               */}
          </CardMedia>
          <CardContent>
            <div className="level-title">
              <Typography align='center' sx={{fontSize: 40, fontFamily: 'Jeju Hallasan'}}>
                Level 2
              </Typography>
            </div>
            <div className="module-title">
              <Typography align='center' sx={{fontSize: 25, fontFamily: 'Jeju Hallasan'}}>
                Advanced
              </Typography>
              <Typography align='center' sx={{fontSize: 25, fontFamily: 'Jeju Hallasan'}}>
                Colour Wheel
              </Typography>
            </div>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
      </Link>
    );
  }
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

  export default function ModuleCard() {

    return (
      <Link to={"/modules/1"}>
        <Card sx={{ width: 500, height: 650, borderRadius: 5, boxShadow: 5, border: 4, backgroundColor: "#FFCE51" }}>
          <CardContent>
          <div className="level-title">
            <Typography align='center' sx={{fontSize: 40, fontFamily: 'Jeju Hallasan'}}>
              Level 1
            </Typography>
          </div>
          <div className="module-title">
            <Typography align='center' sx={{fontSize: 25, fontFamily: 'Jeju Hallasan'}}>
              Basic
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
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

  export default function ModuleCard() {

    return (
      <Link to={"/modules/1"}>
        <Card sx={{ width: 270, height: 400, borderRadius: 5, boxShadow: 5, marginRight: 5, marginLeft: 5, backgroundColor: "#FFCE51" }}>
          <CardContent>
            <Typography align='center' sx={{fontSize: 40, fontFamily: 'Jeju Hallasan'}}>
                Level 1
              </Typography>
              <Typography align='center' sx={{fontSize: 25, fontFamily: 'Jeju Hallasan'}}>
                Basic 
              </Typography>
              <Typography align='center' sx={{fontSize: 25, fontFamily: 'Jeju Hallasan'}}>
                Colour Wheel
              </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
      </Link>
    );
  }
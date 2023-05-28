import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CardMedia } from '@mui/material';
import "./Module3Card.css"

  export default function ModuleCard() {
    return (
      <Link to={"/modules/3"}>
        <Card sx={{ width: 500, height: 650, borderRadius: 5, boxShadow: 5, border: 4, backgroundColor: "#FF6666" }}>
            <CardContent>
                <div className="level-title">
                  <Typography align='center' sx={{fontSize: 60, fontFamily: 'Jeju Hallasan'}}>
                    Level 3
                  </Typography>
                </div>
                <div className="module-title">
                  <Typography align='center' sx={{fontSize: 40, fontFamily: 'Jeju Hallasan'}}>
                    Colour Concepts
                  </Typography>
                </div>
            </CardContent>
            <CardMedia
              className={"colour-concepts-image"}
              image={require('../images/navigation-images/colour_concepts.png')}
              title="Colour concepts image"
              sx={{height: 270, width: 320, objectFit: "contain", marginLeft: 11, marginTop: 11}}
            />
            <CardActions>
            </CardActions>
        </Card>
      </Link>
    );
  }
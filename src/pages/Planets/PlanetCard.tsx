import React, { FC } from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

interface IPlanetCardProps {
  name: string;
}

const PlanetCard: FC<IPlanetCardProps> = ({ name }) => (
  <Card className="card">
    <CardContent>
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

export default PlanetCard;

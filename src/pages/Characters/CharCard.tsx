import React, { FC } from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./styles.scss";

interface ICharCardProps {
  name: string;
  gender?: "male" | "female" | "n/a";
  birth_year: string;
}

const CharCard: FC<ICharCardProps> = ({ name, gender, birth_year }) => (
  <Card className="card">
    <CardContent>
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        {gender}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

export default CharCard;

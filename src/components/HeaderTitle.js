import React from "react";
import { Grid } from "semantic-ui-react";

const HeaderTitle = () => {
  return (
    <Grid.Row style={{ paddingBottom: 0 }}>
      <Grid.Column computer={16}>
        <header className="headerContainer">
          <h1 className="headerTitle">Recipe-Box</h1>
          <h3 className="headerInfo">
            Add, Edit or Delete from the list of recipes below.
          </h3>
        </header>
      </Grid.Column>
    </Grid.Row>
  );
};

export default HeaderTitle;

import * as React from "react";
import {Datagrid, List, TextField} from 'react-admin';

export const PostList = (props) => (
  <List {...props}>
    <Datagrid rowClick={'show'}>
      <TextField source="id" />
    </Datagrid>
  </List>
);
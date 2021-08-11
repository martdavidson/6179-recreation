import * as React from "react";

import { Admin, Resource } from 'react-admin';

import { PostList } from './posts';
import {PostShow} from './postShow';

const dataProvider = {
  getList:    (resource, params) => {
    return Promise.resolve({data: [{id: '123', things: []}], total: 1, })
  },
  getOne:     (resource, params) => {
    return Promise.resolve({data: {id: '123', things: []}})
  },
  getMany:    (resource, params) => Promise,
  getManyReference: (resource, params) => Promise,
  create:     (resource, params) => Promise,
  update:     (resource, params) => Promise,
  updateMany: (resource, params) => Promise,
  delete:     (resource, params) => Promise,
  deleteMany: (resource, params) => Promise,
}

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} show={PostShow}/>
  </Admin>
);

export default App;
import {Show, SimpleShowLayout, TextField, Datagrid, ArrayField} from 'react-admin';

export const PostShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <ArrayField source={'things'}>
        <Datagrid empty={<p>Testing</p>}>
          <TextField source={'id'} />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);
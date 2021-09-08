import React from 'react';

import { employee, positions, states } from './ExtremeFormData';

import Form, {
    SimpleItem,
    GroupItem,
    Label
  } from 'devextreme-react/form';
  import 'devextreme-react/text-area';

const ExtremeForm: React.FC = () => {
    const [birthDateOptions, setBirthDateOptions] = React.useState<{width: string}>({width: '100%'});
    const [positionOptions, setPositionOptions] = React.useState<{items: string[], value: string}>({items: positions, value: ''});
    const [stateOptions, setStateOptions] = React.useState<{items: string[]}>({items: states});
    const [phoneOptions, setPhoneOptions] = React.useState<{mask: string}>({mask: '+1 (000) 000-0000'});
    const [notesOptions, setNotesOptions] = React.useState<{height: number}>({height: 140});

    function avatarRender(): React.ReactNode {
        return (
            <div className="form-avatar" />
        )
    }

    return(
        <Form formData={employee}>
        <GroupItem cssClass="first-group" colCount={4}>
          <SimpleItem render={avatarRender}>
          </SimpleItem>
          <GroupItem colSpan={3}>
            <SimpleItem dataField="FirstName" />
            <SimpleItem dataField="LastName" />
            <SimpleItem
              dataField="BirthDate"
              editorType="dxDateBox"
              editorOptions={birthDateOptions}
            />
          </GroupItem>
        </GroupItem>
        <GroupItem cssClass="second-group" colCount={2}>
          <GroupItem>
            <SimpleItem dataField="Address" />
            <SimpleItem dataField="City" />
            <SimpleItem dataField="Position"
              editorType="dxSelectBox"
              editorOptions={positionOptions} />
          </GroupItem>
          <GroupItem>
            <SimpleItem
              dataField="State"
              editorType="dxSelectBox"
              editorOptions={stateOptions} />
            <SimpleItem dataField="ZipCode" />
            <SimpleItem
              dataField="Mobile"
              editorOptions={phoneOptions}>
              <Label text="Phone" />
            </SimpleItem>
          </GroupItem>
          <SimpleItem
            colSpan={2}
            dataField="Notes"
            editorType="dxTextArea"
            editorOptions={notesOptions}
          />
        </GroupItem>
      </Form>
    )
}

export default ExtremeForm;
import React from 'react';

import ODataStore from 'devextreme/data/odata/store';

import DataGrid, {
    Column,
    Grouping,
    GroupPanel,
    Pager,
    Paging,
    SearchPanel
 } from 'devextreme-react/data-grid';

import { ExtremeBarColumn } from '.';
import { EventInfo } from 'devextreme/events';
import dxDataGrid from 'devextreme/ui/data_grid';

const pageSizes = [10, 25, 50, 100];

const dataSourceOptions = {
    store: new ODataStore({
        url: 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
        key: 'Id',
        beforeSend: function(request) {
            request.params.startDate = '2020-05-10',
            request.params.endDate = '2020-05-15'
        }
    })
}

const ExtremeList: React.FC = () => {
    const [collapsed, setCollapsed] = React.useState<boolean>(false);

    function onContentReady(e: EventInfo<dxDataGrid>): void {
        if (!collapsed) {
            e.component.expandRow(['EnviroCare']);
            setCollapsed(true);
        }
    }

    return (
        <DataGrid
            dataSource={dataSourceOptions}
            allowColumnReordering={true}
            showBorders={true}
            onContentReady={onContentReady}
        >
            <GroupPanel visible={true} />
            <SearchPanel visible={true} highlightCaseSensitive={true} />
            <Grouping autoExpandAll={false} />

            <Column dataField="Product" groupIndex={0} />
            <Column
                dataField="Amount"
                caption="Sale Amount"
                dataType="number"
                format="currency"
                alignment="right"
            />
            <Column
                dataField="Discount"
                caption="Discount %"
                dataType="number"
                format="percent"
                alignment="right"
                allowGrouping={false}
                cellRender={ExtremeBarColumn}
                cssClass="bullet"
            />
            <Column dataField="SaleDate" dataType="date" />
            <Column dataField="Region" dataType="string" />
            <Column dataField="Sector" dataType="string" />
            <Column dataField="Channel" dataType="string" />
            <Column dataField="Customer" dataType="string" width={150} />

            <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
            <Paging defaultPageSize={10} />
        </DataGrid>
    )
}

export default ExtremeList;
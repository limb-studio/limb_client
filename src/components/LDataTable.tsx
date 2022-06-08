import { useEffect, useRef, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import { Button } from 'primereact/button';
import { OverlayPanel } from 'primereact/overlaypanel';

export function LDataTable(props: any) {

    const loadingTemplate = (options: any) => {
        return (
            <div className="flex align-items-center" style={{ height: '17px', flexGrow: '1', overflow: 'hidden' }} >
                <Skeleton width={options.cellEven ? (options.field === 'year' ? '30%' : '40%') : '60%'} height="1rem" />
            </div>
        )
    }
    const op = useRef<OverlayPanel | null>(null);

    return (<div>
        <div className='flex'>
            <h3 className='flex'>{props.title}</h3>
            { props.addPanel != null ? <div><OverlayPanel ref={op} showCloseIcon dismissable breakpoints={{ '960px': '75vw', '640px': '100vw' }} style={{ width: '450px' }}>
                {props.addPanel}
            </OverlayPanel>
            <Button icon="pi pi-plus" className="p-button-rounded p-button-outlined" onClick={(e) => op.current?.toggle(e)} /></div>
            :null
            }
        </div>
        <DataTable value={props.data} onRowDoubleClick={props.onDBLClick} stripedRows scrollable showGridlines selectionMode="multiple">
            {props.fields.map((f: any, i: number) => {
                return <Column field={f.key} key={f.key} header={f.title} sortable style={{ minWidth: '200px' }}></Column>
            })}
        </DataTable>
    </div>);
}
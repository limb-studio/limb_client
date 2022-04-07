import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import axios from "axios";
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import { OverlayPanel } from 'primereact/overlaypanel';
//import AddUserForm from '../admin/users/AddUserForm';

export class LDataTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
        axios.get('http://localhost:3001/user')
            .then(response => this.setState({ users: response.data }));
        // this.carService = new CarService();

        // this.state = {
        //     cars: Array.from({ length: 100000 }).map((_, i) => this.carService.generateCar(i + 1)),
        //     virtualCars: Array.from({ length: 100000 }),
        //     lazyLoading: false
        // };

        // this.loadingTemplate = this.loadingTemplate.bind(this);
        // this.loadCarsLazy = this.loadCarsLazy.bind(this);
    }

    // loadCarsLazy(event) {
    //     !this.state.lazyLoading && this.setState({ lazyLoading: true });

    //     if (this.loadLazyTimeout) {
    //         clearTimeout(this.loadLazyTimeout);
    //     }

    //     //simulate remote connection with a timeout
    //     this.loadLazyTimeout = setTimeout(() => {
    //         let virtualCars = [...this.state.virtualCars];
    //         let { first, last } = event;

    //         //load data of required page
    //         const loadedCars = this.state.cars.slice(first, last);

    //         //populate page of virtual cars
    //         Array.prototype.splice.apply(virtualCars, [...[first, last - first], ...loadedCars]);

    //         this.setState({
    //             virtualCars,
    //             lazyLoading: false
    //         });
    //     }, Math.random() * 1000 + 250);
    // }

    loadingTemplate(options) {
        return (
            <div className="flex align-items-center" style={{ height: '17px', flexGrow: '1', overflow: 'hidden' }} >
                <Skeleton width={options.cellEven ? (options.field === 'year' ? '30%' : '40%') : '60%'} height="1rem" />
            </div>
        )
    }
    rowDoubleClick(options) {
        window.open('/admin/users/' + options.data.id, '_blank');
    }

    render() {
        return (
            <div>
                <div className='flex'>
                    <h3 className='flex'>Пользователи (3)</h3>
                    <Button icon="pi pi-plus" className="p-button-rounded p-button-outlined" onClick={(e) => this.op.toggle(e)} />
                    <OverlayPanel ref={(el) => this.op = el} showCloseIcon dismissable breakpoints={{ '960px': '75vw', '640px': '100vw' }} style={{ width: '450px' }}>
                        test
                    </OverlayPanel>
                </div>
                <DataTable value={this.state.users} onRowDoubleClick={this.rowDoubleClick} stripedRows scrollable showGridlines selectionMode="multiple">
                    <Column field="login" header="Логин" style={{ minWidth: '200px' }}></Column>
                    <Column field="lastname" header="Фамилия" style={{ minWidth: '200px' }}></Column>
                    <Column field="firstname" header="Имя" style={{ minWidth: '200px' }}></Column>
                    <Column field="secondname" header="Отчество" style={{ minWidth: '200px' }}></Column>
                </DataTable>
                {/* <div className="card">
                    <h5>Preloaded Data (100000 Rows)</h5>
                    <DataTable value={this.state.cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }}>
                        <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
                        <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
                        <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
                        <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
                        <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Lazy Loading from a Remote Datasource (100000 Rows)</h5>
                    <DataTable value={this.state.virtualCars} scrollable scrollHeight="400px" virtualScrollerOptions={{ lazy: true, onLazyLoad: this.loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: this.state.lazyLoading, loadingTemplate: this.loadingTemplate }}>
                        <Column field="id" header="Id" style={{ minWidth: '200px' }}></Column>
                        <Column field="vin" header="Vin" style={{ minWidth: '200px' }}></Column>
                        <Column field="year" header="Year" style={{ minWidth: '200px' }}></Column>
                        <Column field="brand" header="Brand" style={{ minWidth: '200px' }}></Column>
                        <Column field="color" header="Color" style={{ minWidth: '200px' }}></Column>
                    </DataTable>
                </div> */}
            </div>
        );
    }
}
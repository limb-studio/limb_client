import logo from './logo.svg';
import React, { Component } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

export class NavHeader extends Component {
    items = []
    constructor(props) {
        super(props);
        this.items = [
            {
                label: 'Документы',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'Хаб',
                        icon: 'pi pi-fw pi-briefcase',
                        url: '/dochub'
                    },{
                        label: 'Создать',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                                label: 'СЗ',
                                icon: 'pi pi-fw pi-envelope',
                                url: '/docnewsz'
                            },
                            {
                                label: 'Входящий',
                                icon: 'pi pi-fw pi-sign-in'
                            },
                            {
                                label: 'Исходящий',
                                icon: 'pi pi-fw pi-sign-out'
                            },
                        ]
                    },
                    
                    {
                        separator: true
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label: 'Админ',
                icon: 'pi pi-fw pi-server',
                url: '/admin'
            },
            {
                label: 'Users',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus',

                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus',

                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }
                                ]
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'List'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Events',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
    }

    render() {
        const start = <img alt="Логотип" src={logo} onClick={() => window.location = "/"} height="40" className="mr-2 cursor-pointer"></img>;
        const end = <InputText placeholder="Найти" type="text" />;

        return (
            <div>
                <div className="card z-5" style={{position: 'relative'}}>
                    <Menubar model={this.items} start={start} end={end} />
                </div>
            </div>
        );
    }
}
import React from 'react';
import logo from './../app/logo.svg';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Link } from "react-router-dom";

function NavHeader() {
    const start = <Link to='/'><img alt="Логотип" src={logo} height="40" className="mr-2 cursor-pointer"></img></Link>;
    const end = <InputText placeholder="Найти" type="text" />;

        const items = [
        {
            label: 'Документы',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'Хаб',
                    icon: 'pi pi-fw pi-briefcase',
                    template: (item: any, options: any) => {
                        return (
                            <Link to='/dochub' className={options.className}>
                                <span className={item.icon}></span>
                                <span className={options.labelClassName + ' ml-2'}>{item.label}</span>
                            </Link>
                        );
                    }
                }, {
                    label: 'Создать',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'СЗ',
                            icon: 'pi pi-fw pi-envelope',
                            template: (item: any, options: any) => {
                                return (
                                    <Link to='/docnewsz' className={options.className}>
                                        <span className={item.icon}></span>
                                        <span className={options.labelClassName + ' ml-2'}>{item.label}</span>
                                    </Link>
                                );
                            }
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
            template: (item: any, options: any) => {
                return (
                    <Link to='/admin' className={options.className}>
                        <span className={item.icon}></span>
                        <span className={options.labelClassName + ' ml-2'}>{item.label}</span>
                    </Link>
                );
            }
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
        }
    ];

    return (
        <div>
            <div className="card z-5" style={{ position: 'relative' }}>
                <Menubar model={items} start={start} end={end} />
            </div>
        </div>
    )
}

export { NavHeader };
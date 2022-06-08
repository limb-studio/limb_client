import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import { LDataTable } from "../../../components/LDataTable";

export function UsersDataTable() {
    const { loading, error, data } = useQuery(gql`
        query users {
            users {
                id
                login
                firstname
                secondname
                lastname
            }
        }
    `);
    let dblClick = (options: any) => {
        window.open('/admin/users/' + options.data.id, '_blank');
    }
    let fields = [
        {
            key: 'login',
            title: 'Логин'
        },
        {
            key: 'lastname',
            title: 'Фамилия'
        },
        {
            key: 'firstname',
            title: 'Имя'
        },
        {
            key: 'secondname',
            title: 'Отчество'
        }
    ]
    if (loading) return <p>Loading...</p>;
    else if (error) return <p>Error :(</p>;
    else {
        let users = data.users;
        return (
            <LDataTable title="Пользователи" data={users} onDBLClick={dblClick} fields={fields} addPanel={'test2'}></LDataTable>
        )
    }
}
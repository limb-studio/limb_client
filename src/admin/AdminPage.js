import { Card } from 'primereact/card';
import React from "react";

export default function AdminPage() {
    const usersClicked = () => {
        document.location.href = "/admin/users"
    }
    return (<div className='' onClick={() => usersClicked()}>
        Пользователи
    </div>)

}
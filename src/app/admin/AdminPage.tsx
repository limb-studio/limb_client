import { Card } from 'primereact/card';
import React from "react";
import { Link } from "react-router-dom";

export function AdminPage() {
    return (<Link to='/admin/users'>
        Пользователи
    </Link>)

}
import React from "react";
import { useParams } from "react-router-dom";

export function AdminUserEditPage(props:any, state:any) {
    let params = useParams();
    return (<div>AdminUserEditPage - { params.id }</div>)
    
}
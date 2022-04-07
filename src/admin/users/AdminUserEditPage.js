import React from "react";
import { useParams } from "react-router-dom";

export default function AdminUserEditPage(props, state) {
    let params = useParams();
    return (<div>AdminUserEditPage - { params.id }</div>)
    
}
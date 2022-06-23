import React, { Fragment, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { AutoComplete, AutoCompleteChangeParams, AutoCompleteProps, AutoCompleteSelectParams } from 'primereact/autocomplete';

function UserSelect(props:AutoCompleteProps) {
    const [pick, setPick] = useState<any>();
    const [filteredUsers, setFilteredUsers] = useState<any>(null);
    var { loading, error, data, refetch } = useQuery(
        gql`
                query usersByFullName ($fullname: String!) {
                    usersByFullName(fullname: $fullname) {
                        id
                        login
                        firstname
                       secondname
                       lastname
                       fullname
                    }
                }
           `, { variables: { "fullname": '' } });
    return (
        <AutoComplete id={props.id} className={props.className} value={pick} suggestions={data?.usersByFullName} minLength={4} completeMethod={(event: any) => refetch({ "fullname": event.query.toLowerCase() })} field="fullname" onChange={(e) => {setPick(e.value)}} onSelect={props.onSelect} />
    )
}

export { UserSelect };
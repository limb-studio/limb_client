import { ApolloClient, gql, ApolloError, InMemoryCache } from "@apollo/client"

export class UsersSource {

    private _client: any = new ApolloClient({
        uri: 'http://localhost:3001/graphql',
        cache: new InMemoryCache()
    });

    private _data: Array<any> = []
    private _loading: boolean = false;
    private _error: ApolloError | undefined;

    public find(text: String): Array<any> {
        console.log('t')
        this._loading = true;
        let result = this._client.query({
            query: gql`
            query users ($fullname: String!) {
                users(fullname: $fullname) {
                    id
                    login
                    firstname
                   secondname
                   lastname
                }
            }
       `,
       variables: {"fullname":text}}, )
       console.log( result)
       return result
    }
}
import { ApolloClient, gql, ApolloError, InMemoryCache } from "@apollo/client"


export class UsersTableSource {

    private _client: any = new ApolloClient({
        uri: 'http://localhost:3001/graphql',
        cache: new InMemoryCache()
    });

    private _data: Array<any> = []
    private _loading: boolean = false;
    private _error: ApolloError | undefined;

    private fetch(): Promise<Array<any>> {
        this._loading = true;
        let result = this._client.query({
            query: gql`
            query users {
                users {
                    id
                    login
                    firstname
                   secondname
                   lastname
                }
            }
       `})
       return result
    //    console.log(result.data.users)
    //    this._data = result.data.users;
    //    this._loading = false;
    }
    
    get data(): Promise<Array<any>> {
        return this.fetch();
    }
    get loading(): boolean {
        return false;
    };
    get error(): string {
        return ''
    };
    get currentLength(): number {
        return this._data.length;
    };
    get maxLength(): number {
        return 0
    };
    get fullyLoaded(): boolean {
        return true;
    };
}
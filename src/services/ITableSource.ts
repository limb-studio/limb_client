export interface ITableSource {

    get data(): Promise<Array<any>>;
    get loading(): boolean;
    get error(): string;
    get currentLength(): number;
    get maxLength(): number;
    get fullyLoaded(): boolean;
}
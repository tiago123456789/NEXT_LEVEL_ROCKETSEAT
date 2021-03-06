import Knex, { Transaction } from "knex";
import connection from "./../config/Database";

abstract class Repository {

    private connection: Knex;
    protected table: string;

    constructor(table: string) {
        this.connection = connection;
        this.table = table;
    }

    public findAll(columns: Array<string> = ["*"], conditions: { [key: string]: any } = {}) {
        const columnsReturnedQuery: string = columns.join(",");
        return this.connection(this.table)
            .where(conditions)
            .select(columnsReturnedQuery);
    }

    public findById(id: number) {
        return this.connection(this.table)
            .where({ id: id })
            .select("*");
    }

    public remove(id: number) {
        return this.connection(this.table)
            .where({ id: id })
            .delete();
    }

    public create(newRegister: { [key: string]: any }): Promise<any> {
        return this.connection(this.table)
            .returning('id')
            .insert(newRegister);
    }

    public update(id: number, datasModified: { [key: string]: any }) {
        return this.connection(this.table).where({ id: id }).update(datasModified);
    }

    protected getConnection() {
        return this.connection;
    }

}

export default Repository;
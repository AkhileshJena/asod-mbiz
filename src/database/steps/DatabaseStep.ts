import test from "@playwright/test";
import { IRecordSet } from "mssql";
import Assert from "@asserts/Assert";
import DBUtil from "@utils/DBUtil";
import DatabaseConstants from "@dbConstants/DatabaseConstants";
import { MongoClient } from 'mongodb';

export default class DatabaseStep {
    

    public async executeOracleQuery(query: string) {
        let result: { rows: unknown[]; rowsAffected: number; };
        await test.step('Executing query in Oracle db', async () => {
            result = await DBUtil.executeOracleQuery(process.env.ORACLE_CONFIG, query);
            console.log(result);
        });
        return result;
    }

    public async executePostgreSQLQuery(query: string){
        let result: {rows: unknown[]; rowsAffected: number;};
        await test.step('Executing query in PostgreSql DB', async () => {
            result = await DBUtil.executePostgreSQLQuery(process.env.POSTGRESQL_CONFIG, query);
            console.log(result);
    });
    return result;
    }

    public async verifyQuerySuccess(rowsAffected: number) {
        await test.step('Verify query is success', async () => {
            await Assert.assertFalse(rowsAffected > 0, DatabaseConstants.QUERY_EXECUTION);
        });
    }

    public async verifyExecutionSuccess(rowsAffected: number) {
        await test.step('Verify query execution is success', async () => {
            await Assert.assertTrue(rowsAffected > 0, DatabaseConstants.QUERY_EXECUTION);
        });
    }
}

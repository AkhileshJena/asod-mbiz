import Allure from "@allure";
import ExcelUtil from "@utils/ExcelUtil";
import DatabaseStep from "@dbSteps/DatabaseStep";
import { test } from "@base-test";

const SHEET = "DatabaseTest";
// eslint-disable-next-line no-restricted-syntax
const data1 = ExcelUtil.getTestData(SHEET, "TC01_SelectQuery_Oracle");
    test(`${data1.TestID} - ${data1.Description}`, async ({ }) => {
        Allure.attachDetails(data1.Description, data1.Issue);
        const db = new DatabaseStep();
        const result = await db.executeOracleQuery(data1.Query);
        await db.verifyQuerySuccess(result.rowsAffected);
    });

// eslint-disable-next-line no-restricted-syntax
const data2 = ExcelUtil.getTestData(SHEET, "TC02_UpdateQuery_Oracle");
    test(`${data2.TestID} - ${data2.Description}`, async ({ }) => {
    Allure.attachDetails(data2.Description, data2.Issue);
    const db = new DatabaseStep();
    const result = await db.executeOracleQuery(data2.Query);
    await db.verifyExecutionSuccess(result.rowsAffected);
    const result1 = await db.executeOracleQuery(data1.Query);
    await db.verifyQuerySuccess(result1.rowsAffected);
});

const data3 = ExcelUtil.getTestData(SHEET, "TC03_SelectQuery_PostgreSQL");
    test(`${data3.TestID} - ${data3.Description}`, async ({ }) => {
    Allure.attachDetails(data3.Description, data3.Issue);
    const db = new DatabaseStep();
    const result = await db.executePostgreSQLQuery(data3.Query);
    await db.verifyQuerySuccess(result.rowsAffected);
});
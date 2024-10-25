/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import * as sql from "mssql";
import oracledb from "oracledb";
import mongodb from "mongodb";
import { Pool } from 'pg';
import CommonConstants from "../constants/CommonConstants";
import DBConstants from "../constants/DBConstants";

export default class DBUtil {
  

  /**
   * Executes the query on Oracle database
   * @param dbConfig data base configuration
   * @param query to be executed
   * @returns record set
   */
  public static async executeOracleQuery(dbConfig: string, query: string) {
    const configs = dbConfig.split(CommonConstants.SEMICOLON);
    const config = {
      user: configs[0].replace(DBConstants.USER, CommonConstants.BLANK).trim(),
      password: configs[1].replace(DBConstants.PASSWORD, CommonConstants.BLANK).trim(),
      connectString: configs[2].replace(DBConstants.CONNECTION_STRING, CommonConstants.BLANK).trim(),
    };
    let connection: oracledb.Connection;
    try {
      connection = await oracledb.getConnection(config);
      const result = await connection.execute(query);
      connection.commit();
      return { rows: result.rows, rowsAffected: result.rowsAffected };
    } catch (err) {
      throw new Error(`Error while executing query\n${err.message}`);
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
/**
 * Executes the query on PostgreSQL database
 * @param dbConfig database configuration
 * @param query to be executed
 * @returns record set
 */

  public static async executePostgreSQLQuery(dbConfig: string, query: string) {
    const configs = dbConfig.split(CommonConstants.SEMICOLON);
    const config = {
      user: configs[0].replace(DBConstants.USER, CommonConstants.BLANK).trim(),
      password: configs[1].replace(DBConstants.PASSWORD, CommonConstants.BLANK).trim(),
      host: configs[2].replace(DBConstants.HOST, CommonConstants.BLANK).trim(),
      database: configs[3].replace(DBConstants.DATABASE, CommonConstants.BLANK).trim(),
      port: configs[4].replace(DBConstants.PORT, CommonConstants.BLANK).trim(),
      

    };
    const pool = new Pool(config);

    try {
      const client = await pool.connect();
      try{
        const result = await client.query(query);
        return { rows: result.rows, rowsAffected: result.rowsAffected };
      } finally {
        client.release();
      }
    } catch (err){
      throw new Error(`Error while executing query\n${err.message}`);
    } finally {
      await pool.end();
    }
  }
}
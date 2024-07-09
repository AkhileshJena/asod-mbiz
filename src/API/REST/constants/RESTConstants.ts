export default class RESTConstants {
    private static username = process.env.REST_API_USERNAME;
    private static password = process.env.REST_API_PASSWORD;
    private static base64Credentials1: string;
    private static base64Credentials2: string;
    private static getUsername = process.env.REST_API_GETUSERNAME;
    private static getPassword = process.env.REST_API_GETPASSWORD;
    constructor() {
        
    }

    static readonly CONTENT_TYPE = 'Content-Type';
    static readonly ACCEPT = 'Accept';
    static readonly CONTENT_JSON = "application/json";
    static readonly STATUS_CODE = "Status Code";
    static readonly BASIC_AUTH = "Authorization";

   
    static get BEARER_AUTH(): string {
        if (!this.base64Credentials1) {
            this.base64Credentials1 = Buffer.from(`${this.username}:${this.password}`).toString('base64');
        }
        return "Basic " + this.base64Credentials1;
    }

    static get BEARE_AUTH_GET(): string{
        if(!this.base64Credentials2){
            this.base64Credentials2 = Buffer.from(`${this.getUsername}:${this.getPassword}`).toString('base64');
        }
        return "Basic " + this.base64Credentials2;
    }
}
import APISteps from "@restSteps/APISteps";
import { test } from "@base-test";
import Allure from "@allure";
import ExcelUtil from "@utils/ExcelUtil";
import StringUtil from "@utils/StringUtil";

const SHEET = "RESTUserTest";
let user: APISteps;
test.beforeEach(async ({ page }) => {
    user = new APISteps(page);
});


const mobORDS = ExcelUtil.getTestData(SHEET, "TC01_ORDS_GetFanOEDataAKS");
test(`${mobORDS.TestID} - ${mobORDS.Description}`, async ({gData}) => {
    Allure.attachDetails(mobORDS.Description, mobORDS.Issue);
    const response = await user.get(mobORDS.EndPoint, mobORDS.Operation);
    await user.verifyStatusCode(response, mobORDS.Status);
    const fanId = await user.extractResponseValue(response, mobORDS.JSONPath, mobORDS.Operation);
    gData.set("fanId", fanId);
});

const opStat = ExcelUtil.getTestData(SHEET, "TC02_OpStatus");
test(`${opStat.TestID} - ${opStat.Description}`, async ({gData}) => {
    Allure.attachDetails(opStat.Description, opStat.Issue);
    const fanNumber = StringUtil.randomNumberString(5);
    const requestData = {
        fanNumber: gData.get("fanId"), // currently setting random, can be changed to controlled value from excel
    };
    const response = await user.post(opStat.EndPoint, opStat.RequestBody, requestData, opStat.Operation);
    await user.verifyStatusCode(response, opStat.Status);
    const fanId = await user.extractResponseValue(response, opStat.JSONPath, opStat.Operation);
    await user.verifyContent(response, opStat.JSONPath, fanId, opStat.Operation);
    //gData.set("fanId", fanId); // use this fanId in subsequent tests if needed for input
});
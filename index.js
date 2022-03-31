const { loaduser } = require("./sheetmodel")
const express = require('express') 
const obj = require('./sheetData(1).json')
console.log(obj)
//const { auth } = require('google-auth-library')
//const{google} = require('googleapis')


const RESPONSES_SHEET_ID = "1ZvtHNQhTA3NKAZSg0NitiRvO_jxCfmj1Z9VJC-RKV20"
const doc = new GoogleSpread(RESPONSES_SHEET_ID)
const CREDENTIALS = JSON.parse(fs.readFileSync('teesta-345809-888f293762a4.json'))
const addRow = async (rows) => {
    await doc.useServiceAccountAuth({

        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    })
    await doc.loadInfo()
    let sheet = doc.sheetsByIndex[0]
    for(let index=0; index<rows.lengtj; index++)
    {
        const row = row[index]
        await sheet.addRow(row)
    }
    // let rows =[{

    // }]
 }
// const app = express()
// app.get("/",async(req,res) => {
//     const auth = new google.auth.GoogleAuth({
//         keyFile: "credentials.json",
//         scopes: "https://www.googleapis.com/auth/spreadsheets",
//     })

let rows = loaduser()
addRow = rows

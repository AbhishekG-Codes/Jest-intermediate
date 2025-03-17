import {describe,expect,it} from "@jest/globals"
import {app} from "../index"
import request from "supertest"
describe("checking express",()=>{
    it("should return 2 whn sent 1+1",async ()=>{
        const res = await request(app).post("/sum").send({
            a:1,
            b:1
        })
        expect(res.body.answer).toBe(2)
    })
})
describe("get route",()=>{
    it("should return working",async ()=>{
        const res = await request(app).get("/success").send({})
        expect(res.body.success).toBe("working")
    })
})
describe("checking express", () => {
    it("should return correct message when updating age", async () => {
        const age = Math.floor(Math.random() * 100); // any age the user passess
        const res = await request(app).patch("/update-age").send({ age });
        expect(res.body.message).toBe(`Updated age to ${age}`);
    });
});


// import {describe,it,expect} from "@jest/globals"
// import request from "supertest"
// import {app} from "../index"

// describe("checking express",()=>{
//     it("recving message",async ()=>{
//         const res = await request(app).post("/add").send({
//             num1:1,
//             num2:2
//         })
//         expect(res.body.sum).toBe(3)
//     })
//     it("wrong datatype",async ()=>{
//         const res = await request(app).post("/add").send({
//             num1:"abhi",
//             num2:2
//         })
//         expect(res.body.error).toBe("Both num1 and num2 must be numbers")
//     })
// })

import express,{Request,Response} from "express"
export const app = express()

app.use(express.json())
app.post("/sum",(req:Request,res:Response)=>{
    const {a,b}= req.body;
    const ans = a+b
    res.json({answer:ans})
})

app.get("/success",(req:Request,res:Response)=>{
    res.json({success:"working"})
})

app.patch("/update-age", (req: Request, res: Response) => {
    const { age } = req.body;
    res.json({ message: `Updated age to ${age}` });
});

// import express, { Request, Response } from "express";

// export const app = express();
// app.use(express.json());

// app.post("/add", (req: Request, res: Response) => {
//     const { num1, num2 } = req.body;
//     if (typeof num1 !== "number" || typeof num2 !== "number") {
//         return res.status(400).json({ error: "Both num1 and num2 must be numbers" });
//     }
//     const sum = num1 + num2;
//     res.json({ sum });
// });

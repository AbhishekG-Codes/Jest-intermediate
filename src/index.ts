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
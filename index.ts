import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

app.post("/", async (req: Request, res: Response) => {
  console.log({e: req.body})
  const { reqID, from, to, budget, status } = req.body;
  const rideRequest = await prisma.rideRequest.create({
    data: {
      reqID: reqID,
      from: from,
      to: to,
      budget: Number(budget),
      status: "available",
    },
  });
  res.json(rideRequest);
});

app.get("/", async (req: Request, res: Response) => {
  const list = await prisma.rideRequest.findMany();
  res.json(list);
});

// app.put("/", async (req: Request, res: Response) => {
//   const { reqID, budget } = req.body;
//   const newrideRequest = await prisma.rideRequest.update({
//     where: {
//       reqID: reqID,
//     },
//     data: {
//       budget: budget,
//     },
//   });
//   res.json(newrideRequest);
// });

// app.delete("/:reqID", async (req: Request, res: Response) => {
//   const reqID = req.params.reqID;
//   const deletedUser = await prisma.rideRequest.delete({
//     where: {
//       reqID: reqID,
//     },
//   });
//   res.json(deletedUser);
// });

app.listen(8000, () => {
  console.log("Server Running on Port 8000");
});

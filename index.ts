// @ts-nocheck

import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import ethers from "ethers";
import fs from "fs";

const ethers = require("ethers");
const fs = require("fs");

let contract = null;

(async () => {
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545");
  // const wallet = new ethers.Wallet(
  //   "0x374d08ad6ae1073415a13db75077f1c12147a23d75a5193d5980c12c1ff3aaa8",
  //   provider
  // );
  const contractAddress =
    "0xee07c69af01ea31e6daf77829933cf0f749bf143edf735f09538d734f7c24aad";
  const abi = fs.readFileSync("./contract_sol_StringArray.abi", "utf-8");
  const contract_ = new ethers.Contract(contractAddress, abi, provider);
  contract = await contract_.methods.getAllStrings();
  console.log({ contract });
})();

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(cors());

app.post("/", async (req: Request, res: Response) => {
  console.log({ e: req.body });
  const { reqID, from, to, budget, status } = req.body;
  const data = JSON.stringify(req.body);
  const result = await contract.getAllStrings();
  // console.log({ contract });
  console.log({ result });
  // const rideRequest = await prisma.rideRequest.create({
  //   data: {
  //     reqID: reqID,
  //     from: from,
  //     to: to,
  //     budget: Number(budget),
  //     status: "available",
  //   },
  // });
  // res.json(rideRequest);
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

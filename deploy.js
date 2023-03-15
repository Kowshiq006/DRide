const ethers = require("ethers");
const fs = require("fs");

(async () => {
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545");
  const wallet = new ethers.Wallet(
    "0x374d08ad6ae1073415a13db75077f1c12147a23d75a5193d5980c12c1ff3aaa8",
    provider
  );

  const abi = fs.readFileSync("./contract_sol_StringArray.abi", "utf-8");
  const bin = fs.readFileSync("./contract_sol_StringArray.bin", "utf-8");
  const contractFactory = new ethers.ContractFactory(abi, bin, wallet);
  const contract = await contractFactory.deploy();
  console.log({ contract });
})();

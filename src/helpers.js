import Web3 from "web3";

export const getAccount = async () => {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  return account;
};

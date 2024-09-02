const westwallet = require('westwallet-api');
const westwalletErrors = require('westwallet-api/lib/errors');

const publicKey = process.env.WEST_PUBLICKEY;
const privateKey = process.env.WEST_PRIVATEKEY;
const hook = process.env.WEST_HOOK;

export const getBalance = async ()=>{
    let client = new westwallet.WestWalletAPI(
        publicKey, 
        privateKey
    );
    try{
        const data = await client.walletBalances();
        return data;
    }catch(err){
        console.log(err)
    }
}

export const createAddress = async (email)=>{
    let client = new westwallet.WestWalletAPI(
        publicKey, 
        privateKey
    );
    try{
        console.log(hook)
        const USDTERC = await client.generateAddress("USDTERC", hook , email);
        return { address: USDTERC.address };
    }catch(err){
        console.log(err)
        console.log("err")
        if (err instanceof westwalletErrors.CurrencyNotFoundError) {
            console.log("No such currency");
        }
        return err; 

    }
}


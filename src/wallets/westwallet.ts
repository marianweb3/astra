const westwallet = require('westwallet-api');
import westwalletErrors from 'westwallet-api/lib/errors';

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

export const createAddress = async (userAddress)=>{
    let client = new westwallet.WestWalletAPI(
        publicKey, 
        privateKey
    );
    try{
        const USDTERC = await client.generateAddress("USDTERC", hook , "1234");
        return { address: USDTERC.address };
    }catch(err){
        if (err instanceof westwalletErrors.CurrencyNotFoundError) {
            console.log("No such currency");
        }
        return err; 

    }
}


import { Schema, model, models, Types } from "mongoose";

const transactionSchema = new Schema({
    address: {
        type: String,
        required: [true, "Address is required"],
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"],
    },
    hash: {
        type: String,
        required: [true, "Hash is required"],
    }
});

const Transaction = models.Transaction || model("Transaction", transactionSchema);
export default Transaction;
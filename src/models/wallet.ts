import { Schema, model, models, Types } from "mongoose";

const walletSchema = new Schema({
    user: {
        type: Types.ObjectId,
        ref: 'User',
        required: [true, "User is required"],
    },
    address: {
        type: String,
        required: [true, "Address is required"],
    },
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    network: {
        type: String,
        required: [true, "Network is required"],
    }
});

const Wallet = models.Wallet || model("Wallet", walletSchema);
export default Wallet;
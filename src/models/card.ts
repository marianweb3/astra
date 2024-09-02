import { Schema, model, models, Types } from "mongoose";

const cardSchema = new Schema({
    user: {
        type: Types.ObjectId,
        ref: 'User',
        required: [true, "User is required"],
    },
    number: {
        type: String,
        required: [true, "Number is required"],
    },
    cvv: {
        type: String,
        required: [true, "Cvv is required"],
    },
    expiration: {
        type: String,
        required: [true, "Expiration is required"],
    },
    id: {
        type: String,
        required: [true, "Id is required"],
    }
});

const Card = models.Card || model("Card", cardSchema);
export default Card;
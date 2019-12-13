"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const uri = 'mongodb+srv://sagarvasu:loveyoubaba@cluster0-new9o.mongodb.net/test?retryWrites=true&w=majority';
mongoose_1.default.connect(uri, { useNewUrlParser: true });
exports.default = mongoose_1.default;

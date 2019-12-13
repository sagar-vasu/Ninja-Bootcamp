"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Todo_1 = __importDefault(require("../../models/Todo/Todo"));
// Get All the Tasks
router.get('/tasks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Todos = yield Todo_1.default.find();
    res.send(Todos);
}));
// Add New Task
router.post('/tasks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const addTask = new Todo_1.default(req.body);
        yield addTask.save();
        res.send({ message: 'Task succesfully added!' });
    }
    catch (e) {
        res.status(400).send({ message: e.message });
    }
}));
// Get Single Datra tasks/:id
router.get('/tasks/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield Todo_1.default.findOne();
        res.send(todo);
    }
    catch (e) {
        res.status(400).send({ message: e.message });
    }
}));
//  Update Todo:id
router.put('/tasks/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Todo_1.default.findByIdAndUpdate({ _id: req.body.id }, {
            isDone: req.body.isDone,
            title: req.body.title,
            description: req.body.description
        });
        res.send({ message: 'Task Updated !' });
    }
    catch (e) {
        res.status(400).send({ message: e.message });
    }
}));
// Delete Task:id
router.delete('/tasks/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Todo_1.default.findByIdAndDelete({ _id: req.body.id });
        res.send({ message: 'Task Deleted !' });
    }
    catch (e) {
        res.status(400).send({ message: e.message });
    }
}));
module.exports = router;

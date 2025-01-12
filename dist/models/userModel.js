"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserById = exports.createUser = void 0;
const db_1 = __importDefault(require("../config/db"));
const createUser = (username, password, firebaseUid) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO users (username, password, firebase_uid) VALUES (?, ?, ?)";
        db_1.default.execute(query, [username, password, firebaseUid], (err, results) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(results);
            }
        });
    });
};
exports.createUser = createUser;
const findUserById = (userId) => {
    return new Promise((resolve, reject) => {
        db_1.default.execute("SELECT * FROM users WHERE id = ?", [userId], (err, results) => {
            if (err) {
                reject(err);
            }
            else if (results.length > 0) {
                resolve(results[0]);
            }
            else {
                resolve(null);
            }
        });
    });
};
exports.findUserById = findUserById;

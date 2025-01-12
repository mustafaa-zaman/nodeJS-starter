"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ message: 'Internal server error' });
};
exports.errorHandler = errorHandler;

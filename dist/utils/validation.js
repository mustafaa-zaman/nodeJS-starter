"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const validateUser = (data) => {
    const { username, password } = data;
    if (!username || username.length < 3)
        return false;
    if (!password || password.length < 6)
        return false;
    return true;
};
exports.validateUser = validateUser;

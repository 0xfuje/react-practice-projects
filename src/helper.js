const crypto = require("crypto");

const id = () => {
    const id = crypto.randomBytes(4).toString("hex");
    return id;
}

export { id };
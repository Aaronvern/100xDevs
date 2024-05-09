const express = require('express');
const z = require('zod');
const app = express();
const port = 3000;

app.use(express.json());

function authcheck(req, res, next) {
    const input = req.body.input;
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(8),
        country: z.literal('IN')
    });

    const validationResult = schema.safeParse(input);
    if (validationResult.success) {
        next();
    } else {
        res.status(411).json({
            msg: "Invalid input. Access denied!"
        });
    }
}

app.get('/', authcheck, (req, res) => {
    const input = req.body.input; // Access the validated input
    res.json({
        input,
        msg: "Congratulations Aaron. You are logged in",
    });
});

app.use((err, req, res, next) => {
    res.status(500).json({
        msg: "Internal server error"
    });
});

app.listen(port, () => {
    console.log("Server is listening on port " + port);
});

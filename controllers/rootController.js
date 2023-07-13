const controller = (req,res)=>{
    const data = `
    <h2 style="color:cornflowerblue;text-align: center;">
        The server is Running!!!
    </h2>`;
    res.status(200).send(data);
};

module.exports = controller;
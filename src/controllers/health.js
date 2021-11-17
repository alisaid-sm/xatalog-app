module.exports = {
    health: (req, res) => {
        return res.status(200).send('Status OK');
    }
}
export default async (req, res) => {
    if (req.method === 'POST') {
        const { email, rollNumber, password } = req.body;
        res.status(200).json({ email, rollNumber, password });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};

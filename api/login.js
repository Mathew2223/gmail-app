export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Только POST запросы" });
  }

  const { email, password } = req.body || {};

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Заполни все поля" });
  }

  return res.status(200).json({
    success: true,
    token: "mock-jwt-12345",
    message: "Вход выполнен!",
  });
}

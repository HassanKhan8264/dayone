import { authController } from "../auth/authControler";
import { Request, Response } from "express";
import express from "express";
import { authenticateToken } from "../middleware/middleware";
const router = express.Router();
const authControler = new authController();

// authentication
router.post("/auth/register", authControler.register);
router.post("/auth/login", authControler.login);
router.post("/auth/logout", authControler.logout);

// userAuthentication
router.get(
  "/verifyTokenStatus",
  authenticateToken,
  (req: Request, res: Response) => {
    res.json({ authenticated: true, user: req.user });
  },
);

export default router;

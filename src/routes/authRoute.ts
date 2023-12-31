import express, { Request } from "express";
import asyncHandler from "../utils/asyncHandler";
import AuthController from "../controllers/authController";
import authCheck from "../Middlewares/authCheck"
import {
  validateRequest,
  registerSchema,
} from "../Middlewares/validationMiddleware";
import multer from "multer";
import { S3Client } from "@aws-sdk/client-s3";
const multerS3 = require("multer-s3");

const authRouter = express.Router();
const s3 = new S3Client();

// multer-s3 configuration
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    metadata: function (
      _req: any,
      file: { fieldname: any },
      cb: (arg0: null, arg1: { fieldName: any }) => void
    ) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (
      _req: any,
      file: { originalname: string },
      cb: (arg0: null, arg1: string) => void
    ) {
      const fileName = Date.now().toString() + "-" + file.originalname;
      cb(null, fileName);
    },
  }),
  limits: {
    fileSize: 100 * 1024 * 1024, // Set to 100 MB, adjust as needed
    fieldNameSize: 1000, // Max field name size
    fieldSize: 100 * 1024 * 1024, // Max field size
  },
});

// Define fields for images
const imageFields = [
  { name: "img1", maxCount: 1 },
  { name: "img2", maxCount: 1 },
  { name: "img3", maxCount: 1 },
];

authRouter.post("/register", upload.fields(imageFields), (req, res, next) => {
  (async () => {
    try {
      // Call your registerNewCustomer function
      await AuthController.registerNewCustomer(req, res);
    } catch (error) {
      if (
        error instanceof multer.MulterError &&
        error.code === "LIMIT_UNEXPECTED_FILE"
      ) {
        // Handle specific Multer error
        res.status(400).json({ error: "File size is too large." });
      } else {
        // Pass other errors to the next error handler
        next(error);
      }
    }
  })();
});
// authRouter.post("/register",upload.fields(imageFields), AuthController.signin);
authRouter.post("/signin", AuthController.signin);
authRouter.get("/signout", AuthController.signout);
authRouter.post("/confirm-email", AuthController.confirmEmail);
authRouter.post("/request-password-reset", AuthController.requestPasswordReset);
authRouter.post("/reset-password", AuthController.resetPassword);
authRouter.get('/member/terms-accepted-get', authCheck, AuthController.getTermsAcceptedStatus);
authRouter.post('/member/terms-accepted', authCheck, AuthController.updateTermsAccepted);

export default authRouter;
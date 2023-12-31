import { Request, Response } from "express";
import Customer from "../db/models/dtb_customer";
import Corporation from "../db/models/dtb_corporation";
import bcryptjs from "bcryptjs";
import CryptoJS from "crypto-js";
import crypto from 'crypto'
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import jwt, { JwtPayload } from "jsonwebtoken";
import { sendEmail } from "../utils/aws-ses";
import { Op } from "sequelize";
import sequelizeConnection from "../config/dbConnect";
import { generateHashString as importedGenerateHashString } from "../helpers/helpers";
import { promises as fsPromises } from 'fs';

import { formatTime } from "../helpers/helpers";
const fs = fsPromises;
// import Sequelize from "sequelize/types/sequelize";

// Initialize the S3 Client with your region
const s3Client = new S3Client({ region: process.env.AWS_BUCKET_REGION });

const uploadBase64ImageToS3 = async (
  base64Image: string,
  bucketName: any,
  fileName: any
) => {
  const matches = base64Image.match(/^data:(.+);base64,(.*)$/);
  if (!matches) {
    throw new Error("Invalid base64 string");
  }

  const mimeType = matches[1];
  const base64Data = matches[2];
  const buffer = Buffer.from(base64Data, "base64");

  const uploadParams = {
    Bucket: bucketName,
    Key: fileName,
    Body: buffer,
    ContentType: mimeType,
  };

  const command = new PutObjectCommand(uploadParams);
  await s3Client.send(command);
  return `https://${bucketName}.s3.amazonaws.com/${fileName}`;
};

// const registerNewCustomer = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   // const filess = req.files as { [fieldname: string]: Express.Multer.File[] };
//   // const img1Urls = filess?.img1?.[0]?.location || '';
//   console.log(req.body, "****");
//   //    console.log(img1Urls,"****")
//   try {
//   const {
//     name01,
//     kana01,
//     zip01,
//     zip02,
//     pref,
//     addr01,
//     addr02,
//     email,
//     email_mobile,
//     tel01,
//     tel02,
//     tel03,
//     fax01,
//     fax02,
//     fax03,
//     password,
//     reminder,
//     reminder_answer,
//     delegate_position,
//     delegate_name01,
//     delegate_name02,
//     delegate_kana01,
//     delegate_kana02,
//     charge_name01,
//     charge_name02,
//     charge_kana01,
//     charge_kana02,
//     corporate_image,
//     classified01,
//     classified02,
//     classified03,
//     classified04,
//     classified05,
//     partner_flg,
//     capital,
//     business_content,
//     open_time,
//     close_time,
//     regular_holiday,
//     remarks,
//     establishment_date,
//     corporate_url,
//     employees_number,
//     employees_site_area,
//     main_customer,
//     corporate_bank_name,
//     corporate_branch_name,
//     corporate_deposit_type,
//     corporate_account_number,
//     corporate_account_holder,
//     holiday_flg1,
//     holiday_flg2,
//     holiday_flg3,
//     holiday_flg4,
//     holiday_flg5,
//     holiday_flg6,
//     holiday_flg7,
//     usage_id,
//   } = req.body;

//   const bucketName = process.env.AWS_BUCKET_NAME;

//   const existingCustomer = await Customer.findOne({ where: { email } });
//   if (existingCustomer) {
//     return res.status(409).json({ message: "Email already in use." });
//   }

//   const hashedPassword = await bcryptjs.hash(password, 10);
//   const secretKey: string = importedGenerateHashString(16);

//   const img1Url = img1
//     ? await uploadBase64ImageToS3(
//         img1,
//         bucketName,
//         `img1-${CryptoJS.lib.WordArray.random(16).toString()}.png`
//       )
//     : "";
//   const img1Ur2 = img1
//     ? await uploadBase64ImageToS3(
//         img2,
//         bucketName,
//         `img1-${CryptoJS.lib.WordArray.random(16).toString()}.png`
//       )
//     : "";
//   const img1Url3 = img1
//     ? await uploadBase64ImageToS3(
//         img3,
//         bucketName,
//         `img1-${CryptoJS.lib.WordArray.random(16).toString()}.png`
//       )
//     : "";
// let ress="dsadsadsa"
//   const newCustomer = await Customer.create({
//     name01,
//     email,
//     password: hashedPassword,
//     kana01,
//     zip01,
//     zip02,
//     pref,
//     addr01,
//     addr02,
//     email_mobile,
//     tel01,
//     tel02,
//     tel03,
//     fax01,
//     fax02,
//     fax03,
//     reminder,
//     reminder_answer,
//     secret_key: secretKey,
//     note,
//     status:1,
//     del_flg:1,
//     mailmaga_flg:1,
//     shop_id: 1,

//     social_account_id,
//     delegate_position,
//     delegate_name01,
//     delegate_name02,
//     delegate_kana01,
//     delegate_kana02,
//     charge_name01,
//     charge_name02,
//     charge_kana01,
//     charge_kana02,
//     corporate_image,
//     classified01,
//     classified02,
//     classified03,
//     classified04,
//     classified05,
//     partner_flg,
//     capital,
//     business_content,
//     open_time,
//     close_time,
//     regular_holiday,
//     remarks,
//     establishment_date,
//     corporate_url:"dsadsadas/com",
//     employees_number,
//     employees_site_area,
//     main_customer,
//     corporate_bank_name,
//     corporate_branch_name,
//     corporate_deposit_type,
//     corporate_account_number,
//     corporate_account_holder,
//     holiday_flg1,
//     holiday_flg2,
//     holiday_flg3,
//     holiday_flg4,
//     holiday_flg5,
//     holiday_flg6,
//     holiday_flg7,
//     customer_code:"1",

//     transaction_bank:ress,
//     usage_id:1,
//     create_date: new Date(),
//   });

//   const jwtSecret = process.env.JWT_SECRET;
//   if (!jwtSecret) {
//     throw new Error("JWT secret is not defined");
//   }

//   const token = jwt.sign({ id: newCustomer.customer_id }, jwtSecret, {
//     expiresIn: "24h",
//   });
//   const verificationLink = `${req.protocol}://${req.get(
//     "host"
//   )}/api/v1/auth/confirmemail?token=${token}`;

//   const emailParams = {
//     Destination: { ToAddresses: [email] },
//     Message: {
//       Body: {
//         Html: {
//           Charset: "UTF-8",
//           Data: `<p>Click the following link to verify your email: <a href="${verificationLink}">${verificationLink}</a></p>`,
//         },
//       },
//       Subject: { Charset: "UTF-8", Data: "Email Verification" },
//     },
//     Source: process.env.AWS_SES_VERIFIED_EMAIL,
//   };

//   await sendEmail(emailParams);

//   return res.status(201).json({
//     status: 201,
//     message: "Customer created successfully",
//     data: { customer: newCustomer, token },
//   });
// } catch (error: unknown) {
//     if (error instanceof Error) {
//       console.error("Error occurred in registerNewCustomer:", error);

//       // Check for Sequelize specific errors

//       // Generic error response
//       return res.status(500).json({ status: 500, message: "An internal server error occurred." });
//     }

//     // If error is not an instance of Error
//     return res.status(500).json({ status: 500, message: "An unexpected error occurred." });
//   }
// };

const registerNewCustomer = async (
  req: Request,
  res: Response
): Promise<Response> => {
  let transaction;
  try {
    let {
      name01,
      kana01,
      zip01,
      zip02,
      pref,
      addr01,
      addr02,
      email,
      email_mobile,
      tel01,
      tel02,
      tel03,
      fax01,
      fax02,
      fax03,
      img1,
      img2,
      img3,
      password,
      reminder,
      reminder_answer,
      delegate_position,
      delegate_name01,
      delegate_name02,
      delegate_kana01,
      delegate_kana02,
      charge_name01,
      charge_name02,
      charge_kana01,
      charge_kana02,
      corporate_url,
      classified01,
      classified02,
      classified03,
      classified04,
      classified05,
      partner_flg,
      capital,
      business_content,
      open_time:openTimeInput,
      close_time:closeTimeInput,
      regular_holiday,
      remarks,
      establishment_date,
      employees_number,
      employees_site_area,
      main_customer,
      corporate_bank_name,
      corporate_branch_name,
      corporate_deposit_type,
      corporate_account_number,
      corporate_account_holder,
      holiday_flg1,
      holiday_flg2,
      holiday_flg3,
      holiday_flg4,
      holiday_flg5,
      holiday_flg6,
      holiday_flg7,
      usage_id,
      corporate_name,
      corporate_kana,
      
    } = req.body;
     delegate_position = "Default Position"; // Set a default value
     usage_id = 1;
     pref = 1;
    // Use open_time and close_time directly from req.body
    const formattedOpenTime = formatTime(openTimeInput) || 'Default Open Time';
    const formattedCloseTime = formatTime(closeTimeInput) || 'Default Close Time';
    // Check if customer already exists
    const existingCustomer = await Customer.findOne({ where: { email } });
    
    if (existingCustomer) {
      console.log( "***********************");
      return res.status(400).json({ message: "Email already in use." });
    }

     transaction = await sequelizeConnection.transaction();

 
      console.log(password,".......................")
      // Hash password
      const hashedPassword = await bcryptjs.hash(password, 10);

      // Generate a unique secret key
      const secretKey = importedGenerateHashString(16);

      // Extract transaction_bank or set a default value
      let { transaction_bank } = req.body;
      if (!transaction_bank) {
        transaction_bank = "Default Bank Name"; // Set a default value
      }
      const uniqueCustomerCode = `CUST-${new Date().getTime()}-${Math.random()
        .toString(36)
        .substring(2, 15)}`;
      const uniqueSocialCode = `SO_CODE-${new Date().getTime()}-${Math.random()
        .toString(36)
        .substring(2, 15)}`;
      const uniqueSocialId = `SO_ID-${new Date().getTime()}-${Math.random()
        .toString(36)
        .substring(2, 15)}`;

      

      const truncatedZip01 = zip01.substring(0, 3);
      
      if (formattedOpenTime === null || formattedCloseTime === null) {
        // Handle the case where open_time or close_time is null
        // Return an error response
        return res.status(400).json({
          status: 400,
          message:
            "Invalid time format for open_time or close_time. Expected format: 'HH:MM:SS'.",
        });
      }

      const bucketName = process.env.AWS_BUCKET_NAME;
      const img1Url = img1
        ? await uploadBase64ImageToS3(
            img1,
            bucketName,
            `img1-${CryptoJS.lib.WordArray.random(16).toString()}.png`
          )
        : "";
      const img1Ur2 = img1
        ? await uploadBase64ImageToS3(
            img2,
            bucketName,
            `img1-${CryptoJS.lib.WordArray.random(16).toString()}.png`
          )
        : "";
      const img1Url3 = img1
        ? await uploadBase64ImageToS3(
            img3,
            bucketName,
            `img1-${CryptoJS.lib.WordArray.random(16).toString()}.png`
          )
        : "";
          

      const newCustomer = await Customer.create(
        {
          name01,
          email,
          password: hashedPassword,
          kana01,
          zip01,
          zip02,
          pref,
          addr01,
          addr02,
          email_mobile,
          tel01,
          tel02,
          tel03,
          fax01,
          fax02,
          fax03,
          reminder,
          reminder_answer,
          secret_key: secretKey,
          note: "Additional notes here",
          status: 1,
          del_flg: 0,
          mailmaga_flg: 1,
          shop_id: 1,
          customer_code: uniqueCustomerCode,
          social_code: "1233",
          social_account_id: uniqueSocialId,
          delegate_position,
          delegate_name01,
          delegate_name02,
          delegate_kana01,
          delegate_kana02,
          charge_name01,
          charge_name02,
          charge_kana01,
          charge_kana02,
          corporate_url: corporate_url,
          classified01,
          classified02,
          classified03,
          classified04,
          classified05,
          partner_flg,
          capital:"23232",
          business_content,
          open_time:formattedOpenTime,
          close_time:formattedCloseTime,
          regular_holiday,
          remarks,
          establishment_date,
          employees_number,
          employees_site_area,
          main_customer,
          corporate_bank_name,
          corporate_branch_name,
          corporate_deposit_type,
          corporate_account_number,
          corporate_account_holder,
          holiday_flg1,
          holiday_flg2,
          holiday_flg3,
          holiday_flg4,
          holiday_flg5,
          holiday_flg6,
          holiday_flg7,
          usage_id,
          transaction_bank,
          create_date: new Date(),
          Terms_accepted: false,
        },
        { transaction }
      );

     
      // Create a new corporation record
      const newCorporation = await Corporation.create(
        {
          corporate_name: name01,
          corporate_kana: corporate_kana,
          chargename01: charge_name01,
          chargename02: charge_name02,
          chargekana01: charge_kana01,
          chargekana02: charge_kana02,
          corporate_email: email_mobile,
          corporate_zip01: zip01,
          corporate_zip02: zip02,
          corporate_pref: pref,
          corporate_addr01: addr01,
          corporate_addr02: addr02,
          corporate_tel01: tel01,
          corporate_tel02: tel02,
          corporate_tel03: tel03,
          corporate_fax01: fax01,
          corporate_fax02: fax02,
          corporate_fax03: fax03,
          status: 0,
          create_date: new Date(),
          update_date: new Date(),
          del_flg: 0,
          shop_id: 1,
          corporate_customer_id: newCustomer.customer_id,
        },
        { transaction }
      );

      await transaction.commit();

    // JWT token creation
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) throw new Error("JWT secret is not defined");

    const token = jwt.sign({ id: newCustomer.customer_id }, jwtSecret, { expiresIn: "24h" });

    // Email template processing
    const verificationLink = `${process.env.FRONT_END_URL}/registration-success?token=${token}`;
    let emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <title>ASNARO Membership Confirmation</title>
  <style>
    
  </style>
</head>
<body>
  <h1>ASNARO: 本会員登録が完了しました。</h1>

  <p>[CUSTOMER_NAME] [CUSTOMER_CHARGE] 様</p>

  <p>製造業受発注サイトASNAROでございます。</p>

  <p>この度は会員登録のご依頼をいただきまして、誠にありがとうございます。<br>
  本会員登録が完了いたしました。<br>
  今後ともどうぞASNAROをよろしくお願い申し上げます。</p>

  <p>ASNAROで確認するにはこちらから：<br>
  <a href="[URL]">[URL]</a></p>

  <p>工程登録など工程の受注業務を行う場合は、別途運営よりパートナー登録が必要になります。<br>
  ご希望の場合はお問い合わせやメッセージをご利用いただきご連絡ください。<br>
  <a href="mailto:[CONTACT_MAIL]">[CONTACT_MAIL]</a></p>

  <footer>
    <hr>
    <p>※本メールは、Asnaroより会員登録を希望された方にお送りしております。<br>
    もしお心当たりが無い場合は、その旨 info_asnaro@asnaro.co.jpまでご連絡いただければ幸いです。</p>
    <p>※本メールは自動配信メールです。<br>
    等幅フォント(MSゴシック12ポイント、Osaka-等幅など)で最適にご覧になれます。</p>
  </footer>
</body>
</html>
`;

// Replace placeholders in the email template
emailHtml = emailHtml.replace('[CUSTOMER_NAME]', newCustomer.name01)
                     .replace('[CUSTOMER_CHARGE]', 'Your Customer Charge Here') // Replace with actual data
                     .replace(/\[URL\]/g, verificationLink) // Replace with the actual URL
                     .replace('[CONTACT_MAIL]', 'info_asnaro@asnaro.co.jp'); // Replace with the actual contact email


    // Sending email using SES
    const emailParams = {
      Destination: { ToAddresses: [email] },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: emailHtml,
          },
        },
        Subject: { Charset: "UTF-8", Data: "Email Verification" },
      },
      Source: process.env.AWS_SES_VERIFIED_EMAIL,
    };
    await sendEmail(emailParams);

    // Sending response back to client
    return res.status(201).json({
      status: 201,
      message: "Customer created successfully",
      data: { customer: newCustomer, token },
    });

  } catch (error) {
    console.log(error)
    if (transaction) {
      await transaction.rollback();
    }
    console.error("Error occurred in registerNewCustomer:", error);
    return res.status(500).json({ status: 500, message: "Internal Server Error" });
  }
};

const confirmEmail = async (req: Request, res: Response): Promise<Response> => {
  const { token } = req.query;

  if (!token || typeof token !== "string") {
    return res
      .status(400)
      .json({ message: "Invalid token. Email confirmation failed." });
  }

  const decodedToken = jwt.verify(
    token,
    process.env.JWT_SECRET as string
  ) as JwtPayload;
  if (!decodedToken || typeof decodedToken === "string" || !decodedToken.id) {
    return res
      .status(400)
      .json({ message: "Invalid token. Email confirmation failed." });
  }

  const user = await Customer.findOne({
    where: { customer_id: decodedToken.id },
  });
  if (!user) {
    return res
      .status(404)
      .json({ message: "User not found. Email confirmation failed." });
  }

  if (user.isVerified) {
    return res.status(400).json({ message: "User is already verified." });
  }

  user.isVerified = true;
  await user.save();

  return res
    .status(200)
    .json({ message: "Email verification successful. You can now login." });
};

// const signin = async (req: Request, res: Response): Promise<void> => {
//   const { email, password } = req.body;

//   const user = await Customer.findOne({ where: { email } });

//   if (!user || !user.password) {
//     res.status(401).json({ message: "Invalid email or password" });
//     return;
//   }

//   const passwordMatch = bcryptjs.compareSync(password, user.password);
//   console.log(passwordMatch,"****xxxxx**************")
//   if (!passwordMatch) {
//     res.status(401).json({ message: "Invalid email or password" });
//     return;
//   }

//   const jwtSecret = process.env.JWT_SECRET as string;
//   if (!jwtSecret) {
//     throw new Error("JWT secret is not defined");
//   }

//   const token = jwt.sign({ id: user.customer_id }, jwtSecret, {
//     expiresIn: "1h",
//   });
//   res
//   .cookie('access_token', token, { httpOnly: true })
//     .status(200)
//     .json({ message: "Sign-in successful",token });
// };



const signin = async (req: Request, res: Response): Promise<any> => {

  const { email, password } = req.body;

  // Retrieve the user by their email
  const user = await Customer.findOne({ where: { email } });

  // If user does not exist or password field is empty
  if (!user || !user.password) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Check if the email has been verified
  if (!user.isVerified) {
    return res.status(403).json({ message: "Email is not verified. Please verify your email." });
  }

  // Check if the provided password matches the stored hashed password
  const passwordMatch = bcryptjs.compareSync(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Create a JWT token
  const jwtSecret = process.env.JWT_SECRET as string;
  if (!jwtSecret) {
    throw new Error("JWT secret is not defined");
  }

  const token = jwt.sign({ id: user.customer_id }, jwtSecret, {
    expiresIn: "1h",
  });
  const { password: userPassword, ...userWithoutPassword } = user.toJSON();
  // Send the token to the client
  res
  .cookie('access_token', token, { httpOnly: true })
  .status(200)
  .json({ message: "Sign-in successful", user: userWithoutPassword, token });
}

export const signout = async (req: Request, res: Response): Promise<void> => {
 
  // Clear the cookie named 'access_token'
  res.clearCookie('access_token');

  // Send a response indicating successful signout
  res.status(200).json({ message: 'Signout successful' });
};


export const requestPasswordReset = async (req: Request, res: Response): Promise<Response<any>> => {
  const email = req.body.email as string;

  try {
    const user = await Customer.findOne({ where: { email } });
    if (!user) {
      return res.status(200).json({ message: "If your email is registered, you will receive a password reset link." });
    }

    // Additional check for null email
    if (!user.email) {
      return res.status(400).json({ message: "User email is not available." });
    }

    const resetToken = crypto.randomBytes(20).toString('hex');
    const resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    user.resetPasswordToken = resetPasswordToken;
    user.resetPasswordExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now

    await user.save();

    const resetLink = `${process.env.FRONT_END_URL}/reset-confirmation?token=${encodeURIComponent(resetToken)}`;
    let emailHtml = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>ASNARO: Password Reset Instructions</title>
  </head>
  <body>
    <h1>ASNARO: パスワード再設定方法のご案内</h1>
  
    <p>[CUSTOMER_NAME] [CUSTOMER_CHARGE] 様</p>
  
    <p>製造業受発注サイトASNAROでございます。</p>
  
    <p>パスワードの再設定をご依頼いただきました。<br>
    下記のリンクから新しいパスワードを設定してください。</p>
  
    <p>パスワード再設定用のリンク：<br>
    <a href="[RESET_LINK]">[RESET_LINK]</a></p>
  
    <footer>
      <hr>
      <p>※本メールは、Asnaroよりパスワード再設定を希望された方にお送りしております。<br>
      もしお心当たりが無い場合は、その旨 info_asnaro@asnaro.co.jpまでご連絡いただければ幸いです。</p>
      <p>※本メールは自動配信メールです。<br>
      等幅フォント(MSゴシック12ポイント、Osaka-等幅など)で最適にご覧になれます。</p>
    </footer>
  </body>
  </html>
  `;
  
  // Replace placeholders in the email template for password reset
  emailHtml = emailHtml.replace('[CUSTOMER_NAME]', user.name01) // Replace with actual customer name
                       .replace('[CUSTOMER_CHARGE]', user.charge_name01) // Replace with actual customer charge
                       .replace(/\[RESET_LINK\]/g, resetLink); // Replace with the actual reset link
  const emailParams = {
    Destination: { ToAddresses: [email] },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: emailHtml,
        },
      },
      Subject: { Charset: "UTF-8", Data: "Email Verification" },
    },
    Source: process.env.AWS_SES_VERIFIED_EMAIL,
  };

  await sendEmail(emailParams);

    return res.status(200).json({ message: "Password reset link has been sent to your email." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred while processing the request." });
  }
};


export const resetPassword = async (req: Request, res: Response): Promise<Response> => {
  const { token, newPassword } = req.body;

  if (!token) {
    return res.status(400).json({ message: "Invalid token." });
  }

  try {
    // Hash the received token
    const resetPasswordToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');

    // Find the user by the hashed token and check if the token is still valid (not expired)
    const user = await Customer.findOne({
      where: {
        resetPasswordToken,
        resetPasswordExpires: { [Op.gt]: new Date() }
      }
    });

    if (!user) {
      return res.status(400).json({ message: "Password reset token is invalid or has expired." });
    }

    // Hash the new password
    const hashedPassword = await bcryptjs.hash(newPassword, 12);

    // Update user's password and clear the reset token and expiration
    user.password = hashedPassword;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;

    await user.save();

    return res.status(200).json({ message: "Your password has been reset successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred while resetting the password." });
  }
};

const getTermsAcceptedStatus = async (req: Request, res: Response): Promise<Response<any>> => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  try {
    return res.status(200).json({ Terms_accepted: req.user.Terms_accepted });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred while fetching the terms accepted status" });
  }
};


const updateTermsAccepted = async (req: Request, res: Response): Promise<Response<any>> => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  const { Terms_accepted } = req.body;
  
  if (typeof Terms_accepted !== 'boolean') {
    return res.status(400).json({ message: "Invalid input for Terms_accepted" });
  }

  try {
    req.user.Terms_accepted = Terms_accepted;
    await req.user.save();
    return res.status(200).json({ message: "Terms accepted status updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred while updating the terms accepted status" });
  }
};



export default {
  registerNewCustomer,
  signin,
  signout,
  confirmEmail,
  requestPasswordReset,
  resetPassword,
  getTermsAcceptedStatus,
updateTermsAccepted
};

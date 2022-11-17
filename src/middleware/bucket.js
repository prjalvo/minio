import multer from "multer";
import multerS3 from "multer-s3";
import AWS from "aws-sdk";

export const bucket = "filegx"

export const s3 = new AWS.S3({
  endpoint: "http://198.58.106.5:9000",
  accessKeyId: "1yJWOi0eFt1FKJR0",
  secretAccessKey: "6SLAqI87k3s7ZUOSWJx3UZpV1rC6wSvD",
  sslEnabled: false,
  s3ForcePathStyle: true,
});

const storage = multerS3({
  s3,
  bucket,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  metadata: (req, file, cb) => {
    cb(null, { fieldName: file.fieldname });
  },
  key: (req, file, cb) => {
    cb(null, Date.now().toString());
  },
});

export const upload = multer({ storage });

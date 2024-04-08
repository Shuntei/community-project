import multer from "multer";
import { v4 } from "uuid";

const exts = {
  "image/png": ".png",
  "image/jpeg": ".jpg",
  "image/webp": ".webp",
};

const fileFilter = (req, file, callback) => {
  callback(null, !!exts[file.mimetype]);
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "routes/johnny/img");
  },
  filename: (req, file, callback) => {
    const f = v4() + exts[file.mimetype];
    callback(null, f);
  },
});

export default multer({ fileFilter, storage });

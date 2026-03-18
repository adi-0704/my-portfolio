const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { pipeline, Transform } = require("stream");

const decryptFile = (inputFileName, outputFileName, password) => {
  const baseDir = __dirname;
  const inputFile = path.join(baseDir, inputFileName);
  const outputFile = path.join(baseDir, outputFileName);

  const key = crypto.createHash("sha256").update(password).digest();

  const input = fs.createReadStream(inputFile);
  const output = fs.createWriteStream(outputFile);

  let ivBuffer = Buffer.alloc(0);
  let ivFound = false;
  let decipher;

  const decryptTransform = new Transform({
    transform(chunk, encoding, callback) {
      if (!ivFound) {
        ivBuffer = Buffer.concat([ivBuffer, chunk]);
        if (ivBuffer.length >= 16) {
          const iv = ivBuffer.slice(0, 16);
          const remainingData = ivBuffer.slice(16);
          decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
          ivFound = true;
          if (remainingData.length > 0) {
            this.push(decipher.update(remainingData));
          }
        }
      } else {
        this.push(decipher.update(chunk));
      }
      callback();
    },
    flush(callback) {
      if (decipher) {
        try {
          this.push(decipher.final());
        } catch (err) {
          console.error("Final decryption step failed:", err.message);
          return callback(err);
        }
      }
      callback();
    }
  });

  pipeline(input, decryptTransform, output, (err) => {
    if (err) {
      console.error("Decryption failed:", err.message);
    } else {
      console.log(`Successfully decrypted ${inputFile} to ${outputFile}`);
    }
  });
};

decryptFile("character.enc", "character.glb", "MyCharacter12");

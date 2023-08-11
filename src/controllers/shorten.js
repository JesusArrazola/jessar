const shortLinkModel = require("../models/shortlink");

const crypto = require("crypto");
/**
 * Valida el link
 * @param {String} url El link a validar
 * @returns Si el link es válido
 */
const validate = (url) => {
  return /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
    url
  );
};

const generateShortCode = () => {
  let charMap =
    "PcdefghijklmELM3467NOpqrstuvy5zQRSTUIJK9wno128FGH0AxVWXYBCDZab";
  let shortCode = "";

  for (let i = 0; i < 8; i++) {
    shortCode += charMap.charAt(crypto.randomInt(charMap.length));
  }

  return shortCode;
};

const checkCode = () => true;

const shorten = async (url) => {
  if (!validate(url))
    return { code: 400, status: "invalid url", shortCode: null };
  let response = {};
  let shortCode = generateShortCode();

  while (!checkCode(shortCode)) {
    shortCode = generateShortCode();
  }

  //Guardar en la BD
  const shortLinkInstance = new shortLinkModel({
    url,
    shortCode,
  });

  try {
    await shortLinkInstance.save();
    response = {
      code: 200,
      status: "ok",
      shortCode,
    };
  } catch (err) {
    console.log(err);
    response = {
      code: 500,
      status: "internal err",
      shortCode: null,
    };
  }

  return response;
};

module.exports = { shorten };

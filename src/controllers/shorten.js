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

const shorten = (url) => {
  if (!validate(url)) return null;
  let shortCode = generateShortCode();

  while (!checkCode(shortCode)) {
    shortCode = generateShortCode();
    console.log("while");
  }

  //Guardar en la BD

  return shortCode;
};

module.exports = { shorten };

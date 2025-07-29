function envChecker(schema) {
    const config = {};
  
    for (const [key, options] of Object.entries(schema)) {
      let value = process.env[key];
  
      if (value === undefined || value === "") {
        if (options.required && options.default === undefined) {
          throw new Error(`Missing required environment variable: ${key}`);
        }
        value = options.default;
      }
  
      // Type conversion
      switch (options.type) {
        case "number":
          value = Number(value);
          if (isNaN(value)) throw new Error(`Invalid number for ${key}`);
          break;
        case "boolean":
          value = value === "true" || value === true;
          break;
        case "string":
        default:
          value = String(value);
      }
  
      config[key] = value;
    }
  
    return config;
  }
  
  module.exports = envChecker;
  
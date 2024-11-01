import { log } from "./log.mjs";

export const handler = async (event) => {
  
    log("Funciona o CI/CD : ", JSON.stringify(event));

    return {
        statusCode: 200,
        body: JSON.stringify(event),
      };;
  };
  
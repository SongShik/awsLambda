import { log } from "./log.mjs";

export const handler = async (event) => {

    log("CI/CD : ", JSON.stringify(event));

    return {
        statusCode: 200,
        body: JSON.stringify(event),
        body: `<html><body>Dados da requisicao ${JSON.stringify(event)}</body></html>`,
        headers: {
            "content-type": "text/html"
        }
    };
};

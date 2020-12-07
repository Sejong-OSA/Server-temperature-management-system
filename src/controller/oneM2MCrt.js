import request from "request";

const resetSub = () => {
  console.log("\n[REQUEST]");
  const method = "DELETE";
  const requestId = Math.floor(Math.random() * 10000);
  const url = cseUrl + sub_Container + "/sub";

  const options = {
    url: url,
    method: method,
    headers: {
      Accept: "application/json",
      "X-M2M-Origin": aeId,
      "X-M2M-RI": requestId,
    },
  };

  request(options, (error, response, body) => {
    console.log("[RESPONSE]");
    if (error) {
      console.log(error);
    } else {
      console.log(response.statusCode);
      console.log(body);
      createSubscription();
    }
  });
};

const createSubscription = () => {
  console.log("\n[REQUEST]");
  const method = "POST";
  // var sub_Container = "/Mobius/AE1/temp/DATA"; //
  // const url = cseUrl + sub_Container;
  const cseURL = `http://${conf.cse.host}:${conf.cse.port}`;
  const url = `${cseURL}/${conf.cse.name}/${aeName}/temp/subTemp`;

  const requestId = Math.floor(Math.random() * 10000);
  const resourceType = 23;

  const representation = {
    "m2m:sub": {
      rn: "sub",
      nu: ["http://" + cseURL + ":" + 4000 + "/" + aeId + "?ct=json"],
      nct: 2,
      enc: {
        net: [3],
      },
    },
  };

  console.log(method + " " + url);
  console.log(representation);

  const options = {
    url: url,
    method: method,
    headers: {
      Accept: "application/json",
      "X-M2M-Origin": "S" + aeName, // aeId = "S" + aeName
      "X-M2M-RI": requestId,
      "Content-Type": "application/json;ty=" + resourceType,
    },
    json: representation,
  };
  console.log(options.headers);
  request(options, (error, response, body) => {
    console.log("[RESPONSE]");
    if (error) {
      console.log(error);
    } else {
      console.log(response.statusCode);
      console.log(body);
      if (response.statusCode == 409) {
        resetSub();
      }
    }
  });
};

const resetAE = (aeName) => {
  console.log("\n[REQUEST]");
  const method = "DELETE";
  const cseURL = `http://${conf.cse.host}:${conf.cse.port}`;
  const url = `${cseURL}/${conf.cse.name}/${aeName}`;
  const requestId = Math.floor(Math.random() * 10000);

  console.log(method + " " + url);

  const options = {
    url: url,
    method: method,
    headers: {
      Accept: "application/json",
      "X-M2M-Origin": "S" + aeName, // aeId = "S" + aeName
      "X-M2M-RI": requestId,
    },
  };

  request(options, (error, response, body) => {
    console.log("[RESPONSE]");
    if (error) {
      console.log(error);
    } else {
      console.log(response.statusCode);
      console.log(body);
      createAE();
    }
  });
};

export const createAE = (aeName) => {
  console.log("\n[REQUEST]");
  const method = "POST";
  const cseURL = `http://${conf.cse.host}:${conf.cse.port}`;
  const url = `${cseURL}/${conf.cse.name}`;
  const requestId = Math.floor(Math.random() * 10000);
  const resourceType = 2;
  const representation = {
    "m2m:ae": {
      rn: aeName, // aeName = notiapplication
      api: "app.company.com",
      rr: "true",
      poa: ["http://" + conf.cse.host + ":" + 4000], // poa = "http://127.0.0.1:4000
    },
  };

  console.log(method + " " + url);
  console.log(representation);

  const options = {
    uri: url,
    method: method,
    headers: {
      Accept: "application/json",
      "X-M2M-Origin": "S" + aeName, // aeId = "S" + aeName
      "X-M2M-RI": requestId,
      "Content-Type": "application/json;ty=" + resourceType,
    },
    json: representation,
  };

  request(options, (error, response, body) => {
    console.log("[RESPONSE]");
    console.log("aE");
    if (error) {
      console.log(error);
    } else {
      console.log(response.statusCode);
      console.log(body);
      if (response.statusCode == 409) {
        console.log("reset");
        // resetAE(aeName);
      } else {
        // createSubscription(aeName);
      }
    }
  });
};

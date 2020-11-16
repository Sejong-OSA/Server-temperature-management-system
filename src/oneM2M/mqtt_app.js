/* eslint-disable no-undef */
/**
 * Copyright (c) 2018, OCEAN
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 * 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 * 3. The name of the author may not be used to endorse or promote products derived from this software without specific prior written permission.
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * Created by ryeubi on 2015-11-20.
 */

// var util = require("util");
// var url = require("url");
import Temp from "../models/Temp";
import Hum from "../models/Hum";
import Fan1 from "../models/Fan1";
import Fan2 from "../models/Fan2";
import { createContentInstance } from "../sockets/socketController";

var fs = require("fs");
var mqtt = require("mqtt");
var xml2js = require("xml2js");
var cbor = require("cbor");

global.req_topic =
  "/oneM2M/req/" + conf.ae.id + conf.cse.id + "/" + conf.ae.bodytype;

var reg_resp_topic = "/oneM2M/reg_resp/" + conf.ae.id + "/+/#";
var resp_topic = "/oneM2M/resp/" + conf.ae.id + "/+/#";
var noti_topic = "/oneM2M/req/+/" + conf.ae.id + "/#";

global.sh_adn = require("./mqtt_adn");
var noti = require("./noti");

const controlFan = async () => {
  let data = await Temp.find({}).sort({ _id: -1 }).limit(1);
  const temp = Number(data[0].data);
  console.log(`temp:${temp}`);

  data = await Hum.find({}).sort({ _id: -1 }).limit(1);
  const hum = Number(data[0].data);
  console.log(`hum:${hum}`);

  data = await Fan1.find({}).sort({ _id: -1 }).limit(1);
  const fan1 = Number(data[0].data);
  console.log(`fan1:${fan1}`);

  data = await Fan2.find({}).sort({ _id: -1 }).limit(1);
  const fan2 = Number(data[0].data);
  console.log(`fan2:${fan2}`);

  if (!fan1 && !fan2) {
    console.log("fan1 and fan2 are false");
    if (temp >= 28 || temp <= 16 || hum >= 63 || hum <= 38) {
      createContentInstance({ data: "1", actuator: "fan1" });
      createContentInstance({ data: "1", actuator: "fan2" });
    } else if (temp >= 26 || temp <= 18 || hum >= 60 || hum <= 40) {
      createContentInstance({ data: "1", actuator: "fan1" });
    } else {
      return;
    }
  } else if (fan1 && !fan2) {
    console.log("fan1 or fan2 are false");
    if (temp >= 28 || temp <= 16 || hum >= 63 || hum <= 38) {
      createContentInstance({ data: "1", actuator: "fan2" });
    } else if (temp >= 26 || temp <= 18 || hum >= 60 || hum <= 40) {
      return;
    } else {
      createContentInstance({ data: "0", actuator: "fan1" });
    }
  } else {
    console.log("fan1 and fan2 are true");
    if (temp >= 28 || temp <= 16 || hum >= 63 || hum <= 38) {
      return;
    } else if (temp >= 26 || temp <= 18 || hum >= 60 || hum <= 40) {
      createContentInstance({ data: "0", actuator: "fan2" });
    } else {
      createContentInstance({ data: "0", actuator: "fan1" });
      createContentInstance({ data: "0", actuator: "fan2" });
    }
  }
};

const mqtt_message_handler = async (topic, message) => {
  var topic_arr = topic.split("/");
  var bodytype = conf.ae.bodytype;
  let jsonObj = null;
  if (topic_arr[5] != null) {
    bodytype =
      topic_arr[5] === "xml"
        ? topic_arr[5]
        : topic_arr[5] === "json"
        ? topic_arr[5]
        : topic_arr[5] === "cbor"
        ? topic_arr[5]
        : "json";
  }

  if (
    topic_arr[1] == "oneM2M" &&
    (topic_arr[2] == "resp" || topic_arr[2] == "reg_resp") &&
    topic_arr[3].replace(":", "/") == conf.ae.id
  ) {
    // 'json'
    jsonObj = JSON.parse(message.toString());

    if (jsonObj["m2m:rsp"] == null) {
      jsonObj["m2m:rsp"] = jsonObj;
    }

    mqtt_callback(jsonObj);
  } else if (
    topic_arr[1] == "oneM2M" &&
    topic_arr[2] == "req" &&
    topic_arr[4] == conf.ae.id
  ) {
    // json
    jsonObj = JSON.parse(message.toString());

    if (jsonObj.pc["m2m:sgn"].nev.rep["m2m:cin"] !== undefined) {
      const sensorData = jsonObj.pc["m2m:sgn"].nev.rep["m2m:cin"].con;
      const dataType = jsonObj.pc["m2m:sgn"].sur.split("/");
      console.log("jsonObj()===============");
      console.log(dataType[2]);

      const obj = {};
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth();
      const today = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      obj.dataType = dataType[2];
      obj.data = sensorData;
      obj.created_at = new Date();
      // Date.UTC(year, month, today, hours, minutes, seconds)

      console.log(obj);

      try {
        if (obj.dataType === "temp") {
          const temp = new Temp({
            dataType: obj.dataType,
            data: obj.data,
            created_at: obj.created_at,
          });
          const saveTemp = await temp.save();
          console.log("insert OK");
          controlFan();
        } else if (obj.dataType === "hum") {
          const hum = new Hum({
            dataType: obj.dataType,
            data: obj.data,
            created_at: obj.created_at,
          });
          const saveHum = await hum.save();
          console.log("insert OK");
          controlFan();
        } else if (obj.dataType === "fan1") {
          const fan1 = new Fan1({
            dataType: obj.dataType,
            data: obj.data,
            created_at: obj.created_at,
          });
          const saveFan1 = await fan1.save();
          console.log("insert OK");
        } else if (obj.dataType === "fan2") {
          const fan2 = new Fan2({
            dataType: obj.dataType,
            data: obj.data,
            created_at: obj.created_at,
          });
          const saveFan2 = await fan2.save();
          console.log("insert OK");
        }
      } catch (err) {
        console.log({ message: err });
      }

      if (jsonObj["m2m:rqp"] == null) {
        jsonObj["m2m:rqp"] = jsonObj;
      }

      noti.mqtt_noti_action(topic_arr, jsonObj);
    }
  } else {
    console.log("topic is not supported");
  }
};

if (conf.usesecure === "disable") {
  var connectOptions = {
    host: conf.cse.host,
    port: conf.cse.mqttport,
    //              username: 'keti',
    //              password: 'keti123',
    protocol: "mqtt",
    keepalive: 10,
    //              clientId: serverUID,
    protocolId: "MQTT",
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 2000,
    connectTimeout: 2000,
    rejectUnauthorized: false,
  };
} else {
  connectOptions = {
    host: brokerip,
    port: conf.cse.mqttport,
    protocol: "mqtts",
    keepalive: 10,
    //              clientId: serverUID,
    protocolId: "MQTT",
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 2000,
    connectTimeout: 2000,
    key: fs.readFileSync("./server-key.pem"),
    cert: fs.readFileSync("./server-crt.pem"),
    rejectUnauthorized: false,
  };
}

mqtt_client = mqtt.connect(connectOptions);

mqtt_client.on("connect", function () {
  mqtt_client.subscribe(reg_resp_topic);
  mqtt_client.subscribe(resp_topic);
  mqtt_client.subscribe(noti_topic);

  console.log("subscribe reg_resp_topic as " + reg_resp_topic);
  console.log("subscribe resp_topic as " + resp_topic);
  console.log("subscribe noti_topic as " + noti_topic);

  sh_state = "crtae";
});

mqtt_client.on("message", mqtt_message_handler);

function mqtt_callback(jsonObj) {
  for (var i = 0; i < resp_mqtt_ri_arr.length; i++) {
    if (resp_mqtt_ri_arr[i] == jsonObj["m2m:rsp"].rqi) {
      var socket = socket_q[resp_mqtt_ri_arr[i]];
      var to = resp_mqtt_path_arr[resp_mqtt_ri_arr[i]];
      console.log(to);
      callback_q[resp_mqtt_ri_arr[i]](
        jsonObj["m2m:rsp"].rsc,
        jsonObj["m2m:rsp"].pc,
        to,
        socket
      );
      delete callback_q[resp_mqtt_ri_arr[i]];
      delete resp_mqtt_path_arr[resp_mqtt_ri_arr[i]];
      resp_mqtt_ri_arr.splice(i, 1);
      break;
    }
  }
}

sh_state = "connect";
var return_count = 0;
var request_count = 0;

function ae_response_action(status, result) {
  var aeid = result["m2m:ae"]["aei"];

  console.log("x-m2m-rsc : " + status + " - " + aeid + " <----");

  mqtt_client.unsubscribe(reg_resp_topic);
  mqtt_client.unsubscribe(resp_topic);
  mqtt_client.unsubscribe(noti_topic);

  conf.ae.id = aeid;

  //fs.writeFileSync('aei.json', JSON.stringify(conf.ae.id, null, 4), 'utf8');

  reg_resp_topic = "/oneM2M/reg_resp/" + conf.ae.id + "/+/#";
  req_topic =
    "/oneM2M/req/" + conf.ae.id + conf.cse.id + "/" + conf.ae.bodytype;
  resp_topic = "/oneM2M/resp/" + conf.ae.id + "/+/#";
  noti_topic = "/oneM2M/req" + conf.cse.id + "/" + conf.ae.id + "/#";

  mqtt_client.subscribe(reg_resp_topic);
  mqtt_client.subscribe(resp_topic);
  mqtt_client.subscribe(noti_topic);
}

function create_cnt_all(count, callback) {
  sh_adn.crtct(count, function (rsc) {
    console.log(
      count + " - " + conf.cnt[count].name + " - x-m2m-rsc : " + rsc + " <----"
    );
    if (rsc == 5106 || rsc == 2001 || rsc == 4105) {
      count++;
      if (conf.cnt.length > count) {
        create_cnt_all(count, function (rsc, count) {
          callback(rsc, count);
        });
      } else {
        callback(rsc, count);
      }
    } else {
      callback("9999", count);
    }
  });
}

function delete_sub_all(count, callback) {
  sh_adn.delsub(count, function (rsc) {
    console.log(
      count + " - " + conf.sub[count].name + " - x-m2m-rsc : " + rsc + " <----"
    );
    if (
      rsc == 5106 ||
      rsc == 2002 ||
      rsc == 2000 ||
      rsc == 4105 ||
      rsc == 4004
    ) {
      count++;
      if (conf.sub.length > count) {
        delete_sub_all(count, function (rsc, count) {
          callback(rsc, count);
        });
      } else {
        callback(rsc, count);
      }
    } else {
      callback("9999", count);
    }
  });
}

function create_sub_all(count, callback) {
  sh_adn.crtsub(count, function (rsc) {
    console.log(
      count + " - " + conf.sub[count].name + " - x-m2m-rsc : " + rsc + " <----"
    );
    if (rsc == 5106 || rsc == 2001 || rsc == 4105) {
      count++;
      if (conf.sub.length > count) {
        create_sub_all(count, function (rsc, count) {
          callback(rsc, count);
        });
      } else {
        callback(rsc, count);
      }
    } else {
      callback("9999", count);
    }
  });
}

function mqtt_watchdog() {
  if (sh_state == "connect") {
  } else if (sh_state == "crtae") {
    console.log("[sh_state] : " + sh_state);

    sh_adn.crtae(function (status, res_body) {
      if (status == 2001) {
        ae_response_action(status, res_body);
        sh_state = "crtct";
      } else if (status == 5106 || status == 4105) {
        console.log("x-m2m-rsc : " + status + " <----");
        sh_state = "rtvae";
      }
    });
  } else if (sh_state == "rtvae") {
    console.log("[sh_state] : " + sh_state);
    sh_adn.rtvae(function (status, res_body) {
      if (status == 2000) {
        var aeid = res_body["m2m:ae"]["aei"];
        console.log("x-m2m-rsc : " + status + " - " + aeid + " <----");

        if (conf.ae.id != aeid && conf.ae.id != "/" + aeid) {
          console.log(
            "AE-ID created is " +
              aeid +
              " not equal to device AE-ID is " +
              conf.ae.id
          );
        } else {
          sh_state = "crtct";
        }
      } else {
        console.log("x-m2m-rsc : " + status + " <----");
      }
    });
  } else if (sh_state == "crtct") {
    console.log("[sh_state] : " + sh_state);
    request_count = 0;
    return_count = 0;

    create_cnt_all(0, function (status, count) {
      if (conf.cnt.length <= count) {
        sh_state = "delsub";
      }
    });
  } else if (sh_state == "delsub") {
    console.log("[sh_state] : " + sh_state);
    request_count = 0;
    return_count = 0;

    delete_sub_all(0, function (status, count) {
      if (conf.sub.length <= count) {
        sh_state = "crtsub";
      }
    });
  } else if (sh_state == "crtsub") {
    console.log("[sh_state] : " + sh_state);
    request_count = 0;
    return_count = 0;

    create_sub_all(0, function (status, count) {
      if (conf.sub.length <= count) {
        sh_state = "crtci";

        // tas.ready();
      }
    });
  } else if (sh_state == "crtci") {
  }
}

wdt.set_wdt(require("shortid").generate(), 2, mqtt_watchdog);

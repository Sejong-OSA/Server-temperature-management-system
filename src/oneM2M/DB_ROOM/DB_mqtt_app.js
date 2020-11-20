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
import Temp from "../../models/Temp";
import Hum from "../../models/Hum";
import Fan1 from "../../models/Fan1";
import Fan2 from "../../models/Fan2";
import Device from "../../models/Device";
import { createContentInstance } from "../../sockets/socketController";

import "./global";

var fs = require("fs");
var mqtt = require("mqtt");

global.DB_req_topic =
  "/oneM2M/req/" + DB_conf.ae.id + DB_conf.cse.id + "/" + DB_conf.ae.bodytype;

var reg_resp_topic = "/oneM2M/reg_resp/" + DB_conf.ae.id + "/+/#";
var resp_topic = "/oneM2M/resp/" + DB_conf.ae.id + "/+/#";
var noti_topic = "/oneM2M/req/+/" + DB_conf.ae.id + "/#";

global.DB_sh_adn = require("./DB_mqtt_adn");
var noti = require("./DB_noti");

const controlFan = async () => {
  const device = await Device.findOne({ title: DB_conf.ae.name })
    .populate("temp")
    .populate("hum")
    .populate("fan1")
    .populate("fan2");

  const temp = Number(device.temp[device.temp.length - 1].data);
  console.log(`temp:${temp}`);

  const hum = Number(device.hum[device.hum.length - 1].data);
  console.log(`hum:${hum}`);

  const fan1 = Number(device.fan1[device.fan1.length - 1].data);
  console.log(`fan1:${fan1}`);

  const fan2 = Number(device.fan2[device.fan2.length - 1].data);
  console.log(`fan2:${fan2}`);

  if (!fan1 && !fan2) {
    console.log("fan1 and fan2 are false");
    if (temp >= 28 || temp <= 16 || hum >= 63 || hum <= 38) {
      createContentInstance({
        data: "1",
        actuator: "fan1",
        title: device.title,
      });
      createContentInstance({
        data: "1",
        actuator: "fan2",
        title: device.title,
      });
    } else if (temp >= 26 || temp <= 18 || hum >= 60 || hum <= 40) {
      createContentInstance({
        data: "1",
        actuator: "fan1",
        title: device.title,
      });
    } else {
      return;
    }
  } else if (fan1 && !fan2) {
    console.log("fan1 or fan2 are false");
    if (temp >= 28 || temp <= 16 || hum >= 63 || hum <= 38) {
      createContentInstance({
        data: "1",
        actuator: "fan2",
        title: device.title,
      });
    } else if (temp >= 26 || temp <= 18 || hum >= 60 || hum <= 40) {
      return;
    } else {
      createContentInstance({
        data: "0",
        actuator: "fan1",
        title: device.title,
      });
    }
  } else {
    console.log("fan1 and fan2 are true");
    if (temp >= 28 || temp <= 16 || hum >= 63 || hum <= 38) {
      return;
    } else if (temp >= 26 || temp <= 18 || hum >= 60 || hum <= 40) {
      createContentInstance({
        data: "0",
        actuator: "fan2",
        title: device.title,
      });
    } else {
      createContentInstance({
        data: "0",
        actuator: "fan1",
        title: device.title,
      });
      createContentInstance({
        data: "0",
        actuator: "fan2",
        title: device.title,
      });
    }
  }
};

const mqtt_message_handler = async (topic, message) => {
  var topic_arr = topic.split("/");
  var bodytype = DB_conf.ae.bodytype;
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
    topic_arr[3].replace(":", "/") == DB_conf.ae.id
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
    topic_arr[4] == DB_conf.ae.id
  ) {
    // json
    jsonObj = JSON.parse(message.toString());

    if (jsonObj.pc["m2m:sgn"].nev.rep["m2m:cin"] !== undefined) {
      const sensorData = jsonObj.pc["m2m:sgn"].nev.rep["m2m:cin"].con;
      const dataType = jsonObj.pc["m2m:sgn"].sur.split("/");

      const obj = {};

      obj.dataType = dataType[2];
      obj.data = sensorData;
      obj.created_at = new Date();

      console.log(obj);

      try {
        const device = await Device.find({ title: DB_conf.ae.name });

        if (obj.dataType === "temp") {
          const newTemp = await Temp.create({
            dataType: obj.dataType,
            data: obj.data,
            created_at: obj.created_at,
          });

          await device[0].temp.push(newTemp.id);
          await device[0].save();

          console.log("insert OK");
          controlFan();
        } else if (obj.dataType === "hum") {
          const newHum = await Hum.create({
            dataType: obj.dataType,
            data: obj.data,
            created_at: obj.created_at,
          });
          await device[0].hum.push(newHum.id);
          await device[0].save();

          console.log("insert OK");
          controlFan();
        } else if (obj.dataType === "fan1") {
          const newFan1 = await Fan1.create({
            dataType: obj.dataType,
            data: obj.data,
            created_at: obj.created_at,
          });
          await device[0].fan1.push(newFan1.id);
          await device[0].save();

          console.log("insert OK");
        } else if (obj.dataType === "fan2") {
          const newFan2 = await Fan2.create({
            dataType: obj.dataType,
            data: obj.data,
            created_at: obj.created_at,
          });
          await device[0].fan2.push(newFan2.id);
          await device[0].save();

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

if (DB_conf.usesecure === "disable") {
  var connectOptions = {
    host: DB_conf.cse.host,
    port: DB_conf.cse.mqttport,
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
    port: DB_conf.cse.mqttport,
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

DB_mqtt_client = mqtt.connect(connectOptions);

DB_mqtt_client.on("connect", function () {
  DB_mqtt_client.subscribe(reg_resp_topic);
  DB_mqtt_client.subscribe(resp_topic);
  DB_mqtt_client.subscribe(noti_topic);

  console.log("subscribe reg_resp_topic as " + reg_resp_topic);
  console.log("subscribe resp_topic as " + resp_topic);
  console.log("subscribe noti_topic as " + noti_topic);

  DB_sh_state = "crtae";
});

DB_mqtt_client.on("message", mqtt_message_handler);

function mqtt_callback(jsonObj) {
  for (var i = 0; i < DB_resp_mqtt_ri_arr.length; i++) {
    if (DB_resp_mqtt_ri_arr[i] == jsonObj["m2m:rsp"].rqi) {
      var socket = DB_socket_q[DB_resp_mqtt_ri_arr[i]];
      var to = DB_resp_mqtt_path_arr[DB_resp_mqtt_ri_arr[i]];
      console.log(to);
      callback_q[DB_resp_mqtt_ri_arr[i]](
        jsonObj["m2m:rsp"].rsc,
        jsonObj["m2m:rsp"].pc,
        to,
        socket
      );
      delete callback_q[DB_resp_mqtt_ri_arr[i]];
      delete DB_resp_mqtt_path_arr[DB_resp_mqtt_ri_arr[i]];
      DB_resp_mqtt_ri_arr.splice(i, 1);
      break;
    }
  }
}

DB_sh_state = "connect";
var return_count = 0;
var request_count = 0;

function ae_response_action(status, result) {
  var aeid = result["m2m:ae"]["aei"];

  console.log("x-m2m-rsc : " + status + " - " + aeid + " <----");

  DB_mqtt_client.unsubscribe(reg_resp_topic);
  DB_mqtt_client.unsubscribe(resp_topic);
  DB_mqtt_client.unsubscribe(noti_topic);

  DB_conf.ae.id = aeid;

  //fs.writeFileSync('aei.json', JSON.stringify(DB_conf.ae.id, null, 4), 'utf8');

  reg_resp_topic = "/oneM2M/reg_resp/" + DB_conf.ae.id + "/+/#";
  DB_req_topic =
    "/oneM2M/req/" + DB_conf.ae.id + DB_conf.cse.id + "/" + DB_conf.ae.bodytype;
  resp_topic = "/oneM2M/resp/" + DB_conf.ae.id + "/+/#";
  noti_topic = "/oneM2M/req" + DB_conf.cse.id + "/" + DB_conf.ae.id + "/#";

  DB_mqtt_client.subscribe(reg_resp_topic);
  DB_mqtt_client.subscribe(resp_topic);
  DB_mqtt_client.subscribe(noti_topic);
}

function create_cnt_all(count, callback) {
  DB_sh_adn.crtct(count, function (rsc) {
    console.log(
      count +
        " - " +
        DB_conf.cnt[count].name +
        " - x-m2m-rsc : " +
        rsc +
        " <----"
    );
    if (rsc == 5106 || rsc == 2001 || rsc == 4105) {
      count++;
      if (DB_conf.cnt.length > count) {
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
  DB_sh_adn.delsub(count, function (rsc) {
    console.log(
      count +
        " - " +
        DB_conf.sub[count].name +
        " - x-m2m-rsc : " +
        rsc +
        " <----"
    );
    if (
      rsc == 5106 ||
      rsc == 2002 ||
      rsc == 2000 ||
      rsc == 4105 ||
      rsc == 4004
    ) {
      count++;
      if (DB_conf.sub.length > count) {
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
  DB_sh_adn.crtsub(count, function (rsc) {
    console.log(
      count +
        " - " +
        DB_conf.sub[count].name +
        " - x-m2m-rsc : " +
        rsc +
        " <----"
    );
    if (rsc == 5106 || rsc == 2001 || rsc == 4105) {
      count++;
      if (DB_conf.sub.length > count) {
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
  if (DB_sh_state == "connect") {
  } else if (DB_sh_state == "crtae") {
    console.log("[DB_sh_state] : " + DB_sh_state);

    DB_sh_adn.crtae(function (status, res_body) {
      if (status == 2001) {
        ae_response_action(status, res_body);
        DB_sh_state = "crtct";
      } else if (status == 5106 || status == 4105) {
        console.log("x-m2m-rsc : " + status + " <----");
        DB_sh_state = "rtvae";
      }
    });
  } else if (DB_sh_state == "rtvae") {
    console.log("[DB_sh_state] : " + DB_sh_state);
    DB_sh_adn.rtvae(function (status, res_body) {
      if (status == 2000) {
        var aeid = res_body["m2m:ae"]["aei"];
        console.log("x-m2m-rsc : " + status + " - " + aeid + " <----");

        if (DB_conf.ae.id != aeid && DB_conf.ae.id != "/" + aeid) {
          console.log(
            "AE-ID created is " +
              aeid +
              " not equal to device AE-ID is " +
              DB_conf.ae.id
          );
        } else {
          DB_sh_state = "crtct";
        }
      } else {
        console.log("x-m2m-rsc : " + status + " <----");
      }
    });
  } else if (DB_sh_state == "crtct") {
    console.log("[DB_sh_state] : " + DB_sh_state);
    request_count = 0;
    return_count = 0;

    create_cnt_all(0, function (status, count) {
      if (DB_conf.cnt.length <= count) {
        DB_sh_state = "delsub";
      }
    });
  } else if (DB_sh_state == "delsub") {
    console.log("[DB_sh_state] : " + DB_sh_state);
    request_count = 0;
    return_count = 0;

    delete_sub_all(0, function (status, count) {
      if (DB_conf.sub.length <= count) {
        DB_sh_state = "crtsub";
      }
    });
  } else if (DB_sh_state == "crtsub") {
    console.log("[DB_sh_state] : " + DB_sh_state);
    request_count = 0;
    return_count = 0;

    create_sub_all(0, function (status, count) {
      if (DB_conf.sub.length <= count) {
        DB_sh_state = "crtci";

        // tas.ready();
      }
    });
  } else if (DB_sh_state == "crtci") {
  }
}

DB_wdt.set_wdt(require("shortid").generate(), 2, mqtt_watchdog);

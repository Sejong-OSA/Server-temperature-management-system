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
 * Created by Il Yeup, Ahn in KETI on 2016-09-21.
 */

var tas = require("./DB_thyme_tas");
var js2xmlparser = require("js2xmlparser");

// var = this;

export const parse_sgn = (rqi, pc, callback) => {
  if (pc.sgn) {
    var nmtype = pc["sgn"] != null ? "short" : "long";
    var sgnObj = {};
    var cinObj = {};
    sgnObj = pc["sgn"] != null ? pc["sgn"] : pc["singleNotification"];

    if (nmtype === "long") {
      console.log("oneM2M spec. define only short name for resource");
    } else {
      // 'short'
      if (sgnObj.sur) {
        if (sgnObj.sur.charAt(0) != "/") {
          sgnObj.sur = "/" + sgnObj.sur;
        }
        var path_arr = sgnObj.sur.split("/");
      }

      if (sgnObj.nev) {
        if (sgnObj.nev.rep) {
          if (sgnObj.nev.rep["m2m:cin"]) {
            sgnObj.nev.rep.cin = sgnObj.nev.rep["m2m:cin"];
            delete sgnObj.nev.rep["m2m:cin"];
          }

          if (sgnObj.nev.rep.cin) {
            cinObj = sgnObj.nev.rep.cin;
          } else {
            console.log("[mqtt_noti_action] m2m:cin is none");
            cinObj = null;
          }
        } else {
          console.log(
            "[mqtt_noti_action] rep tag of m2m:sgn.nev is none. m2m:notification format mismatch with oneM2M spec."
          );
          cinObj = null;
        }
      } else if (sgnObj.sud) {
        console.log("[mqtt_noti_action] received notification of verification");
        cinObj = {};
        cinObj.sud = sgnObj.sud;
      } else if (sgnObj.vrq) {
        console.log("[mqtt_noti_action] received notification of verification");
        cinObj = {};
        cinObj.vrq = sgnObj.vrq;
      } else {
        console.log(
          "[mqtt_noti_action] nev tag of m2m:sgn is none. m2m:notification format mismatch with oneM2M spec."
        );
        cinObj = null;
      }
    }
  } else {
    console.log(
      "[mqtt_noti_action] m2m:sgn tag is none. m2m:notification format mismatch with oneM2M spec."
    );
    console.log(pc);
  }

  callback(path_arr, cinObj, rqi);
};

export const response_mqtt = (rsp_topic, rsc, to, fr, rqi, inpc, bodytype) => {
  var rsp_message = {};
  rsp_message["m2m:rsp"] = {};
  rsp_message["m2m:rsp"].rsc = rsc;
  rsp_message["m2m:rsp"].to = to;
  rsp_message["m2m:rsp"].fr = fr;
  rsp_message["m2m:rsp"].rqi = rqi;
  rsp_message["m2m:rsp"].pc = inpc;

  if (bodytype === "xml") {
    rsp_message["m2m:rsp"]["@"] = {
      "xmlns:m2m": "http://www.onem2m.org/xml/protocols",
      "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    };

    var xmlString = js2xmlparser.parse("m2m:rsp", rsp_message["m2m:rsp"]);

    DB_mqtt_client.publish(rsp_topic, xmlString);
  } else if (bodytype === "cbor") {
    xmlString = cbor.encode(rsp_message["m2m:rsp"]).toString("hex");

    DB_mqtt_client.publish(rsp_topic, xmlString);
  } else {
    // 'json'
    DB_mqtt_client.publish(rsp_topic, JSON.stringify(rsp_message["m2m:rsp"]));
  }
};

export const response_ws = (connection, rsc, to, fr, rqi, inpc, bodytype) => {
  var rsp_message = {};
  rsp_message["m2m:rsp"] = {};
  rsp_message["m2m:rsp"].rsc = rsc;
  rsp_message["m2m:rsp"].to = to;
  rsp_message["m2m:rsp"].fr = fr;
  rsp_message["m2m:rsp"].rqi = rqi;
  rsp_message["m2m:rsp"].pc = inpc;

  if (bodytype === "xml") {
    rsp_message["m2m:rsp"]["@"] = {
      "xmlns:m2m": "http://www.onem2m.org/xml/protocols",
      "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    };

    var xmlString = js2xmlparser.parse("m2m:rsp", rsp_message["m2m:rsp"]);

    connection.sendUTF(xmlString.toString());
  } else if (bodytype === "cbor") {
    xmlString = cbor.encode(rsp_message["m2m:rsp"]).toString("hex");

    connection.sendUTF(xmlString.toString());
  } else {
    // 'json'
    connection.sendUTF(JSON.stringify(rsp_message["m2m:rsp"]));
  }
};

export const ws_noti_action = (connection, bodytype, jsonObj) => {
  if (jsonObj != null) {
    var op = jsonObj["m2m:rqp"]["op"] == null ? "" : jsonObj["m2m:rqp"]["op"];
    var to = jsonObj["m2m:rqp"]["to"] == null ? "" : jsonObj["m2m:rqp"]["to"];
    var fr = jsonObj["m2m:rqp"]["fr"] == null ? "" : jsonObj["m2m:rqp"]["fr"];
    var rqi =
      jsonObj["m2m:rqp"]["rqi"] == null ? "" : jsonObj["m2m:rqp"]["rqi"];
    var pc = {};
    pc = jsonObj["m2m:rqp"]["pc"] == null ? {} : jsonObj["m2m:rqp"]["pc"];

    if (pc["m2m:sgn"]) {
      pc.sgn = {};
      pc.sgn = pc["m2m:sgn"];
      delete pc["m2m:sgn"];
    }

    parse_sgn(rqi, pc, function (path_arr, cinObj, rqi) {
      if (cinObj) {
        if (cinObj.sud || cinObj.vrq) {
          response_ws(connection, 2001, "", DB_conf.ae.id, rqi, "", bodytype);
        } else {
          for (var i = 0; i < DB_conf.sub.length; i++) {
            if (
              DB_conf.sub[i].parent.split("/")[
                DB_conf.sub[i].parent.split("/").length - 1
              ] === path_arr[path_arr.length - 2]
            ) {
              if (DB_conf.sub[i].name === path_arr[path_arr.length - 1]) {
                response_ws(
                  connection,
                  2001,
                  "",
                  DB_conf.ae.id,
                  rqi,
                  "",
                  bodytype
                );

                //console.log((cinObj.con != null ? cinObj.con : cinObj.content));
                console.log("ws " + bodytype + " notification <----");

                console.log("ws response - 2001 ---->");

                if (path_arr[path_arr.length - 2] === "cnt-cam") {
                  tas.send_tweet(cinObj);
                } else {
                  tas.noti(path_arr, cinObj);
                }
              }
            }
          }
        }
      }
    });
  } else {
    console.log("[mqtt_noti_action] message is not noti");
  }
};

export const mqtt_noti_action = (topic_arr, jsonObj) => {
  if (jsonObj != null) {
    var bodytype = DB_conf.ae.bodytype;
    if (topic_arr[5] != null) {
      bodytype = topic_arr[5];
    }

    var op = jsonObj["m2m:rqp"]["op"] == null ? "" : jsonObj["m2m:rqp"]["op"];
    var to = jsonObj["m2m:rqp"]["to"] == null ? "" : jsonObj["m2m:rqp"]["to"];
    var fr = jsonObj["m2m:rqp"]["fr"] == null ? "" : jsonObj["m2m:rqp"]["fr"];
    var rqi =
      jsonObj["m2m:rqp"]["rqi"] == null ? "" : jsonObj["m2m:rqp"]["rqi"];
    var pc = {};
    pc = jsonObj["m2m:rqp"]["pc"] == null ? {} : jsonObj["m2m:rqp"]["pc"];

    if (pc["m2m:sgn"]) {
      pc.sgn = {};
      pc.sgn = pc["m2m:sgn"];
      delete pc["m2m:sgn"];
    }

    parse_sgn(rqi, pc, function (path_arr, cinObj, rqi) {
      if (cinObj) {
        if (cinObj.sud || cinObj.vrq) {
          var resp_topic =
            "/oneM2M/resp/" +
            topic_arr[3] +
            "/" +
            topic_arr[4] +
            "/" +
            topic_arr[5];
          response_mqtt(
            resp_topic,
            2001,
            "",
            DB_conf.ae.id,
            rqi,
            "",
            topic_arr[5]
          );
        } else {
          for (var i = 0; i < DB_conf.sub.length; i++) {
            if (
              DB_conf.sub[i].parent.split("/")[
                DB_conf.sub[i].parent.split("/").length - 1
              ] === path_arr[path_arr.length - 2]
            ) {
              if (DB_conf.sub[i].name === path_arr[path_arr.length - 1]) {
                console.log("mqtt " + bodytype + " notification <----");

                resp_topic =
                  "/oneM2M/resp/" +
                  topic_arr[3] +
                  "/" +
                  topic_arr[4] +
                  "/" +
                  topic_arr[5];
                response_mqtt(
                  resp_topic,
                  2001,
                  "",
                  DB_conf.ae.id,
                  rqi,
                  "",
                  topic_arr[5]
                );

                console.log("mqtt response - 2001 ---->");

                if (path_arr[path_arr.length - 2] === "cnt-cam") {
                  tas.send_tweet(cinObj);
                } else {
                  tas.noti(path_arr, cinObj);
                }
                break;
              }
            }
          }
        }
      }
    });
  } else {
    console.log("[mqtt_noti_action] message is not noti");
  }
};

export const http_noti_action = (rqi, pc, bodytype, response) => {
  if (pc["m2m:sgn"]) {
    pc.sgn = {};
    pc.sgn = pc["m2m:sgn"];
    delete pc["m2m:sgn"];
  }

  parse_sgn(rqi, pc, function (path_arr, cinObj, rqi) {
    if (cinObj) {
      if (cinObj.sud || cinObj.vrq) {
        response.setHeader("X-M2M-RSC", "2001");
        response.setHeader("X-M2M-RI", rqi);
        response.status(201).end("<h1>success to receive notification</h1>");
      } else {
        for (var i = 0; i < DB_conf.sub.length; i++) {
          if (
            DB_conf.sub[i].parent.split("/")[
              DB_conf.sub[i].parent.split("/").length - 1
            ] === path_arr[path_arr.length - 2]
          ) {
            if (DB_conf.sub[i].name === path_arr[path_arr.length - 1]) {
              response.setHeader("X-M2M-RSC", "2001");
              response.setHeader("X-M2M-RI", rqi);
              response
                .status(201)
                .end("<h1>success to receive notification</h1>");

              //console.log((cinObj.con != null ? cinObj.con : cinObj.content));
              console.log("http " + bodytype + " notification <----");

              if (path_arr[path_arr.length - 2] === "cnt-cam") {
                tas.send_tweet(cinObj);
              } else {
                tas.noti(path_arr, cinObj);
              }
            }
          }
        }
      }
    }
  });
};

export const coap_noti_action = (rqi, pc, bodytype, response) => {
  if (pc["m2m:sgn"]) {
    pc.sgn = {};
    pc.sgn = pc["m2m:sgn"];
    delete pc["m2m:sgn"];
  }

  parse_sgn(rqi, pc, function (path_arr, cinObj, rqi) {
    if (cinObj) {
      if (cinObj.sud || cinObj.vrq) {
        response.code = "2.01";
        response.end("<h1>success to receive notification</h1>");
      } else {
        for (var i = 0; i < DB_conf.sub.length; i++) {
          if (
            DB_conf.sub[i].parent.split("/")[
              DB_conf.sub[i].parent.split("/").length - 1
            ] === path_arr[path_arr.length - 2]
          ) {
            if (DB_conf.sub[i].name === path_arr[path_arr.length - 1]) {
              response.code = "2.01";
              response.end("<h1>success to receive notification</h1>");

              //console.log((cinObj.con != null ? cinObj.con : cinObj.content));
              console.log("coap " + bodytype + " notification <----");

              if (path_arr[path_arr.length - 2] === "cnt-cam") {
                tas.send_tweet(cinObj);
              } else {
                tas.noti(path_arr, cinObj);
              }
            }
          }
        }
      }
    }
  });
};

import conf from "./conf";
import wdt from "./oneM2M/wdt";

global.resp_mqtt_ri_arr = [];

global.resp_mqtt_path_arr = {};
global.socket_q = {};

global.conf = conf;
global.wdt = wdt;

global.sh_state = "crtae";

// global.wdt = require("./wdt");

global.mqtt_client = null;

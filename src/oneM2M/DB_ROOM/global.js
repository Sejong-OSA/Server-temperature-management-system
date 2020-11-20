import DB_conf from "./DB_conf";
import DB_wdt from "./DB_wdt";

global.DB_resp_mqtt_ri_arr = [];

global.DB_resp_mqtt_path_arr = {};
global.DB_socket_q = {};

global.DB_conf = DB_conf;
global.DB_wdt = DB_wdt;

global.DB_sh_state = "crtae";

global.DB_mqtt_client = null;

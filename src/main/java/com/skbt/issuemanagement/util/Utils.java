package com.skbt.issuemanagement.util;

import lombok.extern.slf4j.Slf4j;
import net.sf.json.JSONNull;
import net.sf.json.JSONObject;
import org.springframework.transaction.annotation.Transactional;
import sun.net.www.protocol.http.HttpURLConnection;

import java.io.*;
import java.math.BigDecimal;
import java.net.URL;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Slf4j
public class Utils {
    public static final String strDateFormat = "dd/MM/yyyy";
    public static final String strTimestampFormat = "dd/MM/yyyy HH:mm";
    public static final String strTimestampFormatWithSeconds = "dd/MM/yyyy HH:mm:ss";



    public static String getResultString(String mainUrl, String strExtention,String url) throws Exception {
        HttpURLConnection conn = null;
        String sonuc = null;
        try {

            URL requestUrl = new URL(mainUrl + url);

            conn = (HttpURLConnection) requestUrl.openConnection();

            conn.setRequestProperty("Accept", "application/json");

            conn.setUseCaches(false);
            conn.setDoInput(true);
            conn.setConnectTimeout(30000);
            conn.setReadTimeout(20000);

            conn.setDoOutput(true);

            InputStream is = conn.getInputStream();
            BufferedReader rd = new BufferedReader(new InputStreamReader(is));
            StringBuilder response = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                response.append(line);
                response.append('\r');
            }
            rd.close();


            return response.toString();
        } catch (FileNotFoundException f){

            if(url.contains("SAY_")){
                url = strExtention  + ".json";
                sonuc=getResultString(mainUrl,strExtention,url);
            }
            return sonuc;
        } catch (Exception e) {

            throw new Exception(e.getLocalizedMessage() + " Sayısal loto hatası");
        } finally {
            if (conn != null) {
                conn.disconnect();
            }
        }
    }

    public static List<String> getDateList(Date startDate) throws ParseException {
        List<String> searchDateList = new ArrayList<String>();
        SimpleDateFormat myFormat = new SimpleDateFormat("yyyyMMdd");

        Calendar startCal = Calendar.getInstance();
        startCal.setTime(startDate);

        Calendar endCal = Calendar.getInstance();
        endCal.setTime(Utils.toDateWithOutHour(new Date()));

        long startTime = startDate.getTime();
        long endTime = Utils.toDateWithOutHour(new Date()).getTime();

        long difference = (endTime - startTime) / (1000 * 60 * 60 * 24);



        for(int i=0;i<difference+1;i++) {
            Calendar cal=Calendar.getInstance();
            cal.setTime(startDate);
            cal.add(Calendar.DATE, i);

            if (cal.get(Calendar.DAY_OF_WEEK) == Calendar.WEDNESDAY ||
                    cal.get(Calendar.DAY_OF_WEEK) == Calendar.SATURDAY) {
                String searchDateObj=myFormat.format(cal.getTime());
                searchDateList.add(searchDateObj);
            }


        }


        return  searchDateList;
    }

    public static String toString(Date date, String formatStr) {
        if (date == null) {
            return "";
        }
        SimpleDateFormat sdf = new SimpleDateFormat(formatStr);
        return sdf.format(date);
    }

    public static Date toDate(String dateStr, String formatStr) throws Exception {
        if (dateStr == null) {
            return null;
        }
        SimpleDateFormat sdf = new SimpleDateFormat(formatStr);
        try {
            return sdf.parse(dateStr);
        } catch (ParseException e) {
            log.error(e.getMessage());
        }
        return  null;
    }

    public static Date toDateWithOutHour(Date date) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        String stringDate = sdf.format(date);
        return sdf.parse(stringDate);
    }

    public static JSONObject reqGetJsonObject(String reqStr) {
        if (reqStr != null && !reqStr.equals("") && reqStr.charAt(0) == '{') {
            try {
                return JSONObject.fromObject(reqStr);
            } catch (Exception e) {
                log.error(e.getMessage());
            }
        }
        return null;
    }

    public static Boolean objGetBoolean(JSONObject obj, String param, Boolean defaultVal) {
        if (obj.has(param) && obj.get(param) != null && !obj.get(param).equals("") && !obj.get(param).equals("null")) {
            return obj.getBoolean(param);
        }
        return defaultVal;
    }

    public static String objGetString(JSONObject obj, String param, String defaultVal) {
        if (obj != null) {
            if (obj.has(param) && obj.get(param) != null && !obj.get(param).equals("") && !obj.get(param).equals("null")) {
                return obj.getString(param);
            }
        }
        return defaultVal;
    }

    public static BigDecimal objGetBigDecimal(JSONObject data, String str, BigDecimal defaultVal) {
        if (data != null) {
            if (data.has(str) && data.get(str) != null && !data.get(str).equals("")) {
                if ((data.getString(str) != null) && !data.get(str).equals(JSONNull.getInstance())) {
                    return new BigDecimal(data.getString(str));
                }
                return defaultVal;
            }
        }
        return defaultVal;
    }

    public static Integer objGetInt(JSONObject obj, String param, Integer defaultVal) {
        if (obj != null) {
            if (obj.has(param) && obj.get(param) != null && !obj.get(param).equals("") && !obj.get(param).equals("null")) {
                return obj.getInt(param);
            }
        }
        return defaultVal;
    }

    public static Date objGetDate(JSONObject obj, String param, Date defaultVal, String format) {
        if (obj.has(param) && obj.get(param) != null && !obj.get(param).equals("") && !obj.get(param).equals("null")) {
            SimpleDateFormat sdf;
            if (format == null) {
                sdf = new SimpleDateFormat(strDateFormat);
            } else {
                sdf = new SimpleDateFormat(format);
            }
            try {
                return sdf.parse(obj.getString(param));
            } catch (ParseException e) {
                return null;
            }
        }
        return defaultVal;
    }

    public static Long objGetLong(JSONObject obj, String param, Long defaultVal) {
        if (obj != null) {
            if (obj.has(param) && obj.get(param) != null && !obj.get(param).equals("") && !obj.get(param).equals("null")) {
                return obj.getLong(param);
            }
        }
        return defaultVal;
    }

    public static Integer reqGetInteger(String reqStr, Integer defaultVal) {
        if (reqStr != null && !reqStr.equals("") && !reqStr.equals("null")) {
            return Integer.valueOf(reqStr);
        }
        return defaultVal;
    }

    public static Long reqGetLong(String reqStr, Long defaultVal) {
        if (reqStr != null && !reqStr.equals("")) {
            return Long.valueOf(reqStr.trim());
        }
        if (reqStr != null && reqStr.equals("") && defaultVal == null) {
            return null;
        }
        return defaultVal;
    }

    public static String reqGetString(String reqStr, String defaultVal) {
        if (reqStr != null && !reqStr.equals("")) {
            return reqStr;// .replaceAll("Ã", "Ü").replaceAll("Ä°", "İ").replaceAll("A¼", "ü").replaceAll("Ä", "Ğ");
        }
        return defaultVal;
    }


    public static Date reqGetDate(String reqStr, Date defaultVal, String format) {
        if (reqStr != null && !reqStr.equals("")) {
            SimpleDateFormat sdf;
            if (format == null) {
                sdf = new SimpleDateFormat(strDateFormat);
            } else {
                sdf = new SimpleDateFormat(format);
            }
            try {
                return sdf.parse(reqStr);
            } catch (ParseException e) {
                return null;
            }
        }
        return defaultVal;
    }

    public static Long getRequestMapLongValue(Map<String, String[]> requestMap, String key, Long defaultValue) {
        if (requestMap.get(key) == null) {
            return defaultValue;
        }
        if (requestMap.get(key)[0] == null || requestMap.get(key)[0].equals("")) {
            return defaultValue;
        }

        return Long.valueOf(requestMap.get(key)[0].trim());
    }

    public static Integer getRequestMapIntegerValue(Map<String, String[]> requestMap, String key, Integer defaultValue) {
        if (requestMap.get(key) == null) {
            return defaultValue;
        }
        if (requestMap.get(key)[0] == null || requestMap.get(key)[0].equals("")) {
            return defaultValue;
        }

        return Integer.valueOf(requestMap.get(key)[0]);
    }

    public static BigDecimal getRequestMapBigDecimalValue(Map<String, String[]> requestMap, String key, BigDecimal defaultValue) {
        if (requestMap.get(key) == null) {
            return defaultValue;
        }
        if (requestMap.get(key)[0] == null || requestMap.get(key)[0].equals("")) {
            return defaultValue;
        }

        return new BigDecimal(requestMap.get(key)[0].toString());
    }

    public static Boolean getRequestMapBooleanValue(Map<String, String[]> requestMap, String key, Boolean defaultValue) {
        if (requestMap.get(key) == null) {
            return defaultValue;
        }
        if (requestMap.get(key)[0] == null || requestMap.get(key)[0].equals("")) {
            return defaultValue;
        }

        return Boolean.valueOf(requestMap.get(key)[0]);
    }

    public static Date getRequestMapDateValue(Map<String, String[]> requestMap, String key, Date defaultValue, String format) {
        if (requestMap.get(key) == null) {
            return defaultValue;
        }
        if (requestMap.get(key)[0] == null || requestMap.get(key)[0].equals("")) {
            return defaultValue;
        }

        SimpleDateFormat sdf;
        if (format == null) {
            sdf = new SimpleDateFormat(strDateFormat);
        } else {
            sdf = new SimpleDateFormat(format);
        }

        try {
            return sdf.parse(requestMap.get(key)[0]);
        } catch (ParseException e) {
            return null;
        }

    }

}

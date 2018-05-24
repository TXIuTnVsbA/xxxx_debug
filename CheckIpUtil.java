public class CheckIpUtil {
    /**
     * 代理IP有效检测
     * @param proxyIp
     * @param Url
     */
    public static Boolean checkProxyIp(String proxyIp, String Url){
        int statusCode = 0;
        String proxyHost =proxyIp.split(":")[0];
        int proxyPort = Integer.parseInt(proxyIp.split(":")[1]);
        try {
            HttpClient httpClient = new HttpClient();
            httpClient.getHostConfiguration().setProxy(proxyHost, proxyPort);
            // 连接超时时间（默认10秒 10000ms） 单位毫秒（ms）
            int connectionTimeout = 1000;
            // 读取数据超时时间（默认30秒 30000ms） 单位毫秒（ms）
            int soTimeout = 3000;
            httpClient.getHttpConnectionManager().getParams().setConnectionTimeout(connectionTimeout);
            httpClient.getHttpConnectionManager().getParams().setSoTimeout(soTimeout);
            HttpMethod method = new GetMethod(Url);
            statusCode = httpClient.executeMethod(method);
            if(statusCode == 200){
                return true;
            }
        } catch (Exception e) {
            // TODO Auto-generated catch block
            //e.printStackTrace();
        }
        return false;
    }
}

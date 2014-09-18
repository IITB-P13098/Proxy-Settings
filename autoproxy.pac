/*
*  Auto Proxy for IIT Bombay
*  Written by Nandan Dixit
*  fixed for localhost/127.0.0.1 by siva- may 4, 2005
*  after report by sadhu@idc
*/
function FindProxyForURL(url, host){
    if ((host.indexOf(".iitb.") != -1) || 
        (host.indexOf("//10.") !=-1 )  || 
        (host.indexOf("10.") == 0) ||  
        (host.indexOf("localhost") == 0) ||  
        (host.indexOf("127.0.0.1") == 0) ||  
        (host.indexOf("\/\/10.") !=-1 )) 
        return "DIRECT";
    else{
        if(host.indexOf(10.) == -1)
            return "PROXY netmon.iitb.ac.in:80";
        else{
            resolved_host=host;
            //      resolved_host = dnsResolve(host);
            if ( (resolved_host =="127.0.0.1") ||
                 isInNet(resolved_host,"10.7.1.18","255.0.0.0") ||
                 isInNet(resolved_host,"144.16.111.132","255.255.224.0") ||
                 isInNet(resolved_host,"192.168.7.118","255.255.0.0") )
                return "DIRECT";
            else return "PROXY netmon.iitb.ac.in:80";

        }
    }
}

const  nodeMediaServer=require("node-media-server");

//this define how your rtmp should actually work
const config={
    rtmp:{
        port:1935,
        //size of each chunk in rtmp stream
        chunk_size:60000,
        //server sends ping tocheck client is still connected
        ping:30,
        //if upto 60s ping doesn't come the connection will brerak
        ping_timeout:60,
        //internall nms uses for caching mech
        gop_cache:true
    },
    http:{
        port:8080,
        allow_origin:"*",//if not allowed will get a corse error

    }
}



//this constructor takes an configuration obj
const server=new nodeMediaServer(config);
server.run();
 

//cliet(obs)->server->end-users

let MusicApi = require('@suen/music-api')

/*重复代码特别多,后续修改*/

module.exports = {
    getMusicUrl(S_from,S_name){
        return new Promise((resolve,reject)=>{
            //存放歌曲信息
            let music_msg = [];

            switch(S_from){
                case 'netease':
                    MusicApi.netease.searchSong({keyword: S_name})
                    .then((v)=>{
                        let h = v.data.songs;
                        
                        for(let index =0; index<=h.length-1;index++){
                            let M_name = h[index].name;    //歌曲名
                            let A_name = h[index].artists[0].name;   //歌手名
                            let img = h[index].album.cover;
        
                            //获取歌曲链接
                            MusicApi.netease.getSongUrl(h[index].id)
                            .then((url)=>{
                                music_msg.push({
                                    M_name:M_name,
                                    A_name:A_name,
                                    img:img,
                                    url:url.data.url
                                })
        
                                //获取完成后返回
                                if(index==h.length-1){
                                    resolve(music_msg)
                                }
                                //resolve(music_msg);  //正常输出
                            }).catch(err=>{
                                reject(err);
                                console.log('获取歌曲链接错误',err)
                            })
                        }       
                    }).catch(err=>{
                        console.log('获取歌曲信息错误',err)
                    })
                case 'qq':
                    MusicApi.qq.searchSong({keyword: S_name})
                    .then((v)=>{
                        let h = v.data.songs;
                        
                        for(let index =0; index<=h.length-1;index++){
                            let M_name = h[index].name;    //歌曲名
                            let A_name = h[index].artists[0].name;   //歌手名
                            let img = h[index].album.cover;
        
                            //获取歌曲链接
                            MusicApi.qq.getSongUrl(h[index].id)
                            .then((url)=>{
                                music_msg.push({
                                    M_name:M_name,
                                    A_name:A_name,
                                    img:img,
                                    url:url.data.url
                                })
        
                                //获取完成后返回
                                if(index==h.length-1){
                                    resolve(music_msg)
                                }
                                //resolve(music_msg);  //正常输出
                            }).catch(err=>{
                                console.log('获取歌曲链接错误',err)
                            })
                        }       
                    }).catch(err=>{
                        console.log('获取歌曲信息错误',err)
                    })
                case 'xiami':
                    MusicApi.xiami.searchSong({keyword: S_name})
                    .then((v)=>{
                        let h = v.data.songs;
                        
                        for(let index =0; index<=h.length-1;index++){
                            let M_name = h[index].name;    //歌曲名
                            let A_name = h[index].artists[0].name;   //歌手名
                            let img = h[index].album.cover;
        
                            //获取歌曲链接
                            MusicApi.xiami.getSongUrl(h[index].id)
                            .then((url)=>{
                                music_msg.push({
                                    M_name:M_name,
                                    A_name:A_name,
                                    img:img,
                                    url:url.data.url
                                })
        
                                //获取完成后返回
                                if(index==h.length-1){
                                    resolve(music_msg)
                                }
                                //resolve(music_msg);  //正常输出
                            }).catch(err=>{
                                console.log('获取歌曲链接错误',err)
                            })
                        }       
                    }).catch(err=>{
                        console.log('获取歌曲信息错误',err)
                    })
            }


            
        })
        
    
    }
}
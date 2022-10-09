// newRequestTracker ++
// console.log(newRequestTracker)
// if(newRequestTracker > 1) {
//     console.log(wss.readyState, 'WSS READY STATE AT THE TOP B4 ITS INITIALISED')
//     wss.close()
//     // READYSTATE AT 2, IT NEEDSS TO BE AT O FOR NEW CONNECTION
//     console.log(wss.readyState, 'WSS READY STATE AT THE BOTTOM B4 ITS INITIALISED')
//     console.log('TRACKER GREATER THAN 1 SO I JUST CLOSED THE WSS LOOP')
// }
// function getTicker(req, res){
//     const cryptoName = req.params.cryptoID
//     // const subscription = {"action":"subscribe",  "quotes":[`${cryptoName}/USD`], "bars":['*']};
//     // const subscription = {"action": "subscribe", "bars": ["BTC/USD"]}
//     const subscription = {"action":"subscribe","bars":["BTC/USD"]}
//     console.log(cryptoName, subscription, '++++++++++++++++++++++++++++++++++++++++++++')


//     const server = require('../server')
//     const io = require('socket.io')(server,{ cors:{ origin:'*'}})
//     io.on('connection', socket =>  console.log('io connected', cryptoName, '================================'))
//     io.on('disconnect', reason =>{
//         wss.close()
//         socket.removeAllListeners()
//         console.log('io disconnected [CONSEQUESNTIAL]')
//         //this is to make sure sockets close correctly
//         // const In = setTimeout(()=>{
//             // io.close()
//             // wss.close()
//             // console.log(reason,'NOW CLOSNG wss REASON')
//         // }, 1000)       
//     })
//     // CONNECT Alpaca needs to be inside get ticker because aqlpca neeeds that IO object


//     function connectAlpaca(cryptoName, subscription){     
//         console.log('CRYPTONAME()((()()()()()()', cryptoName)
//         console.log('SUBSCRIPTION()()()()()()()(', subscription)
//         // wss = new WebSocket(crypto_url)
        
//         setTimeout(()=>{
//             console.log('ASYNC BEGINS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
//             myAsync()
//             console.log('ASYNC ENDS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
//         }, 5000)

//         // console.log(wss.readyState, 'READYSTATE 1....')
//         function myAsync(){
//             wss = new WebSocket(crypto_url)
//             console.log('INSIDE MYASYNC &&&&&&&&&&&&&&&&&&&&&&&&&&')
//             console.log(wss.readyState, 'READY STATE ADDED')
//             wss.addEventListener('open', ws => {
//                 console.log(wss.readyState, 'READYSTATE 2....')
//                 console.log('wss connected')
//                 wss.send(JSON.stringify(auth))
//                 wss.send(JSON.stringify(subscription))
            
//             }) 
//             console.log('chesse')
//             wss.addEventListener('message', ({data})=>{
//                 let dataString = Buffer.from(data).toString('utf-8')
//                 io.emit('meta',  `${dataString}`)  
//                 console.log(dataString)    
                                    
//             })  
//             // In the cycle this function responds before MYASYNC runs, because its the previous listener thats responding. 
//             wss.addEventListener('close', (data)=>{
//                 console.log(wss.readyState, 'READYSTATE 3...')
//                 // wss.close()
//                 //this listener responds before io.connect and MYASYNC, because it is the listener from the previous request,
//                 //therefore it logs the crypto of the previous ws request while the current request is parsing.
//                 console.log('WSS disconnected, NOW WSS READY TO RE-connect', cryptoName, subscription)
//                 // connectAlpaca(cryptoName, subscription)
//             }) 
//         }  
//     }
//     connectAlpaca(cryptoName, subscription)
    

//     console.log('this async function should return at this point')
//     //this function does not return, maybe thats a new piece to the puzzle
// }


// // getTicker(req, res)

// // return '#####################################'


// static getTicker(name, newRequestTracker, yy){
//     let wss = yy
//     // newRequestTracker ++
//     console.log(newRequestTracker)

//     if(newRequestTracker > 1) {
//         console.log(wss)
//         console.log(wss.readyState, 'WSS READY STATE AT THE TOP B4 ITS INITIALISED')
//         wss.close()
//         // READYSTATE AT 2, IT NEEDSS TO BE AT O FOR NEW CONNECTION
//         console.log(wss.readyState, 'WSS READY STATE AT THE BOTTOM B4 ITS INITIALISED')
//         console.log('TRACKER GREATER THAN 1 SO I JUST CLOSED THE WSS LOOP')
//     }
//     function getData(name){
//         const cryptoName = name
//         // const cryptoName = req.params.cryptoID
//         // const subscription = {"action":"subscribe",  "quotes":[`${cryptoName}/USD`], "bars":['*']};
//         const subscription = {"action":"subscribe","quotes":[`${cryptoName}/USD`] ,"bars":["BTC/USD"]}
//         console.log(cryptoName, subscription, '++++++++++++++++++++++++++++++++++++++++++++')


//         const server = require('../server')
//         const io = require('socket.io')(server,{ cors:{ origin:'*'}})
//         io.on('connection', socket =>  console.log('io connected', cryptoName, '================================'))
//         io.on('disconnect', reason =>{
//             window.wss.close()
//             socket.removeAllListeners()
//             console.log('io disconnected [CONSEQUESNTIAL]')
//             //this is to make sure sockets close correctly
//             // const In = setTimeout(()=>{
//                 // io.close()
//                 // wss.close()
//                 // console.log(reason,'NOW CLOSNG wss REASON')
//             // }, 1000)       
//         })
//         // CONNECT Alpaca needs to be inside get ticker because aqlpca neeeds that IO object


//         function connectAlpaca(cryptoName, subscription){     
//             console.log('CRYPTONAME()((()()()()()()', cryptoName)
//             console.log('SUBSCRIPTION()()()()()()()(', subscription)
//             // wss = new WebSocket(crypto_url)
            
//             let love = setTimeout(()=>{
//                 console.log('ASYNC BEGINS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
//                 let x = myAsync()
//                 // console.log(x, '0000000000000000000000000')
//                 console.log('ASYNC ENDS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
//                 return x
//             }, 5000)

//             // console.log(wss.readyState, 'READYSTATE 1....')
//             function myAsync(){
//                 wss = new WebSocket(crypto_url)
//                 console.log('INSIDE MYASYNC &&&&&&&&&&&&&&&&&&&&&&&&&&')
//                 console.log(wss.readyState, 'READY STATE ADDED')
//                 wss.addEventListener('open', ws => {
//                     console.log(wss.readyState, 'READYSTATE 2....')
//                     console.log('wss connected')
//                     wss.send(JSON.stringify(auth))
//                     wss.send(JSON.stringify(subscription))
                
//                 }) 
//                 console.log('chesse')
//                 wss.addEventListener('message', ({data})=>{
//                     let dataString = Buffer.from(data).toString('utf-8')
//                     io.emit('meta',  `${dataString}`)  
//                     // console.log(dataString)    
                                        
//                 })  
//                 // In the cycle this function responds before MYASYNC runs, because its the previous listener thats responding. 
//                 wss.addEventListener('close', (data)=>{
//                     console.log(wss.readyState, 'READYSTATE 3...')
//                     // wss.close()
//                     //this listener responds before io.connect and MYASYNC, because it is the listener from the previous request,
//                     //therefore it logs the crypto of the previous ws request while the current request is parsing.
//                     console.log('WSS disconnected, NOW WSS READY TO RE-connect', cryptoName, subscription)
//                     // connectAlpaca(cryptoName, subscription)
//                 }) 
//                 return wss
//             }  
//             return love
//         }

//         console.log('this async function should return at this point')
//         return connectAlpaca(cryptoName, subscription)
//     }
    
 
//     console.log(getData(name), '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
//     // {wss : wss, socket: 'success'}
//     return getData(name)

// }
// }


//V4

// static getTicker(name, newRequestTracker){
//     let wss;
//     // newRequestTracker ++
//     console.log(newRequestTracker)

//     if(newRequestTracker > 1) {
//         console.log(wss.readyState, 'WSS READY STATE AT THE TOP B4 ITS INITIALISED')
//         wss.close()
//         // READYSTATE AT 2, IT NEEDSS TO BE AT O FOR NEW CONNECTION
//         console.log(wss.readyState, 'WSS READY STATE AT THE BOTTOM B4 ITS INITIALISED')
//         console.log('TRACKER GREATER THAN 1 SO I JUST CLOSED THE WSS LOOP')
//     }
//     function getTicker(name){
//         const cryptoName = name
//         // const cryptoName = req.params.cryptoID
//         // const subscription = {"action":"subscribe",  "quotes":[`${cryptoName}/USD`], "bars":['*']};
//         const subscription = {"action":"subscribe","quotes":[`${cryptoName}/USD`] ,"bars":["BTC/USD"]}
//         console.log(cryptoName, subscription, '++++++++++++++++++++++++++++++++++++++++++++')


//         const server = require('../server')
//         const io = require('socket.io')(server,{ cors:{ origin:'*'}})
//         io.on('connection', socket =>  console.log('io connected', cryptoName, '================================'))
//         io.on('disconnect', reason =>{
//             window.wss.close()
//             socket.removeAllListeners()
//             console.log('io disconnected [CONSEQUESNTIAL]')
//             //this is to make sure sockets close correctly
//             // const In = setTimeout(()=>{
//                 // io.close()
//                 // wss.close()
//                 // console.log(reason,'NOW CLOSNG wss REASON')
//             // }, 1000)       
//         })
//         // CONNECT Alpaca needs to be inside get ticker because aqlpca neeeds that IO object


//         function connectAlpaca(cryptoName, subscription){     
//             console.log('CRYPTONAME()((()()()()()()', cryptoName)
//             console.log('SUBSCRIPTION()()()()()()()(', subscription)
//             // wss = new WebSocket(crypto_url)
            
//             setTimeout(()=>{
//                 console.log('ASYNC BEGINS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
//                 myAsync()
//                 console.log('ASYNC ENDS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
//             }, 5000)

//             // console.log(wss.readyState, 'READYSTATE 1....')
//             function myAsync(){
//                 wss = new WebSocket(crypto_url)
//                 console.log('INSIDE MYASYNC &&&&&&&&&&&&&&&&&&&&&&&&&&')
//                 console.log(wss.readyState, 'READY STATE ADDED')
//                 wss.addEventListener('open', ws => {
//                     console.log(wss.readyState, 'READYSTATE 2....')
//                     console.log('wss connected')
//                     wss.send(JSON.stringify(auth))
//                     wss.send(JSON.stringify(subscription))
                
//                 }) 
//                 console.log('chesse')
//                 wss.addEventListener('message', ({data})=>{
//                     let dataString = Buffer.from(data).toString('utf-8')
//                     io.emit('meta',  `${dataString}`)  
//                     // console.log(dataString)    
                                        
//                 })  
//                 // In the cycle this function responds before MYASYNC runs, because its the previous listener thats responding. 
//                 wss.addEventListener('close', (data)=>{
//                     console.log(wss.readyState, 'READYSTATE 3...')
//                     // wss.close()
//                     //this listener responds before io.connect and MYASYNC, because it is the listener from the previous request,
//                     //therefore it logs the crypto of the previous ws request while the current request is parsing.
//                     console.log('WSS disconnected, NOW WSS READY TO RE-connect', cryptoName, subscription)
//                     // connectAlpaca(cryptoName, subscription)
//                 }) 
//             }  
//         }
//         connectAlpaca(cryptoName, subscription)
        
    
//         console.log('this async function should return at this point')
//         //this function does not return, maybe thats a new piece to the puzzle
//     }
    
 
//     getTicker(name)
    
//     return {socket: 'success'}
// }
// }

//ååååååååååååååååååååååååååååå V5

// class Crypto{
//     constructor(name, newRequestTracker, wss = null){
//         // this.name = name
//         // this.newRequestTracker = newRequestTracker
//         // this.wss = wss
//     }

//     static testModel(name){
//         console.log('IMPERIAL ')
//         console.log(name, 'line 17')
//         const t = `${name} is the name that was sent to me`
//         return t
//     }
    
//     // getTicker(name, newRequestTracker){
//     getTicker(name, tracker){
        
//         // let wss = this.wss
        
//         console.log(wss)
//         let newRequestTracker = tracker
//         console.log(wss, newRequestTracker,'OOOOOOOOO')
//         // newRequestTracker ++
//         console.log(newRequestTracker)

//         if(newRequestTracker > 1) {
//             console.log(wss.readyState, 'WSS READY STATE AT THE TOP B4 ITS INITIALISED')
//             wss.close()
//             // READYSTATE AT 2, IT NEEDSS TO BE AT O FOR NEW CONNECTION
//             console.log(wss.readyState, 'WSS READY STATE AT THE BOTTOM B4 ITS INITIALISED')
//             console.log('TRACKER GREATER THAN 1 SO I JUST CLOSED THE WSS LOOP')
//         }
//         function getTicker(name, zz){
           
//             const cryptoName = name
//             // const cryptoName = req.params.cryptoID
//             // const subscription = {"action":"subscribe",  "quotes":[`${cryptoName}/USD`], "bars":['*']};
//             const subscription = {"action":"subscribe","quotes":[`${cryptoName}/USD`] ,"bars":["BTC/USD"]}
//             console.log(cryptoName, subscription, '++++++++++++++++++++++++++++++++++++++++++++')
    
    
//             const server = require('../server')
//             const io = require('socket.io')(server,{ cors:{ origin:'*'}})
//             io.on('connection', socket =>  console.log('io connected', cryptoName, '================================'))
//             io.on('disconnect', reason =>{
//                 window.wss.close()
//                 socket.removeAllListeners()
//                 console.log('io disconnected [CONSEQUESNTIAL]')
//                 //this is to make sure sockets close correctly
//                 // const In = setTimeout(()=>{
//                     // io.close()
//                     // wss.close()
//                     // console.log(reason,'NOW CLOSNG wss REASON')
//                 // }, 1000)       
//             })
//             // CONNECT Alpaca needs to be inside get ticker because aqlpca neeeds that IO object
    
    
//             function connectAlpaca(cryptoName, subscription){  
               
//                 console.log('CRYPTONAME()((()()()()()()', cryptoName)
//                 console.log('SUBSCRIPTION()()()()()()()(', subscription)
//                 // wss = new WebSocket(crypto_url)
                
//                 setTimeout(()=>{
                    
//                     console.log('ASYNC BEGINS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
//                     myAsync()
//                     console.log('ASYNC ENDS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
//                 }, 5000)
    
//                 // console.log(wss.readyState, 'READYSTATE 1....')
//                 function myAsync(){
                    
//                     wss = new WebSocket(crypto_url)
                    
//                     console.log('INSIDE MYASYNC &&&&&&&&&&&&&&&&&&&&&&&&&&')
//                     console.log(wss.readyState, 'READY STATE ADDED')
//                     wss.addEventListener('open', ws => {
//                         console.log(wss.readyState, 'READYSTATE 2....')
//                         console.log('wss connected')
                        
//                         wss.send(JSON.stringify(auth))
//                         wss.send(JSON.stringify(subscription))
                    
//                     }) 
//                     console.log('chesse')
//                     wss.addEventListener('message', ({data})=>{
//                         let dataString = Buffer.from(data).toString('utf-8')
//                         io.emit('meta',  `${dataString}`)  
//                         // console.log(dataString)    
                                            
//                     })  
//                     // In the cycle this function responds before MYASYNC runs, because its the previous listener thats responding. 
//                     wss.addEventListener('close', (data)=>{
//                         console.log(wss.readyState, 'READYSTATE 3...')
//                         // wss.close()
//                         //this listener responds before io.connect and MYASYNC, because it is the listener from the previous request,
//                         //therefore it logs the crypto of the previous ws request while the current request is parsing.
//                         console.log('WSS disconnected, NOW WSS READY TO RE-connect', cryptoName, subscription)
//                         // connectAlpaca(cryptoName, subscription)
//                     }) 
//                 }  
//             }
//             connectAlpaca(cryptoName, subscription)
            
        
//             console.log('this async function should return at this point')
//             //this function does not return, maybe thats a new piece to the puzzle
//         }
        
     
//         // getTicker(name)
//         getTicker(name)
        
//         return {socket: 'success'}
//     }
// }




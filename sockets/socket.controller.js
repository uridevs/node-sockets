const socketController = (socket) =>{

    console.log('Client connected', socket.id)
    
    socket.on('disconnect', () => {
        console.log('Client disconnected!', socket.id);
    })

    socket.on('send-message', (payload, callback) => {
        const id = 123123;
        callback(id);
        
        socket.broadcast.emit('send-message', payload)
    })
}

module.exports = {
    socketController
}
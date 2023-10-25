const net = require('net');

const client = net.createConnection({ port: 8888 }, () => {
  console.log('已连接到服务器');
  
  // 在这里可以发送数据给服务器
  client.write('你好，服务器！');
});

client.on('data', (data) => {
  console.log('从服务器收到数据：' + data);
});

client.on('end', () => {
  console.log('与服务器断开连接');
});

client.on('error', (err) => {
  console.error('连接错误：' + err);
});
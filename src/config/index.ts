// 配置文件
const config = {
  port: 3000, // 服务器监听的端口号
  db: {
    host: "localhost", // 数据库主机地址
    port: 27017, // 数据库主机端口号
    name: "test", // 数据库名称
    user: "test", // 数据库用户名
    pass: "test", // 数据库密码
  },
  jwt: {
    secret: "test", // JWT签名密钥
    expiresIn: "1d", // JWT过期时间
  },
  email: {
    host: "smtp.gmail.com", // 邮件服务器主机地址
    port: 465, // 邮件服务器主机端口号
  },
};

export default config; // 导出配置文件

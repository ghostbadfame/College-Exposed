const mail = require('@sendgrid/mail');


mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
    const body = JSON.parse(req.body);

    const message = `
      Name: ${body.name}\r\n
      Email: ${body.email}\r\n
      Message: ${body.message}
    `;
try {
    await mail.send({
      to: 'ayushchamoli001@gmail.com',
      from: 'ayushchamoli001@gmail.com',
      subject: 'New Message!',
      text: message,
      html: message.replace(/\r\n/g, '<br>'),
    });
    res.status(200).json({ status: 'Ok' });
    
}
  
  catch (error) {
    console.log(error); // log the error using the logging library
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

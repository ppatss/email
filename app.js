var api_key = '3e9ba83064aa35a9f81a13447c6a61a7-1b65790d-77eb7503';
var domain = 'sandbox36004289077d401593457c7d21cdc77f.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Pat <supakit6948@gmail.com>',
  to: 'supakit6948@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};
 
mailgun.messages().send(data, function (error, body) {
if(error){
    console.log(error);
}
console.log(body);
});
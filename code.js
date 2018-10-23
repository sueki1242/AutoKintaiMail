var mail_address_list = ['your-boss@example.com', 'your-team@example.com'];
var name = 'ほげ';

function SendTrainDelayMail() {
  var today = getTodayString();
  var mail_title = '【勤怠連絡】 ' + name + ' ' + today + ' 電車遅延';
  var html = HtmlService.createHtmlOutputFromFile("train_delay_mail").getContent().replace('MM/DD', today);
  MailApp.sendEmail(
    mail_address_list,
    mail_title,
    '', // mail body(in plaintext)
    {htmlBody: html}
  );
}

function SendPaidLeaveMail() {
  var today = getTodayString();
  var mail_title = '【勤怠連絡】 ' + name + ' ' + today + ' 全休';
  var html = HtmlService.createHtmlOutputFromFile("ill_leave_mail").getContent().replace('MM/DD', today);
  MailApp.sendEmail(
    mail_address_list,
    mail_title,
    '', // mail body(in plaintext)
    {htmlBody: html});
}

function getTodayString() {
  var d = new Date();
  var mm = ('0' + (d.getMonth()+1)).slice(-2);
  var dd = ('0' + (d.getDate())).slice(-2);
  Logger.log(d);
  Logger.log(mm+'/'+dd);
  return mm+'/'+dd;
}
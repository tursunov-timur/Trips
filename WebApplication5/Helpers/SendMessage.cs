using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using RestSharp;
using System.Net.Mail;

namespace WebApplication5.Helpers
{
    public class SendMessage
    {
       public static string Send()
        {
            string to = "jane@contoso.com";
            string from = "ben@contoso.com";
            MailMessage message = new MailMessage(from, to);
            message.Subject = "Using the new SMTP client.";
            message.Body = @"Using this new feature, you can send an email message from an application very easily.";

            SmtpClient client = new SmtpClient();
            client.UseDefaultCredentials = true;

            try
            {
                client.Send(message);
                return "OK";
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
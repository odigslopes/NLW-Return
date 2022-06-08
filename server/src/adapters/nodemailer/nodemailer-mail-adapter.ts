import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from './../mail-adapter';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ce6af28897d023",
    pass: "8dc244cb36409f"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Diego Lopes <diegolopes.vieira@hotmail.com>',
      subject,
      html: body,
    })
      
  };
}
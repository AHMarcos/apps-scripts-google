function myFunction() {
  var doc = DocumentApp.create("demo1");
  doc.getBody().appendParagraph("Bienvenidos al mundo apps scripts");
}

function myFunction2(){
  var file = DriveApp.getFileById('1M6ub7UdQ_d7Z8Wr_ohl47B2DNjCPTlSWSl88o_kgJKQ');
  MailApp.sendEmail('marcos.alarcon@vallegrande.edu.pe','Asunto Apuntes','Apuntes de la clase', {
    name: 'Marcos Alarcon',
    attachments: [file.getAs(MimeType.PDF).setName('Apuntes'+'.pdf')]
  });
}

# no entiendo claramente que lenguaje usa

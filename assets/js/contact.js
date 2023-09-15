var saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // Get the contact information from the website
    var contact = {
        name: "Patrick Latuny",
        nickname: "Patrick",
        lastname: "Latuny",
        phone: "0652334084",
        email: "patrick@latunyservices.nl",
        org: "Latuny Services",
        img: "https://raw.githubusercontent.com/oscarpeters/Latuny/main/assets/images/1557829345391.jpeg",
        logo: "https://raw.githubusercontent.com/oscarpeters/Latuny/main/assets/images/1557829345391.jpeg",
        url: "https://latunyservices.nl",
        title: "Millieudeskundige"
        
    };
    // create a vcard file
    // var vcard = "BEGIN:VCARD\nVERSION:4.0\nFN:" + contact.name + "\nTEL;TYPE=work,voice:" + contact.phone + "\nEMAIL:" + contact.email + "\nEND:VCARD";
    var vcard = "BEGIN:VCARD\nVERSION:4.0\nFN:" + contact.name + "\nN:Latuny;Patrick" + "\nNICKNAME:" + contact.nickname + `\nPHOTO;MEDIATYPE=image/jpeg:${contact.img}` + "\nTEL;TYPE=work,voice:" + contact.phone + "\nEMAIL:" + contact.email + "\nTITLE:" + contact.title + `\nLOGO;MEDIATYPE=image/png:${contact.logo}` + "\nORG:Latuny Services" + "\nURL:" + contact.url + "\nEND:VCARD";
    var blob = new Blob([vcard], { type: "text/vcard" });
    var url = URL.createObjectURL(blob);

    const newLink = document.createElement('a');
    newLink.download = contact.name + ".vcf";
    newLink.textContent = contact.name;
    newLink.href = url;

    newLink.click();
});

var saveBtnMain = document.getElementById("save-btn-main");
saveBtnMain.addEventListener("click", function (event) {
    event.preventDefault();
    // Get the contact information from the website
    var contact = {
        name: "Patrick Latuny",
        phone: "0652334084",
        email: "patrick@latunyservices.nl",
        org: "Latuny Services",
        img: "assets/images/pasfoto.jpeg"
    };
    // create a vcard file
    // var vcard = "BEGIN:VCARD\nVERSION:4.0\nFN:" + contact.name + "\nTEL;TYPE=work,voice:" + contact.phone + "\nEMAIL:" + contact.email + "\nEND:VCARD";
    var vcard = "BEGIN:VCARD\nVERSION:4.0\nFN:" + contact.name + "\nN:Latuny;Patrick" + "\nNICKNAME:" + contact.nickname + `\nPHOTO;MEDIATYPE=image/jpeg:${contact.img}` + "\nTEL;TYPE=work,voice:" + contact.phone + "\nEMAIL:" + contact.email + "\nTITLE:" + contact.title + `\nLOGO;MEDIATYPE=image/png:${contact.logo}` + "\nORG:Latuny Services" + "\nURL:" + contact.url + "\nEND:VCARD";
    var blob = new Blob([vcard], { type: "text/vcard" });
    var url = URL.createObjectURL(blob);

    const newLink = document.createElement('a');
    newLink.download = contact.name + ".vcf";
    newLink.textContent = contact.name;
    newLink.href = url;

    newLink.click();
});





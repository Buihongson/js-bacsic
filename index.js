var readlineSync = require('readline-sync');
var fs = require('fs');

var contacts = [];

function loadData(){
    var fileContent = fs.readFileSync('./data.json', {encoding: 'utf8'});
    contacts = JSON.parse(fileContent);
}

function showMenu(){
    console.log('1. Create a new contact.');
    console.log('2. Update a contact.');
    console.log('3. Delete a contact.');
    console.log('4. Find contact.');
    console.log('5. Show contacts.');
    console.log('6. Exit.');
    var option = readlineSync.question('> ');
    switch(option){
        case '1':
            createContact();
            showMenu();
            break;
        case '2':
            updateContact();
            //showMenu();
            break;
        case '3':
            deleteContact();
            showMenu();
            break;
        case '4':
            findContact();
            break;
        case '5':
            showContact();
            showMenu();
            break;
        case '6':
            exit(); 
            break;
        default:
            console.log('Wrong option');
            showMenu();
            break;
    }
}

function createContact(){
    // tạo câu hỏi cho người dùng
    //var id = readlineSync.question('ID: ');   
    var name = readlineSync.question('Name: ');
    var phone = readlineSync.question('Phone: ');
    //taoj một object mới
    var contact = {
        //id = id,
        name: name,
        phone: phone
    }
    // chèn object vào mảng
    contacts.push(contact);
    // chuyển mảng từ object sang string
    var content = JSON.stringify(contacts);
    // viết vào data.json
    fs.writeFileSync('./data.json', content, {encoding: 'utf8'});
}

function updateContact(){
    // đọc file data.json và chuyển về object
    loadData();
    var findData = readlineSync.question('Write name or phone: ');
    for(var i = 0 ; i < contacts.length ; i++){
        // tìm tên cần thay đổi
        if(contacts[i].name === findData){
            var newName = readlineSync.question('newName: '); 
            var newPhone = readlineSync.question('Newphone: ');           
            // cập nhập số điện thoại va tên
            contacts[i].name = newName;
            contacts[i].phone = newPhone;
            // chuyển object thành string và lưu vào data.json
            var content = JSON.stringify(contacts);
            fs.writeFileSync('./data.json', content); 
            //return contacts;        
        } else if(contacts[i].phone === findData){
            var newName = readlineSync.question('newName: '); 
            var newPhone = readlineSync.question('Newphone: ');           
            // cập nhập số điện thoại va tên
            contacts[i].name = newName;
            contacts[i].phone = newPhone;
            // chuyển object thành string và lưu vào data.json
            var content = JSON.stringify(contacts);
            fs.writeFileSync('./data.json', content); 
            //return contacts;
        }
    }   
}

function deleteContact(){
    loadData();
    var findData = readlineSync.question('Write name or phone: ');
    for( var i = 0; i < contacts.length ; i++){
        if(contacts[i].name === findData){
            console.log(contacts[i].name);
            contacts.splice(i,1);
            var content = JSON.stringify(contacts);
            fs.writeFileSync('./data.json', content); 
            //return contacts;
        } else if(contacts[i].phone === findData){
            contacts.splice(i,1);
            var content = JSON.stringify(contacts);
            fs.writeFileSync('./data.json', content); 
            //return contacts;
        }
    }
}

function findContact(){
    loadData();
    var findData = readlineSync.question('Write something: ');
    return contacts.filter(function(item){
        return item.name.toLowerCase().indexOf(findData.toLowerCase()) > -1;
    });
}

function showContact(){
    for (var contact of contacts){
        console.log(contact.name, contact.phone);
    }
}

function exit(){

}

function main(){
    loadData();
    showMenu();
}


main();
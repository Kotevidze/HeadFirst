function getSecret(file, secretPassword) { // Функция возвращает содержимое файла, если пароль указан верно и регистрирует все попытки обращения к файлу (вызова функции)
    file.opened = file. opened + 1; // Объект superSecretFile передается функции и ему назначается имя параметра file
    if (secretPassword == file.password) {
        return file.contents;
    }
    else {
        return "Invalid password! No secret for you.";
    }
}

function setSecret(file, secretPassword, secret) { // Если пароль указан верно, функция обновляет содержимое файла и обнуляет счетчик обращений
    if (secretPassword == file.password) {
        file.opened = 0;
        file.contents = secret;
    }
}

var superSecretFile = {
    level: "classified",
    opened: 0,
    password: 2,
    contents: "Dr. Evel's next meeting is in Detroit."
};

var secret = getSecret(superSecretFile, 2);
console.log(secret);
console.log(superSecretFile);
setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(superSecretFile, 2);
console.log(secret);
console.log(superSecretFile);
getSecret(superSecretFile, 2);
getSecret(superSecretFile, 2);
getSecret(superSecretFile, 2);
console.log(superSecretFile);
setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
console.log(superSecretFile);
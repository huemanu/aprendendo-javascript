<?php
// estou salvando as variáveis somente se eles estiverem sanitizadas;

$name = isset($name) ? $name : "";
$cpf = isset($cpf) ? $cpf : "";
$email = isset($email) ? $email : "";
$password = isset($password) ? $password : "";
$birthday_string = isset($birthday_string) ? $birthday_string : "";
$gender = isset($gender) ? $gender : "";
$nome_curso = ["musica", "artes-plasticas", "danca", "literatura", "artes-cenicas", "aviacao"];
$qtd_cursos = 0;
foreach ($nome_curso as $c) {
    $curso[$c] = isset($_POST["curso-$c"]) ? $_POST["curso-$c"] : "0";
    if ($curso[$c]) {
        $qtd_cursos++;
    }
}
$termos = isset($termos) ? $termos : "";

// Só executa se tiver recebido os dados pelo método POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // NOME
    if (empty($_POST["name"])) {
        $nameErr = "É preciso inserir nome";
        $name = "";
    } else {
        if (!preg_match("/(\w|\s){2,255}/", $_POST["name"])) {
            $nameErr = "Nome inválido.";
        } else {
            $name = test_input($_POST["name"]);
        }
    }

    // CPF
    if (empty($_POST["cpf"])) {
        $cpfErr = "É preciso inserir cpf";
    } else {
        if (!preg_match("/\d{3}.\d{3}.\d{3}-\d{2}/", $_POST["cpf"])) {
            $cpfErr = "Formato de CPF inválido";
        } else {
            $cpf = test_input($_POST["cpf"]);
        }
    }

    // EMAIL
    if (empty($_POST["email"])) {
        $emailErr = "É preciso inserir email";
    } else {
        if (!preg_match("/[a-z0-9]{1,64}@[a-z0-9]{1,255}/", $_POST["email"])) {
            $emailErr = "Formato de CPF inválido";
        } else {
            $email = test_input($_POST["email"]);
        }
    }

    // SENHA
    if (empty($_POST["password"])) {
        $passwordErr = "É preciso inserir senha";
    } else {

        if (!preg_match("/.{8,}/", $_POST["password"])) {
            $passwordErr = "Senha precisa ter pelo menos 8 caracteres.";
        } elseif (!preg_match("/(?=.*\d)/", $_POST["password"])) {
            $passwordErr = "Senha precisa ter pelo menos 1 dígito.";
        } elseif (!preg_match("/(?=.*[a-z])(?=.*[A-Z])/", $_POST["password"])) {
            $passwordErr = "Senha precisa ter uma combinação de letras maiúsculas e minúsculas";
        } else {
            $password = test_input($_POST["password"]);
        }
    }

    // DATA DE NASCIMENTO
    if (empty($_POST["birthday"])) {
        $birthdayErr = "É preciso inserir data de nascimento";
    } else {
        $birthday_string = test_input($_POST["birthday"]);
        $birthday = strtotime($birthday_string);
        // não consegui fazer a validação se er
    }

    // GÊNERO
    $gender = isset($gender) ? $gender : "no-data";
    if (empty($_POST["gender"])) {
        $genderErr = "É preciso inserir genero";
    } else {
        $gender = test_input($_POST["gender"]);
    }

    // CURSO
    $qtd_cursos = 0;
    foreach ($nome_curso as $c) {
        $curso[$c] = isset($_POST["curso-$c"]) ? $_POST["curso-$c"] : "0";
        if ($curso[$c]) {
            $qtd_cursos++;
        }
    }
    if ($qtd_cursos == 0) {
        $cursoErr = "É preciso marcar pelo menos um curso";
    }

    // color

    // profile pic

    // TERMOS
    if (isset($_POST["termos"])) {
        $termos = $_POST["termos"];
    } else {
        $termosErr = "É preciso concordar com termos";
        $termos = "";
    }

}

if (
    isset($name) &&
    isset($cpf) &&
    isset($email) &&
    isset($password) &&
    isset($birthday) &&
    isset($gender) &&
    $qtd_cursos >= 1 &&
    $termos == 1
) {
    $success = 1;
} else {
    $success = 0;
}

// Serve para sanitizar as strings de forma genérica.
function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

/* Foi necessário só numa etapa. Guardo aqui no arquivo para refência minha no futuro.
if (basename(htmlspecialchars($_SERVER["PHP_SELF"])) == "processando_cadastro_post.php") {
    header("location: ./index.php");
}
*/
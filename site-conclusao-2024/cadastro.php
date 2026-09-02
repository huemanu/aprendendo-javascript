<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nonagon Gates - Cursos para artes mais intensas!</title>
    <link rel="stylesheet" href="./style.css" />
    <!--favicon-->

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Emblema+One&display=swap" rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap" rel="stylesheet">

    <?php
    include "./processando_cadastro_post.php";

    $success = $success == 1 ? 1 : 0;
    ?>
</head>

<body>
    <div class="all">
        <div class="topbar">
            <div class="topbar-info">
                <div class="logotype-space">
                    <p class="logotype">
                        <i class="logotype-letter">N</i>
                        <i class="logotype-letter">o</i>
                        <i class="logotype-letter">n</i>
                        <i class="logotype-letter">a</i>
                        <i class="logotype-letter">g</i>
                        <i class="logotype-letter">o</i>
                        <i class="logotype-letter">n</i>
                        <i class="logotype-letter">&nbsp;</i>
                        <i class="logotype-letter w">G</i>
                        <i class="logotype-letter w">a</i>
                        <i class="logotype-letter">t</i>
                        <i class="logotype-letter">e</i>
                        <i class="logotype-letter">s</i>
                    </p>
                </div>
                <div class="just-horizontal-space"></div>
                <div class="pre-slogan-space">
                    <p class="pre-slogan">
                        [Cursos]
                    </p>
                </div>
                <div class="slogan-space">
                    <p class="slogan">
                        Para artes mais intensas!
                    </p>
                </div>
            </div>
            <div class="topbar-ad">
                <div class="gizz-ad-space">
                    <p>
                        Brought to you by
                    </p>
                    <img class="gizz-ad" src="./images/king-gizz-ad.png" alt="Propaganda de King Gizzard">
                </div>

            </div>
        </div>
        <div class="center">
            <div class="content">
                <div class="text">
                    <p>Bem vindo a Nonagon Gates! Vamos começar com sua incrição <i class="woo">woo!</i></p>
                </div>
            </div>
            <div class="content">
                <form for="registration" method="POST" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
                    <div class="text">
                        <p class="title">Formulário de Inscrição</p>
                        <br>
                    </div>
                    <ol class="form-list">
                        <li class="form-item">
                            <label for="name">Nome: </label>
                            <span class="error">*</span>
                            <br>
                            <input type="text" name="name" value="<?php echo isset($name) ? $name : '' ?>">
                            <br>
                            <span class="error"><?php if (isset($nameErr))
                                echo $nameErr; ?></span>
                        </li>
                        <li class="form-item">
                            <label for="cpf">CPF: </label>
                            <span class="error">*</span>
                            <br>
                            <input type="text" name="cpf" placeholder="987.654.321-09"
                                value="<?php echo isset($cpf) ? $cpf : '' ?>">
                            <br>
                            <span class="error"><?php if (isset($cpfErr))
                                echo $cpfErr; ?></span>
                        </li>
                        <li class="form-item">
                            <label for="email">E-mail: </label>
                            <span class="error">*</span>
                            <br>
                            <input type="email" name="email" placeholder="stu@kinggizzard.com"
                                value="<?php echo isset($email) ? $email : '' ?>">
                            <!--type="email" already takes care of pattern-->
                            <br>
                            <span class="error"><?php if (isset($emailErr))
                                echo $emailErr; ?></span>
                        </li>
                        <li class="form-item">
                            <label for="password">Senha: </label>
                            <span class="error">*</span>
                            <br>
                            <input type="password" name="password" id="password"
                                placeholder="How can anybody see me, I'm invisible?!"
                                value="<?php echo isset($password) ? $password : '' ?>">
                            <br>
                            <span class="error"><?php if (isset($passwordErr))
                                echo $passwordErr; ?></span>
                        </li>
                        <li class="form-item">
                            <label for="birthday">Data de nascimento: </label>
                            <span class="error">*</span>
                            <br>
                            <div class="centered">
                                <input type="date" name="birthday" placeholder="1990-10-26"
                                    value="<?php echo isset($birthday) ? date("Y-m-d", $birthday) : '' ?>">
                            </div>
                            <br>
                            <span class="error"><?php if (isset($birthdayErr))
                                echo $birthdayErr; ?></span>
                        </li>
                        <li class="form-item">
                            <label for="gender">Gênero: </label>
                            <span class="error">*</span>
                            <br>
                            <input type="radio" name="gender" value="male" <?php echo $gender == "male" ? "checked" : "" ?>>
                            <p class="option-text">Masculino</p>
                            <br>
                            <input type="radio" name="gender" value="female" <?php echo $gender == "female" ? "checked" : "" ?>>
                            <p class="option-text">Feminino</p>
                            <br>
                            <input type="radio" name="gender" value="none" <?php echo $gender == "none" ? "checked" : "" ?>>
                            <p class="option-text">Não</p>
                            <br>
                            <input type="radio" name="gender" value="other" <?php echo $gender == "other" ? "checked" : "" ?>>
                            <p class="option-text">Outro</p>
                            <br>
                            <input type="radio" name="gender" value="no-info" <?php echo $gender == "no-info" ? "checked" : "" ?>>
                            <p class="option-text">Prefiro não informar</p>
                            <br>
                            <span class="error"><?php if (isset($genderErr))
                                echo $genderErr; ?></span>
                        </li>
                        <li class="form-item">
                            <label for="curso">Curso: </label>
                            <span class="error">*</span>
                            <br>
                            <input type="checkbox" name="curso-musica" value="1"
                            <?php echo $curso["musica"] == "1" ? "checked" : "" ?>> <!--can't use -->
                            <p class="option-text">Música</p>
                            <br>
                            <input type="checkbox" name="curso-artes-plasticas" value="1"
                            <?php echo $curso["artes-plasticas"] == "1" ? "checked" : "" ?>>
                            <p class="option-text">Artes Plásticas</p>
                            <br>
                            <input type="checkbox" name="curso-danca" value="1"
                            <?php echo $curso["danca"] == "1" ? "checked" : "" ?>>
                            <p class="option-text">Dança</p>
                            <br>
                            <input type="checkbox" name="curso-literatura" value="1"
                            <?php echo $curso["literatura"] == "1" ? "checked" : "" ?>>
                            <p class="option-text">Literatura</p>
                            <br>
                            <input type="checkbox" name="curso-artes-cenicas" value="1"
                            <?php echo $curso["artes-cenicas"] == "1" ? "checked" : "" ?>>
                            <p class="option-text">Artes Cênicas</p>
                            <br>
                            <input type="checkbox" name="curso-aviacao" value="1"
                            <?php echo $curso["aviacao"] == "1" ? "checked" : "" ?>>
                            <p class="option-text">Aviação</p>
                            <br>
                            <br>
                            <span class="error"><?php if (isset($cursoErr))
                                echo $cursoErr; ?></span>
                        </li>
                        <li class="form-item">
                            <label for="color">Cor do site: </label>
                            <br>
                            <input type="color" for="color" value="#d0243c"> <!--placeholder="#d0243c"-->
                        </li>
                        <li class="form-item">
                            <label for="profile-pic">Foto de perfil: </label>
                            <br>
                            <input type="file" for="profile-pic" name="profile-pic">
                            <!--Not setting a placeholder this time-->
                        </li>
                        <li class="form-item">
                            <label for="termos">Para prosseguir, concorde com os termos: </label>
                            <span class="error">*</span>
                            <br>
                            <input type="checkbox" name="termos" value="1"
                            <?php echo $termos == "1" ? "checked" : "" ?>>
                            <p class="option-text">Termos.</p>
                            <br>
                            <span class="error"><?php if (isset($termosErr))
                                echo $termosErr; ?></span>
                        </li>
                    </ol>
                    <div class="form-item-submit">
                        <input type="submit">
                    </div>
                </form>
            </div>
            <br>
            <?php
                if($success == "1"){
                    echo "
                    <div class=\"content centered\">
                        <p>Dados recebidos com sucesso!</p>
                    </div>";
                }
            ?>
        </div>
        <div class="bottombar">
            <p class="all-rights">
                All rights reserved to King Gizzard &#174;
            </p>
            <p class="all-rights">
                A site made by @emanuel_lizard_wizard.
            </p>
        </div>
    </div>
</body>

</html>
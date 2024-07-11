function c(){
    var conteudo = document.getElementById("menu");
    document.title="Curriculo"
    conteudo.innerHTML ='<div id="mn"><h1>Curriculo</h1></div><h3>Objetivo profissional:</h3><p>Pretendo virar um desenvolvedor de sites para vender meus cursos de música 🎶🎸🎹. Pretendo também virar um DEV sênior futuramente em uma Multi-Nacional.</p><h3>Formação:</h3><p>Estou cursano no Senai para ser um Assistente de Programação Web</p><h3>Trabalhos:</h3><p><a href="https://kauasus.github.io">Um de meus projetos feito em HTML e CSS</a></p><br><br><button id="btni">Voltar</button>';
    
    }
    
    var btn =document.getElementById("cur");
    btn.onclick= function(a) {
     c()
    var btni =document.getElementById("btni");
    btni.onclick= function reload(){
    window.location.reload(btni.onclick);
    }
    }
    
    
    function p(){
    var conteudo1 = document.getElementById("menu");
    document.title="Política de atendimento "
    conteudo1.innerHTML = '<div id="mn"><h1>Política de Atendimento </h1></div><br><p>Trabalho de 13:00 as 17:00, de segunda a sexta.Sábados, apenas com marcação prévia.</p><p>Não desenvolvo trabalhos de cunho ofensivo, pejorativo ou pornográfico.Favor não insistir!</p><br><br><button id="btni">Voltar</button>';
    }
    
    var btn1 =document.getElementById("plt");
    btn1.onclick= function(a) {
     p();
    var btni =document.getElementById("btni");
    btni.onclick= function reload(){
    window.location.reload(btni.onclick);
    }
    }
    
    
    
    function ct(){
    var  conteudo2 = document.getElementById("menu");
    var  conteudo_r = document.getElementById("rodape");
    document.title="Contato";
    conteudo2.innerHTML = '<div id="mn"><h1>Contato</h1></div><br><h2>Formulário de Contato</h2><h5>Informe seus dados para conversamos</h5><form name="frm_dados" method="POST"action="http://127.0.0.1:3500/formulario.php"><label>Seu nome:</label><input type="text" name="txt_nome"><br><label>Seu email:</label><input type="text" name="txt_email"><br><label>Seu telefone:</label><input type="text" name="txt_telefone"><br><br><input type="submit" value="Enviar"><input type="reset" value="Limpar"></form><br><br><button id="btni">Voltar</button>';
    }
    
    var btn2 =document.getElementById("ctt");
    btn2.onclick= function(a) {
     ct();
    var btni =document.getElementById("btni");
    btni.onclick= function reload(){
    window.location.reload(btni.onclick);
    }
    }

const InfoInConsole = () =>{

  //  document.body.contentEditable=true; //редактор текста

    let css = 'color:red;';
    const d = new Date();
    const year = d.getFullYear();

return console.log(`%c
─▌█──
─███─
─▐█▐─
─▐▐ 
─▐▐ 
──────────
© ${year} by mrZ
──────────────────
📧 mrZ@mrZLab630.pw
────────────────────────`, css);

};

export default InfoInConsole;
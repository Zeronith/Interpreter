require.config({
  paths: {
    vs: 'https://unpkg.com/monaco-editor@latest/min/vs'
  }
});
let htmlEditor , cssEditor, jsEditor;
let submitBtn = document.getElementById("submit-btn");

require(['vs/editor/editor.main'], function () 
{
    htmlEditor = monaco.editor.create(document.getElementById('html'), {
    value: '',
    language: 'html',
    theme: 'vs-dark',
    fontSize: 18,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    overviewRulerLanes: 0,
    scrollbar: {
      vertical: 'hidden',
      horizontal: 'hidden'
    }
  });

    cssEditor = monaco.editor.create(document.getElementById('css'), {
    value: '',
    language: 'css',
    theme: 'vs-dark',
    fontSize: 18,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    overviewRulerLanes: 0,
    scrollbar: {
      vertical: 'hidden',
      horizontal: 'hidden'
    }
  });

    jsEditor = monaco.editor.create(document.getElementById('js'), {
    value: '',
    language: 'javascript',
    theme: 'vs-dark',
    fontSize: 18,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    overviewRulerLanes: 0,
    scrollbar: {
      vertical: 'hidden',
      horizontal: 'hidden'
    }
  });

});


submitBtn.addEventListener("click" , ()=> {
    let html = htmlEditor.getValue();
    let css = cssEditor.getValue();
    let js = jsEditor.getValue();

    console.log(html + " " + css + " " + js);
    let content = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                ${css}
            </style>    
        </head>
        <body>
            ${html}
        <script> 
            ${js}
        </script>
        </body>
    </html>
    `

    preview.srcdoc = content;
})
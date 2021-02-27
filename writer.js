/* Determine which operating system, so that we can use the right shortcuts.
For your own private version, you can simply hardcode the OS variable to Mac, Windows or Linux
Taken from: https://stackoverflow.com/questions/38241480/detect-macos-ios-windows-android-and-linux-os-with-js*/

function getOS() {
  var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'darwin'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
}

/* Set the modifier key to ctrl if Mac, otherwise meta (windows key) */
var modifier = (getOS() == 'Mac') ? "ctrl" : "alt";

/* Function that takes a key input and executes code depending on the 
combination. Ctrl Shift + 1 to Ctrl + Shift 4 are used to toggle
between Editor, Preview, Shortcuts & Read Me. Keycodes are from 
https://keycode.info/ */

function doc_keyUp(e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode == 49) {
        editor();
    } else if (e.ctrlKey && e.shiftKey && e.keyCode == 50) {
        preview();
    }  else if (e.ctrlKey && e.shiftKey && e.keyCode == 51) {
        shortcuts();
    } else if (e.ctrlKey && e.shiftKey && e.keyCode == 52) {
        help();
    } 
}

/* Register an event listener for keystrokes and intercept in case it
meets the above patterns */
document.addEventListener('keyup', doc_keyUp, false);


/* TinyMCE Editor Setup */

var dfreeBodyConfig = {
  selector: '#tinymce',
  content_css: "writer.css",
  branding: false,
  statusbar: false,
  menubar: false,
  inline: false,
  toolbar: 'mycharmap | bold italic underline | styleselect forecolor | table link | numlist bullist | removeformat undo redo searchreplace | charmap | importHTML exportHTML | help code fullscreen',
  plugins: ['quickbars', 'textpattern', 'lists', 'paste', 'autoresize', 'code', 'link', 'table', 'searchreplace', 'charmap', 'fullscreen', 'help'],
  paste_as_text: true,
  entity_encoding: 'raw',
  textpattern_patterns: [
    {start: '*', end: '*', format: 'italic'},
    {start: '**', end: '**', format: 'bold'},
    {start: '#', format: 'h1'},
    {start: '##', format: 'h2'},
    {start: '###', format: 'h3'},
    {start: '####', format: 'h4'},
    {start: '#####', format: 'h5'},
    {start: '######', format: 'h6'},
    {start: '* ', cmd: 'InsertUnorderedList'},
    {start: '- ', cmd: 'InsertUnorderedList'},
    {start: '1. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'decimal' }},
    {start: '1) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'decimal' }},
    {start: 'a. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-alpha' }},
    {start: 'a) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-alpha' }},
    {start: 'i. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-roman' }},
    {start: 'i) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-roman' }}
  ],
  quickbars_insert_toolbar: false,
  quickbars_selection_toolbar: false,
  contextmenu: 'undo redo | inserttable | cell row column deletetable | help',
      setup: function (editor) {
    editor.ui.registry.addToggleButton('mycharmap', {
      text: 'Σ',
      onAction: function (api) {
        char();
        api.setActive(!api.isActive());
      }
    });

editor.ui.registry.addToggleButton('exportHTML', {
      text: 'Export Content',
      onAction: function (api) {
exportFile(tinymce.activeEditor.getContent());
      }
    });

editor.ui.registry.addToggleButton('importHTML', {
      text: 'Import Content',
      onAction: function (api) {
document.getElementById('import-file').click();
      }
    });

  },
  init_instance_callback: function (editor) {
    
    editor.shortcuts.add(
      'ctrl+shift+69', 'Inserts for ctrl+shift+e', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '∈');
    });
 
     editor.shortcuts.add(
      'ctrl+alt+69', 'Inserts for ctrl+alt+e', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '∉');
    });
    
     editor.shortcuts.add(
      'ctrl+shift+67', 'Inserts for ctrl+shift+c', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '⊂');
    });

     editor.shortcuts.add(
      'ctrl+alt+67', 'Inserts for ctrl+alt+c', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '⊃');
    });

    editor.shortcuts.add(
      'ctrl+shift+85', 'Inserts for ctrl+shift+u', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '⋃');
    });

    editor.shortcuts.add(
      'ctrl+shift+73', 'Inserts for ctrl+shift+i', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '⋂');
    });

    editor.shortcuts.add(
      'ctrl+shift+48', 'Inserts for ctrl+shift+0', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '∅');
    });



    editor.shortcuts.add(
      'ctrl+shift+65', 'Inserts for ctrl+shift+a', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '⋀');
    });

    editor.shortcuts.add(
      'ctrl+shift+79', 'Inserts for ctrl+shift+o', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '⋁');
    });

    editor.shortcuts.add(
      'ctrl+shift+78', 'Inserts for ctrl+shift+n', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '¬');
    });

    editor.shortcuts.add(
      'ctrl+shift+88', 'Inserts for ctrl+shift+x', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '∃');
    });

    editor.shortcuts.add(
      'ctrl+alt+88', 'Inserts for ctrl+alt+x', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '∄');
    });

    editor.shortcuts.add(
      'ctrl+alt+65', 'Inserts for ctrl+alt+a', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '∀');
    });

    editor.shortcuts.add(
      'ctrl+shift+84', 'Inserts for ctrl+shift+t', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '∴');
    });

    editor.shortcuts.add(
      'ctrl+shift+66', 'Inserts for ctrl+shift+b', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '∵');
    });



    editor.shortcuts.add(
      'ctrl+shift+188', 'Inserts for ctrl+shift+,', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '≤');
    });

    editor.shortcuts.add(
      'ctrl+shift+190', 'Inserts for ctrl+shift+.', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '≥');
    });

    editor.shortcuts.add(
      'ctrl+shift+187', 'Inserts for ctrl+shift+=', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '≠');
    });

    editor.shortcuts.add(
      'ctrl+shift+189', 'Inserts for ctrl+shift+-', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '±');
    });

    editor.shortcuts.add(
      'ctrl+alt+190', 'Inserts for ctrl+alt+>', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '→');
    });

    editor.shortcuts.add(
      'ctrl+alt+188', 'Inserts for ctrl+alt+<', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '↔︎');
    });



    editor.shortcuts.add(
      'ctrl+shift+83', 'Inserts for ctrl+shift+s', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '∑');
    });

    editor.shortcuts.add(
      'ctrl+shift+80', 'Inserts for ctrl+shift+p', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '∏');
    });

    editor.shortcuts.add(
      'ctrl+shift+86', 'Inserts for ctrl+shift+v', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '∂');
    });

    editor.shortcuts.add(
      'ctrl+shift+68', 'Inserts for ctrl+shift+d', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '∆');
    });

    editor.shortcuts.add(
      'ctrl+alt+68', 'Inserts for ctrl+alt+d', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, 'δ');
    });

    editor.shortcuts.add(
      'ctrl+alt+73', 'Inserts for ctrl+alt+i', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '∫');
    });

    editor.shortcuts.add(
      'ctrl+alt+84', 'Inserts for ctrl+alt+t', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, 'θ');
    });

    editor.shortcuts.add(
      'ctrl+alt+80', 'Inserts for ctrl+alt+p', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, 'π');
    });




}

};




tinymce.init(dfreeBodyConfig);

/* Keyboard Shortcuts */




/* Get Content */

function getContent(){
  var myContent = tinymce.activeEditor.getContent();
  var myContent1 = tinymce.activeEditor.getContent({ format: "html" });
  document.getElementById("preview").innerHTML = myContent1;
  console.log(myContent);
 
  const math = document.getElementById("preview");
  MathJax.Hub.Queue(["Typeset",MathJax.Hub,math]);
  //MathJax.Hub.Queue([math]);
}

function char(){
      if (document.getElementById("char").style.display == "flex"){ 
            document.getElementById("char").style.display = "none";
            document.getElementById("main-screen").style.gridTemplateAreas = '"A A A A" ';
      } else {
            document.getElementById("char").style.display = "flex";
            document.getElementById("main-screen").style.gridTemplateAreas = '"A A A A" "char char char char"';
      }
}

function editor(){

      document.getElementById("editor-button").className = "button bt-active";
      document.getElementById("preview-button").className = "button bt-inactive";
      document.getElementById("shortcut-button").className = "button bt-inactive";
      document.getElementById("help-button").className = "button bt-inactive";

      document.getElementById("main-screen").style.gridTemplateAreas = '"A A A A"';
      document.getElementById("editor").style.display = "block";
      document.getElementById("preview").style.display = "none";
      document.getElementById("shortcut").style.display = "none";
      document.getElementById("help").style.display = "none";

      tinyMCE.activeEditor.selection.select(tinyMCE.activeEditor.getBody(), true);
      tinyMCE.activeEditor.selection.collapse(false);
}

function preview(){
      document.getElementById("editor-button").className = "button bt-inactive";
      document.getElementById("preview-button").className = "button bt-active";
      document.getElementById("shortcut-button").className = "button bt-inactive";
      document.getElementById("help-button").className = "button bt-inactive";

      document.getElementById("main-screen").style.gridTemplateAreas = '"B B B B"';
      document.getElementById("editor").style.display = "none";
      document.getElementById("preview").style.display = "block";
      document.getElementById("shortcut").style.display = "none";
      document.getElementById("help").style.display = "none";    

      getContent();
}

function shortcuts(){
      document.getElementById("editor-button").className = "button bt-inactive";
      document.getElementById("preview-button").className = "button bt-inactive";
      document.getElementById("shortcut-button").className = "button bt-active";
      document.getElementById("help-button").className = "button bt-inactive";
       
      document.getElementById("main-screen").style.gridTemplateAreas = '"C C C C"';
      document.getElementById("editor").style.display = "none";
      document.getElementById("preview").style.display = "none";
      document.getElementById("shortcut").style.display = "block";
      document.getElementById("help").style.display = "none";     
}

function help(){
      document.getElementById("editor-button").className = "button bt-inactive";
      document.getElementById("preview-button").className = "button bt-inactive";
      document.getElementById("shortcut-button").className = "button bt-inactive";
      document.getElementById("help-button").className = "button bt-active";
       
      document.getElementById("main-screen").style.gridTemplateAreas = '"D D D D"';
      document.getElementById("editor").style.display = "none";
      document.getElementById("preview").style.display = "none";
      document.getElementById("shortcut").style.display = "none";
      document.getElementById("help").style.display = "block";     
}


/* Insert Character */

function insertTextAtCursor(character){
  tinymce.activeEditor.execCommand('mceInsertContent', false, character);
}

/* Export to File */

function download(content, fileName, contentType) {
   var a = document.createElement("a");
   var file = new Blob([content], {type: contentType});
   a.href = URL.createObjectURL(file);
   a.download = fileName;
   a.click();
}

function exportFile(data){
   // Output the result
   fileTitle = "math-export.txt"
   download(data, fileTitle, 'text/plain');
}

/* Import from File */



function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }

  var reader = new FileReader();
  reader.onload = function(e) {
    tinymce.activeEditor.setContent(e.target.result);
  };

  reader.readAsText(file);
}
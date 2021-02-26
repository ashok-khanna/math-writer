// define a handler
function doc_keyUp(e) {
    // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time
    if (e.ctrlKey && e.key === 'e') {
        // call your function to do the thing
        editor();
    } else if (e.ctrlKey && e.key === 'p') {
        // call your function to do the thing
        preview();
    } 
}

// register the handler 
document.addEventListener('keyup', doc_keyUp, false);


/* TinyMCE Editor Setup */

var dfreeBodyConfig = {
  selector: '.dfree-body',
  content_css: "editor.css",
  branding: false,
  statusbar: false,
  menubar: false,
  inline: false,
  toolbar: 'charmap | bold italic underline | styleselect forecolor | table link | numlist bullist | removeformat undo redo | searchreplace | mycharmap | help code fullscreen',
  min_height: 200,
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
      text: 'Char Map',
      onAction: function (api) {
        char();
        api.setActive(!api.isActive());
      }
    });},
  init_instance_callback: function (editor) {
    
    editor.shortcuts.add(
      'meta+65', 'Inserts for meta+a', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, 'α');
    });
    editor.shortcuts.add(
      'ctrl+65', 'Inserts for ctrl+a', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '∧');
    });
    editor.shortcuts.add(
      'ctrl+shift+65', 'Inserts for ctrl+shift+a', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '∀');
    });

    editor.shortcuts.add(
      'ctrl+188', 'Inserts for ctrl+,', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '≤');
    });
    editor.shortcuts.add(
      'ctrl+shift+188', 'Inserts for ctrl+shift+,', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '≮');
    });

    editor.shortcuts.add(
      'ctrl+190', 'Inserts for ctrl+,', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '≥');
    });
    editor.shortcuts.add(
      'ctrl+shift+190', 'Inserts for ctrl+shift+,', function () {
      tinymce.activeEditor.execCommand('mceInsertContent', false, '≯');
    });
    
    
}

/*

    'CTRL+E': function(e, original) {
      this.insert('∈');
    },
    'CTRL+C': function(e, original) {
      this.insert('⊂');
    },
    'CTRL+D': function(e, original) {
      this.insert('⊃');
    },
    'CTRL+SHIFT+E': function(e, original) {
      this.insert('∃');
    },
    'CTRL+U': function(e, original) {
      this.insert('∪');
    },
    'CTRL+I': function(e, original) {
      this.insert('∩');
    },
    'CTRL+O': function(e, original) {
      this.insert('∨');
    },
    'CTRL+N': function(e, original) {
      this.insert('¬');
    },
    'CTRL+0': function(e, original) {
      this.insert('∅');
    },
    'CTRL+S': function(e, original) {
      this.insert('∑');
    },
    'CTRL+P': function(e, original) {
      this.insert('∏');
    },
    'CTRL+=': function(e, original) {
      this.insert('≠');
    },
    'CTRL+-': function(e, original) {
      this.insert('→');
    },
    'CTRL+[': function(e, original) {
      this.insert('⇔');

*/
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
      if (document.getElementById("char").style.display == "block"){ 
            document.getElementById("char").style.display = "none";
      } else {
            document.getElementById("char").style.display = "block";
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

      document.getElementById("main-screen").style.gridTemplateAreas = 'B B B B"';
      document.getElementById("editor").style.display = "none";
      document.getElementById("preview").style.display = "block";
      document.getElementById("shortcut").style.display = "none";
      document.getElementById("help").style.display = "none";     

      getContent();
}

function shortcut(){
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
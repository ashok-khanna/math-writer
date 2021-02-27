# Math Writer: Rich Text Math Editing on the Web
A simple web-based rich text editor for Math (AsciiMath / Tex). Feel free to fork this repo and make any changes you prefer. Suggestions and pull requests are welcome.

This math editor utilises MathJax to render maths (refer folder MathJax-2.7.7). Math is entered either with backquote delimited \` .... \` (for AsciiMath) or \(....\), \[...\] and $$...$$ for Latex (the first being for inline, the latter two for block maths). We use an older version of MathJax as, at time of writing, MathJax 3+ does not currently support STIX fonts. The fonts folder contains the STIX fonts that are used in the editor (it also includes some courier fonts, that I haven't used in the editor, but keeping here for my own archives).

The configuration settings for our MathJax installation is contained within index.html. If you want the same math rendering in another web page, you need to transfer this configuration settings as well (refer to the 'Read Me' tab on the actual editor).

The second component of the editor is the TinyMCE Rich Text Editor (refer folder tinymce). The configuration settings for TinyMCE are contaiend within writer.js. TinyMCE has many plugins and is easy to use, so you can experiment and modify the look and feel of the editor to your own preference.

To keep index.html at a manageable size, I have stripped out and placed the read-me content and the shortcut listing to their own files (help.html and shortcuts.html respectively). These are then loaded into the web page via JavaScript (refer to the bottom of index.html).

The stylesheet and main javascript are contained within writer.css and writer.js respectively. The stylsheet makes heavy uses of CSS Grid, one to organise the overall page layout (headers, spacing between rows of items (i.e. gutters), navigation buttons and the editor) and also to toggle between the character insertion table on and off. Basically, whenever we want an item to appear, we use javascript to change its display settings (usually alternating between 'block' and 'none'). We also modify the overall CSS Grid Area layout through JavaScript, depending on our needs at various points in the navigation hierarchy.

There are four main navigation tabs - Editor, Preview, Shortcuts and Read Me. The editor is where text and math is entered: text is in rich-text format, i.e. formatted (so bolds will appear bold and not <b>text</b>), but math is not rendered in the editor. This is because when we are inputting math, we will want to edit it frequently, so it would be jarring to keep switching between rendered math and raw math input.

The preview tab is where math is rendered, via a call to MathJax. Once MathJax completes its processing, you can run a standard page print from your browser to export your content to pdf. You can also export the raw html data via a button in the main editor. This is useful if you want to use your work within your website or blog. Note however, as mentioned in the main read me on the web application, that you need to also include the relevant MathJax code in your personal webpages, if you want the math to appear correctly.

The shortcuts tab is a list of keyboard shortcuts that you can use to enter common mathematical symbols. Note that I didn't focus much on the greek letters; I think its better we use the english alphabet in our work and minimise the use of exotic symbols unless necessary (the list of symbols listed in this tab I feel are necessary, hence I added keyboard shortcuts for them).

The read me tab contains instructions on how to use the editor.

Finally, the motivation for this editor is to encourage the use of AsciiMath in online mathematical content, by making it easier to create. The more we move to a standard input for Mathematics, the better it will be. I prefer AsciiMath to LaTex because it is easier to read in raw form. That said, AsciiMath has many limitations (e.g. correct alignment of blocks of equations), and this editor, being powered by MathJax is fully capable of rendering any AsciiMath and LaTex thrown its way.

I hope you like it and I look forward to hearing your feedback and whether it was useful for you. Feel free to drop me an e-mail at ashok.khanna@hotmail.com.

Best wishes,
Ashok

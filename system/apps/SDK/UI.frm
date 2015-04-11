
<div id="projects"></div>
<div id="panel"></div>
<textarea id="editor"></textarea>
<div id="build-log"></div>

<style type="text/css">

#editor, #projects {
	position: absolute;
	top: 25px;
	left: 0;
	right: 0;
	bottom: 25px;
	width: 100%;
	outline: none;
	border: 1px solid black;
}

#editor {
	left: 125px;
	padding: 5px;
}

pre {
	padding: 5px;
}

#panel {
	position: absolute;
	top: 25px;
	left: 0;
	bottom: 25px;
	width: 125px;
	max-width: 125px;
	outline: none;
	border-top: 1px solid gray;
	border-right: 1px solid gray;
	overflow: auto;
}

#panel div {

	border-bottom: 1px solid gray;
	padding: 5px;

}

#panel div:hover {

	background-color: #D4D4D4;
	cursor: pointer;

}

#build-log {
	position: absolute;
	top: 10%;
	left: 10%;
	right: 10%;
	bottom: 10%;
	border: 1px solid gray;
	background-color: black;
}

#build-log-closer, #build-log-opener {
	border: 1px solid gray;
	padding: 5px;
	border-radius: 5px;
	display: inline-block;
}

#build-log-closer:hover, #build-log-opener:hover {
	background-color: #2B2A2A;
	cursor: pointer;
}

body {

	background-color: #524F52;

}

#projects div {

	border: 1px solid gray;
	padding: 5px;

}

#projects div:hover {

	background-color: #D4D4D4;
	cursor: pointer;

}

</style>

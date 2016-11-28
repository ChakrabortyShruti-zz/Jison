%{
	var path = require('path');
	var optNode = require(path.resolve('./operatorNode.js'));
	var numNode = require(path.resolve('./numNode.js'));
	var identifierNode = require(path.resolve('./identifierNode.js'));
	var Tree = require(path.resolve('./Tree.js'));
	var trees = [];
%}

%lex
%%

\s+                   /* skip whitespace */
[a-z][a-zA-Z0-9\_]*   return 'IDENTIFIER' 
[0-9]+  		      return 'NUMBER'
";"					  return ';'
"="                   return '='
"+"                   return '+'
"*"                   return '*'
<<EOF>>               return 'EOF'

/lex

%left '='
%left '+'
%left '*'
%left ';'


%start expressions

%%

expressions
	: block
	| expressions block
	| expressions EOF {return trees;}
	;

statement
	: assignment_expression
	| statement '+' statement {$$ = new Tree(new optNode($2),[$1,$3]);}
	| statement '*' statement {$$ = new Tree(new optNode($2),[$1,$3]);}
	// | statement operator statement {$$ = new Tree($2,[$1,$3]);}
	| number
	| identifier
	;

// operator
// 	: '+' {$$ = new optNode($1)}
// 	| '*' {$$ = new optNode($1)}
// 	;

assignment_expression 
	: identifier '=' statement {$$ = new Tree(new optNode($2),[$1,$3])}
	;

block
	: statement ';' {trees.push($$);}
	;


identifier
	: IDENTIFIER {$$ = new identifierNode(yytext)}
	;

number
	: NUMBER { $$ = new numNode(Number(yytext))}
	;

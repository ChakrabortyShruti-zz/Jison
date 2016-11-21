%{
    var numberNode = require('./numNode.js');
    var operatorNode = require('./operatorNode.js');
%}

%lex
%%

\s+                   /* skip whitespace */
[0-9]+  				  return 'NUMBER'
"+"                   return '+'
"*"					  return '*'
<<EOF>>               return 'EOF'

/lex

/* operator associations and precedence */

%left '+'
%left '*'

%start expressions

%% /* language grammar */

expressions
    : e EOF
        {return $$}
    ;

e
    : e '+' e
        {
        $$ = new operatorNode($2,$1,$3)
        }
    | e '*' e
        {
        $$ = new operatorNode($2,$1,$3)
        }
    | NUMBER
        {
        $$ = new numberNode(Number(yytext))
        }
    ;


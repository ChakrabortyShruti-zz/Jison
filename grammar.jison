%lex
%%

\s+                   /* skip whitespace */
[0-9]  				  return 'NUMBER'
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
        {return $1;}
    ;

e
    : e '+' e
        {
        $$ = [$1,$2,$3]
        }
    | e '*' e
        {
        $$ = [$1,$2,$3]
        }
    | NUMBER
    ;


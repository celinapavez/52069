grammar configuracion;

// Reglas del parser (sintácticas)

configuracion : CONFIGURACION nombre L_LLAVE secciones R_LLAVE ;

secciones : (seccion)* ;

seccion : SECCION nombre L_LLAVE parametros R_LLAVE ;

parametros : (parametro)* ;

parametro : nombre IGUAL valor PUNTOYCOMA ;

valor : numero
      | cadena
      | booleano ;

numero : NUMERO ;

cadena : CADENA ;

booleano : VERDADERO | FALSO ;

nombre : NOMBRE ;

// Reglas del lexer (léxicas)

CONFIGURACION : 'configuracion' ;
SECCION       : 'seccion' ;
VERDADERO     : 'verdadero' ;
FALSO         : 'falso' ;

NOMBRE : LETRA (LETRA | DIGITO)* ;
NUMERO : DIGITO+ ;
CADENA : '"' CARACTER* '"' ;

fragment CARACTER : LETRA | DIGITO | SIMBOLO ;
fragment LETRA : [a-zA-Z] ;
fragment DIGITO : [0-9] ;
fragment SIMBOLO : '.' | ',' | '!' | '?' | ':' | ';' | ' ' ;

L_LLAVE     : '{' ;
R_LLAVE     : '}' ;
IGUAL       : '=' ;
PUNTOYCOMA  : ';' ;

// Ignorar espacios y comentarios
WS         : [ \t\r\n]+ -> skip ;
COMENTARIO : '//' ~[\r\n]* -> skip ;

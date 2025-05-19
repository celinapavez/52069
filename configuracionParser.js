// Generated from configuracion.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import configuracionListener from './configuracionListener.js';
const serializedATN = [4,1,13,63,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,1,0,1,0,1,0,1,1,5,1,
28,8,1,10,1,12,1,31,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,5,3,40,8,3,10,3,12,3,
43,9,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,3,5,53,8,5,1,6,1,6,1,7,1,7,1,8,1,
8,1,9,1,9,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,1,1,0,3,4,56,0,20,1,0,0,
0,2,29,1,0,0,0,4,32,1,0,0,0,6,41,1,0,0,0,8,44,1,0,0,0,10,52,1,0,0,0,12,54,
1,0,0,0,14,56,1,0,0,0,16,58,1,0,0,0,18,60,1,0,0,0,20,21,5,1,0,0,21,22,3,
18,9,0,22,23,5,8,0,0,23,24,3,2,1,0,24,25,5,9,0,0,25,1,1,0,0,0,26,28,3,4,
2,0,27,26,1,0,0,0,28,31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,3,1,0,0,0,
31,29,1,0,0,0,32,33,5,2,0,0,33,34,3,18,9,0,34,35,5,8,0,0,35,36,3,6,3,0,36,
37,5,9,0,0,37,5,1,0,0,0,38,40,3,8,4,0,39,38,1,0,0,0,40,43,1,0,0,0,41,39,
1,0,0,0,41,42,1,0,0,0,42,7,1,0,0,0,43,41,1,0,0,0,44,45,3,18,9,0,45,46,5,
10,0,0,46,47,3,10,5,0,47,48,5,11,0,0,48,9,1,0,0,0,49,53,3,12,6,0,50,53,3,
14,7,0,51,53,3,16,8,0,52,49,1,0,0,0,52,50,1,0,0,0,52,51,1,0,0,0,53,11,1,
0,0,0,54,55,5,6,0,0,55,13,1,0,0,0,56,57,5,7,0,0,57,15,1,0,0,0,58,59,7,0,
0,0,59,17,1,0,0,0,60,61,5,5,0,0,61,19,1,0,0,0,3,29,41,52];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class configuracionParser extends antlr4.Parser {

    static grammarFileName = "configuracion.g4";
    static literalNames = [ null, "'configuracion'", "'seccion'", "'verdadero'", 
                            "'falso'", null, null, null, "'{'", "'}'", "'='", 
                            "';'" ];
    static symbolicNames = [ null, "CONFIGURACION", "SECCION", "VERDADERO", 
                             "FALSO", "NOMBRE", "NUMERO", "CADENA", "L_LLAVE", 
                             "R_LLAVE", "IGUAL", "PUNTOYCOMA", "WS", "COMENTARIO" ];
    static ruleNames = [ "configuracion", "secciones", "seccion", "parametros", 
                         "parametro", "valor", "numero", "cadena", "booleano", 
                         "nombre" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = configuracionParser.ruleNames;
        this.literalNames = configuracionParser.literalNames;
        this.symbolicNames = configuracionParser.symbolicNames;
    }



	configuracion() {
	    let localctx = new ConfiguracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, configuracionParser.RULE_configuracion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(configuracionParser.CONFIGURACION);
	        this.state = 21;
	        this.nombre();
	        this.state = 22;
	        this.match(configuracionParser.L_LLAVE);
	        this.state = 23;
	        this.secciones();
	        this.state = 24;
	        this.match(configuracionParser.R_LLAVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	secciones() {
	    let localctx = new SeccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, configuracionParser.RULE_secciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 26;
	            this.seccion();
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	seccion() {
	    let localctx = new SeccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, configuracionParser.RULE_seccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.match(configuracionParser.SECCION);
	        this.state = 33;
	        this.nombre();
	        this.state = 34;
	        this.match(configuracionParser.L_LLAVE);
	        this.state = 35;
	        this.parametros();
	        this.state = 36;
	        this.match(configuracionParser.R_LLAVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametros() {
	    let localctx = new ParametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, configuracionParser.RULE_parametros);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 38;
	            this.parametro();
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametro() {
	    let localctx = new ParametroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, configuracionParser.RULE_parametro);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.nombre();
	        this.state = 45;
	        this.match(configuracionParser.IGUAL);
	        this.state = 46;
	        this.valor();
	        this.state = 47;
	        this.match(configuracionParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, configuracionParser.RULE_valor);
	    try {
	        this.state = 52;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 49;
	            this.numero();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 50;
	            this.cadena();
	            break;
	        case 3:
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 51;
	            this.booleano();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, configuracionParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(configuracionParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, configuracionParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(configuracionParser.CADENA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	booleano() {
	    let localctx = new BooleanoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, configuracionParser.RULE_booleano);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===4)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, configuracionParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(configuracionParser.NOMBRE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

configuracionParser.EOF = antlr4.Token.EOF;
configuracionParser.CONFIGURACION = 1;
configuracionParser.SECCION = 2;
configuracionParser.VERDADERO = 3;
configuracionParser.FALSO = 4;
configuracionParser.NOMBRE = 5;
configuracionParser.NUMERO = 6;
configuracionParser.CADENA = 7;
configuracionParser.L_LLAVE = 8;
configuracionParser.R_LLAVE = 9;
configuracionParser.IGUAL = 10;
configuracionParser.PUNTOYCOMA = 11;
configuracionParser.WS = 12;
configuracionParser.COMENTARIO = 13;

configuracionParser.RULE_configuracion = 0;
configuracionParser.RULE_secciones = 1;
configuracionParser.RULE_seccion = 2;
configuracionParser.RULE_parametros = 3;
configuracionParser.RULE_parametro = 4;
configuracionParser.RULE_valor = 5;
configuracionParser.RULE_numero = 6;
configuracionParser.RULE_cadena = 7;
configuracionParser.RULE_booleano = 8;
configuracionParser.RULE_nombre = 9;

class ConfiguracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = configuracionParser.RULE_configuracion;
    }

	CONFIGURACION() {
	    return this.getToken(configuracionParser.CONFIGURACION, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	L_LLAVE() {
	    return this.getToken(configuracionParser.L_LLAVE, 0);
	};

	secciones() {
	    return this.getTypedRuleContext(SeccionesContext,0);
	};

	R_LLAVE() {
	    return this.getToken(configuracionParser.R_LLAVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.enterConfiguracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.exitConfiguracion(this);
		}
	}


}



class SeccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = configuracionParser.RULE_secciones;
    }

	seccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SeccionContext);
	    } else {
	        return this.getTypedRuleContext(SeccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.enterSecciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.exitSecciones(this);
		}
	}


}



class SeccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = configuracionParser.RULE_seccion;
    }

	SECCION() {
	    return this.getToken(configuracionParser.SECCION, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	L_LLAVE() {
	    return this.getToken(configuracionParser.L_LLAVE, 0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	R_LLAVE() {
	    return this.getToken(configuracionParser.R_LLAVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.enterSeccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.exitSeccion(this);
		}
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = configuracionParser.RULE_parametros;
    }

	parametro = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParametroContext);
	    } else {
	        return this.getTypedRuleContext(ParametroContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.exitParametros(this);
		}
	}


}



class ParametroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = configuracionParser.RULE_parametro;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	IGUAL() {
	    return this.getToken(configuracionParser.IGUAL, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(configuracionParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.enterParametro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.exitParametro(this);
		}
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = configuracionParser.RULE_valor;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	booleano() {
	    return this.getTypedRuleContext(BooleanoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.exitValor(this);
		}
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = configuracionParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(configuracionParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.exitNumero(this);
		}
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = configuracionParser.RULE_cadena;
    }

	CADENA() {
	    return this.getToken(configuracionParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.exitCadena(this);
		}
	}


}



class BooleanoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = configuracionParser.RULE_booleano;
    }

	VERDADERO() {
	    return this.getToken(configuracionParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(configuracionParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.enterBooleano(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.exitBooleano(this);
		}
	}


}



class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = configuracionParser.RULE_nombre;
    }

	NOMBRE() {
	    return this.getToken(configuracionParser.NOMBRE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof configuracionListener ) {
	        listener.exitNombre(this);
		}
	}


}




configuracionParser.ConfiguracionContext = ConfiguracionContext; 
configuracionParser.SeccionesContext = SeccionesContext; 
configuracionParser.SeccionContext = SeccionContext; 
configuracionParser.ParametrosContext = ParametrosContext; 
configuracionParser.ParametroContext = ParametroContext; 
configuracionParser.ValorContext = ValorContext; 
configuracionParser.NumeroContext = NumeroContext; 
configuracionParser.CadenaContext = CadenaContext; 
configuracionParser.BooleanoContext = BooleanoContext; 
configuracionParser.NombreContext = NombreContext; 

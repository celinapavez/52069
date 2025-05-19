import antlr4 from 'antlr4';
import fs from 'fs';
import ConfiguracionLexer from './configuracionLexer.js';
import ConfiguracionParser from './configuracionParser.js';
import Traductor from './traductor.js';

// Leer archivo de entrada
const input = fs.readFileSync('input.txt', 'utf8');
const chars = new antlr4.InputStream(input);

// Crear lexer y token stream
const lexer = new ConfiguracionLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);

// Mostrar tabla de tokens
tokens.fill();
console.log('\n--- Tabla de Tokens ---');
tokens.tokens.forEach(token => {
  // Se omiten los tokens de fin de archivo (EOF)
  if (token.type !== antlr4.Token.EOF) {
    const tokenType = token.type;
    const symbolicName = ConfiguracionLexer.symbolicNames[tokenType];
    if (symbolicName) {
      console.log(`Token: ${symbolicName} | Lexema: "${token.text}" | Línea: ${token.line}`);
    } else if (token.text && token.text.trim() !== "") {
      console.log(`Token no reconocido: "${token.text}" en línea ${token.line}`);
    }
  }
});

// Crear el parser y configurar listeners de error
const parser = new ConfiguracionParser(tokens);
parser.buildParseTrees = true;
parser.removeErrorListeners();
parser.addErrorListener({
  syntaxError: (recognizer, offendingSymbol, line, column, msg) => {
    console.error(`\n❌ Error de sintaxis en línea ${line}, columna ${column}: ${msg}`);
  }
});

// Obtener el árbol de análisis sintáctico usando la regla inicial "configuracion"
const tree = parser.configuracion();
console.log('\n--- Árbol de Análisis Sintáctico (toStringTree) ---');
console.log(tree.toStringTree(parser.ruleNames));

// Traducción a objeto JavaScript usando el visitor personalizado
const traductor = new Traductor();
const resultado = traductor.visit(tree);
console.log('\n--- Traducción a Objeto JavaScript ---');
console.dir(resultado, { depth: null });

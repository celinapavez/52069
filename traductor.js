import ConfiguracionVisitor from './configuracionVisitor.js';

export default class Traductor extends ConfiguracionVisitor {

  /**
   * Sobreescribo visitChildren para que retorne únicamente los resultados
   * definidos de cada hijo. Esto evita que se acumulen valores
   * undefined en la estructura final.
   */
  visitChildren(ctx) {
    let results = [];
    for (let i = 0; i < ctx.getChildCount(); i++) {
      const childResult = this.visit(ctx.getChild(i));
      if (childResult !== undefined && childResult !== null) {
        results.push(childResult);
      }
    }
    // Si solo hay un elemento definido, lo retorno sin envolver en array.
    if (results.length === 1) return results[0];
    return results;
  }

  /**
   * Si querés que los tokens de puntuación (como {, }, =, ;) no aparezcan
   * en la salida, sobreescribí visitTerminal para que retorne null en esos casos.
   */
  visitTerminal(ctx) {
    const text = ctx.getText();
    if (text === '{' || text === '}' || text === '=' || text === ';') {
      return null;
    }
    return text;
  }

  // Visita configuración principal
  visitConfiguracion(ctx) {
    return {
      tipo: 'configuracion',
      nombre: this.visit(ctx.nombre()),
      secciones: this.visit(ctx.secciones())
    };
  }

  // Visita secciones (lista de seccion)
  visitSecciones(ctx) {
    let secciones = ctx.seccion ? ctx.seccion() : [];
    // Normaliza: si no es array, lo convierte en array
    if (!Array.isArray(secciones)) secciones = [secciones];
    // Si la lista está vacía, retorna []
    if (secciones[0] == null) return [];
    return secciones.map(s => this.visit(s));
  }

  // Visita lista de parámetros
  visitParametros(ctx) {
    let parametros = ctx.parametro ? ctx.parametro() : [];
    if (!Array.isArray(parametros)) parametros = [parametros];
    if (parametros[0] == null) return [];
    return parametros.map(p => this.visit(p));
  }

  // Visita una sección
  visitSeccion(ctx) {
    return {
      tipo: 'seccion',
      nombre: this.visit(ctx.nombre()),
      parametros: this.visit(ctx.parametros())
    };
  }

  // Visita un parámetro (clave : valor)
  visitParametro(ctx) {
    const clave = this.visit(ctx.nombre());
    const valor = this.visit(ctx.valor());
    return { clave, valor };
  }

  // Visita nombre (terminal o regla)
  visitNombre(ctx) {
    return ctx.getText();
  }

  // Visita valor (número, cadena, booleano)
  visitValor(ctx) {
    if (ctx.numero()) {
      return this.visit(ctx.numero());
    }
    if (ctx.cadena()) {
      return this.visit(ctx.cadena());
    }
    if (ctx.booleano()) {
      return this.visit(ctx.booleano());
    }
    return null;
  }

  visitNumero(ctx) {
    return Number(ctx.getText());
  }

  visitCadena(ctx) {
    // Elimina las comillas dobles del principio y final
    return ctx.getText().slice(1, -1);
  }

  visitBooleano(ctx) {
    return ctx.getText() === 'verdadero';
  }
}

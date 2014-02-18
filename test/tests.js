var assert = chai.assert;

suite('Resultados de los tests:', function() {
    test('Detección correcta de header', function() {
        var tokens = lexer('[HOLA]');
		assert.equal(tokens[0].type,'header');
    });
    test('Detección correcta de blanco', function() {
        var tokens = lexer(' ');
		assert.equal(tokens[0].type,'blanks');
    });
    test('Detección correcta de comentario', function() {
        var tokens = lexer('; Esto es un comentario ');
		assert.equal(tokens[0].type,'comments');
    });
    test('Detección correcta de asignación', function() {
        var tokens = lexer('Nombre = Antonio');
		assert.equal(tokens[0].type,'nameEqualValue');
    });
    test('Detección correcta de un error', function() {
        var tokens = lexer('@!¿¡?');
		assert.equal(tokens[0].type,'error');
    });


});



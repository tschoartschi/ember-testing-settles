import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render, triggerEvent} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | problem-example', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {

        await render(hbs`{{problem-example}}`);

        const contentType = {type: 'image/jpg'};
        const dispatchedFiles = [new File([], 'cat.jpg', contentType)];
        await triggerEvent('input[type="file"]', 'change', {files: dispatchedFiles});

        assert.equal(this.element.querySelector('.file') !== null, true);

    });
});

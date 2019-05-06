import Component from '@ember/component';
import {fileToBase64} from '../utils/file-to-base64';

export default Component.extend({

    file: null,

    async onFilesChanged() {
        await fileToBase64();
        this.set('file', '123');
    }
});

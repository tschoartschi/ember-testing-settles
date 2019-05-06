import {Promise as RSVPPromise} from 'rsvp';
export const fileToBase64 = () => {
    return new RSVPPromise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 150);
    });
}
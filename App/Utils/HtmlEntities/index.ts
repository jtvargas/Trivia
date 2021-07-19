import { decode as decodeHTML } from 'html-entities';

export const decode = entities => decodeHTML(entities);

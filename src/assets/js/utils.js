import { ToastProgrammatic as Toast } from 'buefy';

/**
 * @typedef ColorType
 * @type {'is-white'|'is-black'|'is-light'|'is-dark'|'is-primary'|'is-info'|'is-success'|'is-warning'|'is-danger'}
 */

/**
 * @description 设置标题
 * @param {string} [title] 标题内容
 */
export const setTitle = (title) => {
    if (title) {
        document.title = `${title} - 薛坤借钱不还，父母帮凶`;
    } else {
        document.title = '良民日记主页';
    }
};

/**
 * @description Toast
 * @param {object} options
 * @param {number} [options.duration] 时长（毫秒）
 * @param {boolean} [options.indefinite] 无限时长
 * @param {string} options.message 消息内容
 * @param {ColorType} [options.type] 消息类型
 */
export const toast = (options) => {
    const {
        duration = 2000,
        indefinite = false,
        message = '',
        type = 'is-info',
    } = options;

    return Toast.open({
        duration,
        indefinite,
        message,
        pauseOnHover: true,
        type,
    });
};

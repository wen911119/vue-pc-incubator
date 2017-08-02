// 待补充错误码映射表
const errorCodeMap = {
    '12021001': '验证码错误',
    '12021002': '手机号已被注册，请直接登陆',
    '12021003': '检查到手机号未被注册，请先注册账号',
    '11521013': '单据模板不存在'
}

const defaultErrorMessage = '系统异常'

export default function (errorCode) {
    let errorMsg = errorCodeMap[errorCode]
    if (errorMsg) {
        alert(errorMsg);
    } else {
        alert(defaultErrorMessage);
    }
}
const isPhoneNum = phoneNum => {
  const rePhoneNum = /^1[34578]\d{9}$/
  return rePhoneNum.test(phoneNum)
}

const isEmail = email => {
  const reEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return reEmail.test(email)
}

export function nicknameValidator(rule, value, callback) {
  if (!/^[\u4e00-\u9fa5·0-9A-z]{6,20}$/.test(value)) {
    callback(new Error('请输入6-20位昵称,不能包含除·-_+之外的特殊字符！'))
  }
  callback()
}

export function userNameValidator(rule, value, callback) {
  if (!isPhoneNum(value) && !isEmail(value)) {
    callback(new Error('请输入合法的手机号或邮箱账号！'))
  }
  callback()
}

export function verifyCodeValidator(rule, value, callback) {
  if (!/^\d{6}$/.test(value)) {
    callback(new Error('请输入6位正确的验证码！'))
  }
  callback()
}

export function passwordValidator(rule, value, callback) {
  if (!/^(?![A-z]+$)(?!\d+$)(?![A-z_+-]+$)(?![0-9_+-]+$)[A-z0-9_+-]{8,20}$/.test(value)) {
    callback(new Error('请输入8-20位密码,必须存在数字|字母|_+-|中两种以上组合,不能包含其他特殊字符！'))
  }
  callback()
}

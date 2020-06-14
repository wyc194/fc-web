const isPhoneNum = phoneNum => {
  const rePhoneNum = /^1[34578]\d{9}$/
  return rePhoneNum.test(phoneNum)
}

const isEmail = email => {
  const reEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return reEmail.test(email)
}

const userNameValidator = (rule, value, callback) => {
  if (!isPhoneNum(value) && !isEmail(value)) {
    callback(new Error('请输入合法的手机号或邮箱账号！'))
  }
  callback()
}

export {
  isPhoneNum,
  isEmail,
  userNameValidator
}

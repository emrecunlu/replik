import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const formSchema  = Yup.object().shape({
    name: Yup.string()
    .min(3, 'İsminiz 3 karakterden daha az olamaz.')
    .max(25, 'İsminiz 25 karakterden daha fazla olamaz.')
    .required('Lütfen isminizi giriniz.'),
    email: Yup.string()
    .email('Lütfen geçerli bir e-posta adresi giriniz.')
    .required('Lüfen e-posta adresinizi giriniz.'),
    phone: Yup.string().matches(phoneRegExp, 'Lütfen geçerli bir telefon numarası giriniz.')
    .required('Lütfen telefon numaranızı giriniz.'),
    subject: Yup.string()
    .required('Lütfen konu giriniz.'),
    message: Yup.string()
    .max(256, 'Mesajınız 256 karakterden daha fazla olamaz.')
    .required('Lütfen mesajınız giriniz.')
})
import add_image from '../../../assets/safe_images/add.png'
import protected_image from '../../../assets/safe_images/protected.png'
import phishing_image from '../../../assets/safe_images/phishing.png'
import confidentiality_image from '../../../assets/safe_images/confidentiality.png'

export const securityData = [
    {
        title: "Мы не используем содержимое почты для подбора рекламы",
        desc: "В Gmail все исходящие и входящие письма шифруются с использованием ведущих в отрасли технологий. Письма в Gmail никогда не используются для персонализации рекламы.",
        image: add_image
    },
    {
        title: "Каждый день Gmail защищает более миллиарда пользователей",
        desc: "Gmail блокирует 99,9 % писем со спамом, вредоносным ПО и подозрительными ссылками.",
        image: protected_image
    },
    {
        title: "Передовые технологии защищают от фишинга",
        desc: "Если вам придет подозрительное письмо, Gmail предупредит вас о возможных рисках.",
        image: phishing_image
    },
    {
        title: "Конфиденциальность исходящих писем",
        desc: "Конфиденциальный режим позволяет задать срок доступа к письму, включить доступ по коду из SMS, запретить пересылку, копирование и печать письма, а также скачивание файлов.",
        image: confidentiality_image
    }
]